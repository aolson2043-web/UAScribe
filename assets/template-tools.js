(() => {
  'use strict';
  const config = window.UASCRIBE_TEMPLATE_CONFIG || {};
  const track = (name, extra = {}) => {
    if (typeof window.gtag === 'function') window.gtag('event', name, {
      send_to: 'G-WLELKDGN0F', ...extra, transport_type: 'beacon'
    });
  };
  const params = new URLSearchParams(location.search);
  const allowedSources = new Set(['preflight_pdf', 'maintenance_pdf', 'public_safety_pdf', 'flight_log_pdf', 'incident_pdf', 'flight_xlsx', 'maintenance_xlsx']);
  const requestedSource = params.get('utm_source');
  const source = allowedSources.has(requestedSource) ? requestedSource : 'template_website';
  if (allowedSources.has(requestedSource)) track('template_return_visit', {template_source: source});

  // Native App Store campaign links require the owner's provider token.
  // UTM values alone do not supply Apple's install attribution.
  if (/^\d+$/.test(String(config.appStoreProviderToken || ''))) {
    document.querySelectorAll('a.app-download').forEach(link => {
      const url = new URL(link.href);
      if (url.hostname !== 'apps.apple.com' || !url.pathname.includes('/id6804478230')) return;
      url.searchParams.set('pt', config.appStoreProviderToken);
      url.searchParams.set('ct', ('templates_' + source).slice(0, 30));
      url.searchParams.set('mt', '8');
      link.href = url.href;
    });
  }

  document.querySelectorAll('[data-mailerlite-signup]').forEach(link => {
    link.addEventListener('click', () => track('email_signup_intent', {signup_provider: 'mailerlite'}));
  });

  document.querySelectorAll('[data-template-signup]').forEach(form => {
    form.hidden = false;
    let hostedUrl = null;
    try {
      const parsed = new URL(config.hostedSignupUrl);
      if (parsed.protocol === 'https:') hostedUrl = parsed.href;
    } catch { /* Optional integration has not been configured. */ }
    if (hostedUrl) form.querySelector('button').textContent = 'Continue to email signup';
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const interest = form.elements.namedItem('interest').value;
      const status = form.querySelector('.signup-status');
      track('email_signup_intent', {interest_group: interest});
      if (hostedUrl) {
        status.textContent = 'Continue on the signup page to complete your subscription.';
        location.assign(hostedUrl);
        return;
      }
      const email = config.email || 'aodigital.lab@gmail.com';
      const subject = 'UAScribe template updates - ' + interest;
      const body = [
        'Please send me UAScribe templates, practical documentation tips, and occasional product updates.',
        '',
        'My interest: ' + interest,
        'I am opting in by sending this email. I understand I can reply unsubscribe to stop updates.',
        '',
        'Request source: uascribe.com free templates'
      ].join('\n');
      const requestUrl = 'mailto:' + encodeURIComponent(email) + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      status.textContent = 'Your email app should open. Send the request to opt in. Opening a draft does not subscribe you.';
      location.assign(requestUrl);
    });
  });
})();
