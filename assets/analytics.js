// Track direct App Store clicks, including dynamically created links and QR taps.
// Scanning the QR with another device goes directly to Apple and is not measured here.
document.addEventListener('click', (event) => {
  const link = event.target.closest && event.target.closest('a[href]');
  if (!link || typeof window.gtag !== 'function') return;
  let url;
  try { url = new URL(link.href); } catch { return; }
  if (url.hostname !== 'apps.apple.com' || !url.pathname.includes('/id6804478230')) return;
  window.gtag('event', 'app_store_click', {
    send_to: 'G-WLELKDGN0F',
    link_url: url.origin + url.pathname,
    link_placement: link.closest('.install-qr') ? 'qr' : link.closest('header.site-header') ? 'header' : link.closest('footer') ? 'footer' : 'content',
    transport_type: 'beacon'
  });
});

document.addEventListener('click', (event) => {
  const link = event.target.closest && event.target.closest('a[download]');
  if (!link || typeof window.gtag !== 'function') return;
  const url = new URL(link.href);
  if (url.origin !== location.origin || !url.pathname.startsWith('/assets/downloads/')) return;
  window.gtag('event', 'resource_download', {send_to:'G-WLELKDGN0F', resource_name:url.pathname.split('/').pop(), link_url:url.pathname});
});
