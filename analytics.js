/* Portfolio analytics: consent-based collection with browser exclusion. */
(() => {
  'use strict';
  const measurementId = 'G-T43M4VTWME';
  const ownerKey = 'portfolio.analytics.exclude';
  const consentKey = 'portfolio.analytics.consent';
  const read = key => { try { return localStorage.getItem(key); } catch { return null; } };
  const write = (key, value) => { try { localStorage.setItem(key, value); return true; } catch { return false; } };
  const preference = new URLSearchParams(location.search).get('analytics');
  let excluded = read(ownerKey) === 'off';
  if (preference === 'off' || preference === 'on') {
    excluded = preference === 'off';
    const saved = write(ownerKey, preference);
    const note = document.createElement('p');
    note.setAttribute('role', 'status');
    note.style.cssText = 'padding:16px;margin:0;background:#eef4e5;color:#16212f;text-align:center';
    note.textContent = excluded
      ? (saved ? 'Your visits are excluded in this browser. Repeat on each device. Clearing site data resets this setting.' : 'Your visit is excluded now, but this browser could not save the setting.')
      : 'Visit exclusion is off in this browser. Analytics still requires your consent.';
    document.body.prepend(note);
    const url = new URL(location.href);
    url.searchParams.delete('analytics');
    try { history.replaceState(null, '', url.pathname + url.search + url.hash); } catch {}
  }
  // No Google requests or cookies until a real ID is configured and consent is given.
  if (!/^G-[A-Z0-9]+$/.test(measurementId)) return;
  if (excluded || navigator.globalPrivacyControl === true || navigator.doNotTrack === '1') {
    window['ga-disable-' + measurementId] = true;
    return;
  }
  let active = false;
  window.dataLayer = window.dataLayer || [];
  const gtag = function () { window.dataLayer.push(arguments); };
  const pageLocation = location.origin + location.pathname;
  const referrer = (() => { try { return new URL(document.referrer).origin; } catch { return ''; } })();
  function start() {
    if (active) return;
    active = true;
    gtag('consent', 'default', {
      analytics_storage: 'granted', ad_storage: 'denied',
      ad_user_data: 'denied', ad_personalization: 'denied'
    });
    gtag('js', new Date());
    gtag('config', measurementId, {
      send_page_view: false, allow_google_signals: false,
      allow_ad_personalization_signals: false,
      page_location: pageLocation, page_referrer: referrer
    });
    gtag('event', 'page_view', { page_location: pageLocation, page_title: document.title, page_referrer: referrer });
    const tag = document.createElement('script');
    tag.async = true;
    tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(measurementId);
    document.head.appendChild(tag);
  }
  function track(name, fields = {}) {
    if (active && !window['ga-disable-' + measurementId]) gtag('event', name, { ...fields, send_to: measurementId });
  }
  const panel = document.createElement('div');
  panel.setAttribute('role', 'region');
  panel.setAttribute('aria-label', 'Analytics preferences');
  panel.style.cssText = 'position:fixed;bottom:16px;left:16px;right:16px;z-index:30;max-width:560px;margin:auto;background:white;color:#16212f;border:1px solid #bbc3cb;border-radius:14px;padding:20px;box-shadow:0 8px 40px #0002';
  const description = document.createElement('p');
  description.textContent = 'Allow Google Analytics to measure visits, project opens, résumé downloads, and contact clicks? It uses cookies to help improve this portfolio. You can change your choice below.';
  description.style.marginTop = '0';
  panel.appendChild(description);
  const settings = document.createElement('button');
  settings.type = 'button';
  settings.textContent = 'Analytics preferences';
  settings.style.cssText = 'background:transparent;border:0;color:inherit;text-decoration:underline;min-height:44px';
  settings.addEventListener('click', () => { panel.hidden = false; allow.focus(); });
  (document.querySelector('footer') || document.body).appendChild(settings);
  function choose(value) {
    write(consentKey, value);
    panel.hidden = true;
    if (value === 'granted') {
      window['ga-disable-' + measurementId] = false;
      if (active) gtag('consent', 'update', { analytics_storage: 'granted' });
      else start();
    } else {
      window['ga-disable-' + measurementId] = true;
      if (active) gtag('consent', 'update', { analytics_storage: 'denied' });
    }
    settings.focus();
  }
  const allow = document.createElement('button');
  const decline = document.createElement('button');
  [[allow, 'Allow analytics', 'granted'], [decline, 'No thanks', 'denied']].forEach(([button, label, value]) => {
    button.type = 'button'; button.textContent = label;
    button.style.cssText = 'min-height:44px;padding:8px 16px;margin:4px;border:1px solid #bbc3cb;border-radius:22px;background:#f2f6ec;color:#16212f';
    button.addEventListener('click', () => choose(value));
    panel.appendChild(button);
  });
  document.body.appendChild(panel);
  const consent = read(consentKey);
  panel.hidden = consent === 'granted' || consent === 'denied';
  if (consent === 'granted') start();
  document.addEventListener('click', event => {
    if (!event.target.closest) return;
    const project = event.target.closest('[data-project]');
    if (project) { track('project_open', { project_id: project.dataset.project }); return; }
    const link = event.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (link.hasAttribute('download') && /\.pdf(?:$|[?#])/i.test(href)) track('resume_download');
    else if (href.startsWith('mailto:')) track('contact_click', { contact_method: 'email' });
    else if (/^https:\/\/(www\.)?linkedin\.com\//.test(href)) track('contact_click', { contact_method: 'linkedin' });
    else if (/^https:\/\/github\.com\//.test(href)) track('github_click', { link_path: new URL(href).pathname });
  });
})();
