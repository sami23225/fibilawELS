/**
 * Fibi Law ELS — SCORM 1.2 API Wrapper
 * Handles communication between the module and Moodle.
 */

const SCORM = (function () {
  let API = null;
  let initialized = false;
  let startTime = new Date();

  // Find the SCORM API in the window/parent chain
  function findAPI(win) {
    let attempts = 0;
    while (win.API == null && win.parent != null && win.parent !== win) {
      attempts++;
      if (attempts > 10) return null;
      win = win.parent;
    }
    return win.API || null;
  }

  function getAPI() {
    API = findAPI(window);
    if (!API && window.opener) API = findAPI(window.opener);
    return API;
  }

  function init() {
    API = getAPI();
    if (!API) {
      console.warn('SCORM API not found — running in standalone/preview mode.');
      return false;
    }
    const result = API.LMSInitialize('');
    initialized = result === 'true' || result === true;
    if (initialized) {
      API.LMSSetValue('cmi.core.score.min', '0');
      API.LMSSetValue('cmi.core.score.max', '100');
    }
    return initialized;
  }

  function setValue(key, value) {
    if (!API || !initialized) return;
    API.LMSSetValue(key, String(value));
    API.LMSCommit('');
  }

  function getValue(key) {
    if (!API || !initialized) return '';
    return API.LMSGetValue(key);
  }

  function setScore(raw) {
    setValue('cmi.core.score.raw', Math.round(raw));
  }

  function setStatus(status) {
    // status: 'passed' | 'failed' | 'completed' | 'incomplete'
    setValue('cmi.core.lesson_status', status);
  }

  function setSessionTime() {
    const elapsed = new Date() - startTime;
    const totalSeconds = Math.floor(elapsed / 1000);
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    const pad = n => String(n).padStart(2, '0');
    setValue('cmi.core.session_time', `${pad(h)}:${pad(m)}:${pad(s)}`);
  }

  function finish(score, passed) {
    if (!API || !initialized) return;
    setScore(score);
    setSessionTime();
    setStatus(passed ? 'passed' : 'failed');
    API.LMSFinish('');
  }

  function suspend() {
    if (!API || !initialized) return;
    setSessionTime();
    setStatus('incomplete');
    API.LMSFinish('');
  }

  // Auto-suspend if window closes without finishing
  window.addEventListener('beforeunload', () => {
    if (initialized) suspend();
  });

  return { init, setValue, getValue, setScore, setStatus, finish, suspend };
})();
