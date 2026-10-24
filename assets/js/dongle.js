/* Dongle: a small animated mascot in the bottom-right corner.
 *
 * - Frames: /assets/images/dongle/f0..f8.png (cut from the desktop Dongle app's sprite sheet).
 * - Shirt colour follows the site's accent colour (--adr-rgb, set by the colour-theme picker),
 *   so the default is whatever colour theme is currently active.
 * - Click: random reaction + next message. Hover: surprised. Idle for a minute: falls asleep.
 * - Speech cloud: introduces Amutheezan and cycles through his research topics (MESSAGES).
 * - Hidden below 600px wide and when printing; the x button hides it for good (localStorage).
 */
(function () {
  'use strict';

  var SCRIPT = document.currentScript;

  var FRAME_COUNT = 9;
  var FRAME_W = 127, FRAME_H = 183;
  var SHOW_W = 76, SHOW_H = 110;
  var BLUE_HUE = 217;          /* hue of the original shirt (#3b82f6) */
  var FALLBACK_RGB = '99, 102, 241';
  var STORAGE_KEY = 'dongle-hidden';

  var ANIMS = {
    idle:      { frames: [0],          fps: 1, dur: 0   },
    wave:      { frames: [1, 2],       fps: 4, dur: 2.6 },
    dance:     { frames: [2, 3, 6, 7], fps: 5, dur: 4.2 },
    laugh:     { frames: [6, 7],       fps: 6, dur: 2.4 },
    spin:      { frames: [0, 4, 5, 4], fps: 5, dur: 1.8 },
    surprised: { frames: [3],          fps: 1, dur: 1.3 },
    sleep:     { frames: [8],          fps: 1, dur: 0   }
  };
  var REACTIONS = ['wave', 'dance', 'laugh', 'spin'];

  /* Speech cloud: messages alternate on a timer (and on click). Keep in step with
   * _data/hero_headings.yml. The first one is the greeting and makes Dongle wave. */
  var MESSAGES = [
    'Hi, I’m Amutheezan Sivagnanam, a Data Engineer at Shell.',
    'I work on software vulnerability dataset quality, automated repair, and deception detection.',
    'I study how robust label-error detection is to near-duplicate and tampered samples.',
    'I build multi-agent methods for automated repair of software vulnerabilities.',
    'I study deception detection that accounts for figures of speech.',
    'My Ph.D. applied deep reinforcement learning to optimization problems in transportation.'
  ];
  var FIRST_MESSAGE_AT = 2.5;  /* seconds after load */
  var GAP_BETWEEN = 3;         /* seconds of silence between messages */

  try { if (localStorage.getItem(STORAGE_KEY) === '1') { return; } } catch (e) {}
  if (window.matchMedia && window.matchMedia('print').matches) { return; }

  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- styles ---------- */
  var style = document.createElement('style');
  style.textContent =
    '#dongle{position:absolute;right:0;bottom:0;width:100%;height:100%;' +
    'padding:0;border:0;background:none;cursor:pointer;touch-action:manipulation;' +
    '-webkit-tap-highlight-color:transparent;transform-origin:50% 100%;}' +
    '#dongle canvas{width:100%;height:100%;display:block;pointer-events:none;' +
    'filter:drop-shadow(0 3px 5px rgba(0,0,0,.25));}' +
    '#dongle:focus-visible{outline:2px solid rgba(var(--adr-rgb,' + FALLBACK_RGB + '),.8);outline-offset:4px;border-radius:8px;}' +
    '#dongle-close{position:absolute;top:-6px;right:-6px;width:20px;height:20px;border-radius:50%;' +
    'border:0;background:rgba(0,0,0,.55);color:#fff;font:14px/20px sans-serif;padding:0;cursor:pointer;' +
    'opacity:0;transition:opacity .2s;}' +
    '#dongle-wrap:hover #dongle-close,#dongle-close:focus-visible{opacity:1;}' +
    '#dongle-wrap{position:fixed;right:16px;bottom:10px;width:' + SHOW_W + 'px;height:' + SHOW_H + 'px;z-index:40;}' +
    '#dongle-cloud{position:absolute;right:calc(100% + 10px);top:2px;width:max-content;max-width:230px;' +
    'box-sizing:border-box;padding:10px 14px;border-radius:18px;font:14px/1.4 system-ui,sans-serif;' +
    'background:#fff;color:#1f2430;border:2px solid rgba(var(--adr-rgb,' + FALLBACK_RGB + '),.85);' +
    'box-shadow:0 4px 14px rgba(0,0,0,.18);opacity:0;transform:translateX(8px) scale(.96);' +
    'transform-origin:100% 20%;transition:opacity .25s,transform .25s;pointer-events:none;}' +
    '#dongle-cloud.show{opacity:1;transform:none;}' +
    '#dongle-cloud:before,#dongle-cloud:after{content:"";position:absolute;border-radius:50%;background:#fff;' +
    'border:2px solid rgba(var(--adr-rgb,' + FALLBACK_RGB + '),.85);}' +
    '#dongle-cloud:before{width:12px;height:12px;right:-18px;top:16px;}' +
    '#dongle-cloud:after{width:7px;height:7px;right:-28px;top:26px;}' +
    ':root[data-theme="dark"] #dongle-cloud,:root[data-theme="dark"] #dongle-cloud:before,' +
    ':root[data-theme="dark"] #dongle-cloud:after{background:#232834;color:#e8eaf0;}' +
    '@media (prefers-color-scheme:dark){:root:not([data-theme="light"]) #dongle-cloud,' +
    ':root:not([data-theme="light"]) #dongle-cloud:before,:root:not([data-theme="light"]) #dongle-cloud:after' +
    '{background:#232834;color:#e8eaf0;}}' +
    '@media (prefers-reduced-motion:reduce){#dongle-cloud{transition:none}}' +
    '@media (max-width:600px),print{#dongle-wrap{display:none}}';
  document.head.appendChild(style);

  /* ---------- colour helpers ---------- */
  function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b), l = (max + min) / 2, h = 0, s = 0;
    if (max !== min) {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      if (max === r) { h = (g - b) / d + (g < b ? 6 : 0); }
      else if (max === g) { h = (b - r) / d + 2; }
      else { h = (r - g) / d + 4; }
      h *= 60;
    }
    return [h, s, l];
  }

  function hslToRgb(h, s, l) {
    h /= 360;
    function hue(p, q, t) {
      if (t < 0) { t += 1; }
      if (t > 1) { t -= 1; }
      if (t < 1 / 6) { return p + (q - p) * 6 * t; }
      if (t < 1 / 2) { return q; }
      if (t < 2 / 3) { return p + (q - p) * (2 / 3 - t) * 6; }
      return p;
    }
    if (s === 0) { return [l * 255, l * 255, l * 255]; }
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s, p = 2 * l - q;
    return [hue(p, q, h + 1 / 3) * 255, hue(p, q, h) * 255, hue(p, q, h - 1 / 3) * 255];
  }

  function accentRgb() {
    var v = '';
    try { v = getComputedStyle(document.documentElement).getPropertyValue('--adr-rgb'); } catch (e) {}
    v = (v || '').trim() || FALLBACK_RGB;
    var parts = v.split(',').map(function (n) { return parseInt(n, 10); });
    return parts.length === 3 && parts.every(isFinite) ? parts : [99, 102, 241];
  }

  /* ---------- frames ---------- */
  var images = [];
  var recolored = {};   /* "r,g,b" -> array of canvases */
  var loaded = 0;

  function recolorFrames(rgb) {
    var key = rgb.join(',');
    if (recolored[key]) { return recolored[key]; }
    var targetHue = rgbToHsl(rgb[0], rgb[1], rgb[2])[0];
    var out = images.map(function (img) {
      var c = document.createElement('canvas');
      c.width = FRAME_W; c.height = FRAME_H;
      var ctx = c.getContext('2d');
      ctx.drawImage(img, 0, 0, FRAME_W, FRAME_H);
      var data = ctx.getImageData(0, 0, FRAME_W, FRAME_H), px = data.data;
      for (var i = 0; i < px.length; i += 4) {
        if (px[i + 3] === 0) { continue; }
        var hsl = rgbToHsl(px[i], px[i + 1], px[i + 2]);
        /* shirt only: saturated mid-light blues (skin, hair and dark trousers fall outside) */
        if (hsl[0] > 195 && hsl[0] < 240 && hsl[1] > 0.45 && hsl[2] > 0.3) {
          var n = hslToRgb(targetHue, hsl[1], hsl[2]);
          px[i] = n[0]; px[i + 1] = n[1]; px[i + 2] = n[2];
        }
      }
      ctx.putImageData(data, 0, 0);
      return c;
    });
    recolored[key] = out;
    return out;
  }

  /* ---------- DOM ---------- */
  var wrap, btn, canvas, ctx;
  var frames = null, frameIdx = 0;

  function draw(idx) {
    if (!frames) { return; }
    frameIdx = idx;
    ctx.clearRect(0, 0, FRAME_W, FRAME_H);
    ctx.drawImage(frames[idx], 0, 0);
  }

  function refreshColour() {
    frames = recolorFrames(accentRgb());
    draw(frameIdx);
  }

  /* ---------- behaviour ---------- */
  var state = 'idle', stateT = 0, clock = 0, last = 0;
  var lastActive = 0, nextAuto = 12 + Math.random() * 12;

  function setState(name, user) {
    state = name; stateT = 0;
    if (user) { lastActive = clock; }
  }

  function react(name) {
    if (reduceMotion) { return; }
    setState(name, true);
  }

  /* ---------- speech cloud ---------- */
  var cloud, msgIdx = -1, cloudVisible = false, cloudHideAt = 0, cloudNextAt = FIRST_MESSAGE_AT;

  function showNextMessage() {
    msgIdx = (msgIdx + 1) % MESSAGES.length;
    cloud.textContent = MESSAGES[msgIdx];
    cloud.classList.add('show');
    cloudVisible = true;
    cloudHideAt = clock + 3 + MESSAGES[msgIdx].length * 0.055;
    if (msgIdx === 0 && !reduceMotion && state === 'idle') { setState('wave'); }
  }

  function hideCloud() {
    cloud.classList.remove('show');
    cloudVisible = false;
    cloudNextAt = clock + GAP_BETWEEN;
  }

  function updateCloud() {
    if (state === 'sleep') {
      if (cloudVisible) { hideCloud(); }
      return;
    }
    if (cloudVisible) {
      if (clock >= cloudHideAt) { hideCloud(); }
    } else if (!reduceMotion && clock >= cloudNextAt) {
      showNextMessage();
    }
  }

  function tick(now) {
    var dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    clock += dt; stateT += dt;

    var a = ANIMS[state];
    if (a.dur && stateT >= a.dur) { setState('idle'); a = ANIMS.idle; }

    if (!reduceMotion) {
      if (state === 'idle') {
        if (clock - lastActive > 60) { setState('sleep'); }
        else if (clock >= nextAuto) {
          setState(REACTIONS[Math.floor(Math.random() * REACTIONS.length)]);
          nextAuto = clock + 15 + Math.random() * 20;
        }
      }
      var breathe = state === 'sleep' ? 0.02 : 0.012;
      var sway = state === 'idle' ? Math.sin(clock * 1.6) * 1.5 : 0;
      var bob = (state === 'dance' || state === 'laugh') ? Math.abs(Math.sin(stateT * 8)) * 4 : 0;
      btn.style.transform = 'translateY(' + (-bob).toFixed(1) + 'px) rotate(' + sway.toFixed(2) + 'deg) ' +
        'scale(1,' + (1 + breathe * Math.sin(clock * 2)).toFixed(4) + ')';
    }

    updateCloud();

    var idx = a.frames[Math.floor(stateT * a.fps) % a.frames.length];
    if (idx !== frameIdx) { draw(idx); }
    requestAnimationFrame(tick);
  }

  function start() {
    wrap = document.createElement('div');
    wrap.id = 'dongle-wrap';

    btn = document.createElement('button');
    btn.id = 'dongle';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Dongle, the page mascot. Press for a reaction.');

    canvas = document.createElement('canvas');
    canvas.width = FRAME_W; canvas.height = FRAME_H;
    ctx = canvas.getContext('2d');
    btn.appendChild(canvas);

    var close = document.createElement('button');
    close.id = 'dongle-close';
    close.type = 'button';
    close.setAttribute('aria-label', 'Hide Dongle');
    close.textContent = '×';

    cloud = document.createElement('div');
    cloud.id = 'dongle-cloud';
    cloud.setAttribute('aria-hidden', 'true');  /* decorative: repeats the page's own intro */

    wrap.appendChild(cloud);
    wrap.appendChild(btn);
    wrap.appendChild(close);
    document.body.appendChild(wrap);

    refreshColour();

    btn.addEventListener('click', function () {
      react(REACTIONS[Math.floor(Math.random() * REACTIONS.length)]);
      showNextMessage();
    });
    btn.addEventListener('mouseenter', function () {
      if (state === 'idle' || state === 'sleep') { react('surprised'); }
    });
    close.addEventListener('click', function () {
      try { localStorage.setItem(STORAGE_KEY, '1'); } catch (e) {}
      wrap.remove();
      themeObserver.disconnect();
    });

    /* follow colour-theme changes (data-color-theme on <html>) */
    var themeObserver = new MutationObserver(refreshColour);
    themeObserver.observe(document.documentElement,
      { attributes: true, attributeFilter: ['data-color-theme', 'data-theme'] });

    requestAnimationFrame(function (t) { last = t; requestAnimationFrame(tick); });
  }

  function loadImages() {
    var base = (SCRIPT && SCRIPT.src)
      ? SCRIPT.src.replace(/\/assets\/js\/dongle\.js.*$/, '')
      : '';
    for (var i = 0; i < FRAME_COUNT; i++) {
      (function (k) {
        var img = new Image();
        img.onload = function () { loaded++; if (loaded === FRAME_COUNT) { start(); } };
        img.src = base + '/assets/images/dongle/f' + k + '.png';
        images[k] = img;
      })(i);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadImages);
  } else {
    loadImages();
  }
})();
