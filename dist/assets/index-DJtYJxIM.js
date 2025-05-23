const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = ['assets/root-CCXtkJ0B.js', 'assets/hooks-BiQeOY3r.js', 'assets/App-BWuO8-fs.js']),
) => i.map((i) => d[i]);
(function () {
  const o = document.createElement('link').relList;
  if (o && o.supports && o.supports('modulepreload')) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) u(e);
  new MutationObserver((e) => {
    for (const r of e)
      if (r.type === 'childList')
        for (const t of r.addedNodes) t.tagName === 'LINK' && t.rel === 'modulepreload' && u(t);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(e) {
    const r = {};
    return (
      e.integrity && (r.integrity = e.integrity),
      e.referrerPolicy && (r.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === 'use-credentials'
        ? (r.credentials = 'include')
        : e.crossOrigin === 'anonymous'
          ? (r.credentials = 'omit')
          : (r.credentials = 'same-origin'),
      r
    );
  }
  function u(e) {
    if (e.ep) return;
    e.ep = !0;
    const r = s(e);
    fetch(e.href, r);
  }
})();
const y = 'modulepreload',
  b = function (n) {
    return '/' + n;
  },
  f = {},
  m = function (o, s, u) {
    let e = Promise.resolve();
    if (s && s.length > 0) {
      document.getElementsByTagName('link');
      const t = document.querySelector('meta[property=csp-nonce]'),
        i = (t == null ? void 0 : t.nonce) || (t == null ? void 0 : t.getAttribute('nonce'));
      e = Promise.allSettled(
        s.map((c) => {
          if (((c = b(c)), c in f)) return;
          f[c] = !0;
          const a = c.endsWith('.css'),
            p = a ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${c}"]${p}`)) return;
          const l = document.createElement('link');
          if (
            ((l.rel = a ? 'stylesheet' : y),
            a || (l.as = 'script'),
            (l.crossOrigin = ''),
            (l.href = c),
            i && l.setAttribute('nonce', i),
            document.head.appendChild(l),
            a)
          )
            return new Promise((h, g) => {
              l.addEventListener('load', h),
                l.addEventListener('error', () => g(new Error(`Unable to preload CSS for ${c}`)));
            });
        }),
      );
    }
    function r(t) {
      const i = new Event('vite:preloadError', { cancelable: !0 });
      if (((i.payload = t), window.dispatchEvent(i), !i.defaultPrevented)) throw t;
    }
    return e.then((t) => {
      for (const i of t || []) i.status === 'rejected' && r(i.reason);
      return o().catch(r);
    });
  },
  E = 'bySupriyadies',
  _ = 'auther-email@gmail.com',
  $ = 'https://github.com/suren-atoyan/react-pwa',
  L = { delay: 300, minimumLoading: 700 };
function d() {
  return Math.floor(Math.random() * 256);
}
function P() {
  const n = d(),
    o = d(),
    s = d();
  return [`rgb(${n}, ${o}, ${s})`, `rgb(${255 - n}, ${255 - o}, ${255 - s})`];
}
function v() {
  const [n, o] = P(),
    s = [
      'font-size: 40px',
      `color: ${n}`,
      `border: 1px solid ${o}`,
      `background-color: ${o}`,
      'border-radius: 5px',
      'padding: 10px',
    ].join(';');
  console.log(`%c=== ${E} ===`, s);
}
Promise.all([
  m(() => import('./root-CCXtkJ0B.js'), __vite__mapDeps([0, 1])),
  m(() => import('./App-BWuO8-fs.js').then((n) => n.A), __vite__mapDeps([2, 1])),
]).then(([{ default: n }, { default: o }]) => {
  n(o);
});
v();
export { m as _, _ as e, L as l, $ as r, E as t };
