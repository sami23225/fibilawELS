#!/bin/bash
# Fibi Law ELS — SCORM Build Script
# Usage: bash build.sh unit-01        (builds one module)
#        bash build.sh all             (builds all modules)

set -e
DIST="./dist"
SHARED="./shared"
MODULES="./modules"

mkdir -p "$DIST"

build_module() {
  local unit=$1
  local src="$MODULES/$unit"

  if [ ! -d "$src" ]; then
    echo "ERROR: Module folder not found: $src"
    exit 1
  fi

  local name=$(grep -oP '(?<=<title>)[^<]+' "$src/imsmanifest.xml" | head -1 | tr ' ' '_' | tr -d ':|')
  local zipname="${unit}_${name}.zip"

  echo "Building: $unit → dist/$zipname"

  # Stage in a temp folder
  local tmp=$(mktemp -d)
  cp -r "$src/." "$tmp/"
  cp "$SHARED/"* "$tmp/"

  # Zip it up
  (cd "$tmp" && zip -r "$OLDPWD/$DIST/$zipname" . -x "*.DS_Store")
  rm -rf "$tmp"

  echo "Done: dist/$zipname"
}

if [ "$1" = "all" ]; then
  for dir in "$MODULES"/*/; do
    unit=$(basename "$dir")
    build_module "$unit"
  done
elif [ -n "$1" ]; then
  build_module "$1"
else
  echo "Usage: bash build.sh <unit-folder-name> | all"
  echo "Example: bash build.sh unit-01"
fi
