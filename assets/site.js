(() => {
  const value = window.UASCRIBE_APP_STORE_URL;
  if (!value) return;

  let url;
  try { url = new URL(value); } catch { return; }
  if (url.protocol !== 'https:' || url.hostname !== 'apps.apple.com' || !/\/id\d+/.test(url.pathname)) return;

  document.querySelectorAll('.app-download').forEach((link) => {
    link.href = url.href;
    link.rel = 'noopener';
    link.textContent = 'Download on the App Store';
  });

  document.querySelectorAll('.download-note').forEach((note) => { note.hidden = true; });

  const status = document.getElementById('download-status');
  if (status) {
    status.replaceChildren();
    const link = document.createElement('a');
    link.className = 'button';
    link.href = url.href;
    link.rel = 'noopener';
    link.textContent = 'Download on the App Store';
    status.append(link);
  }
})();
