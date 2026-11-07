// Connect each pain point to the matching, real sample-report section.
document.querySelectorAll('[data-report-target]').forEach(link => {
  link.addEventListener('click', () => {
    const tab = document.getElementById(link.dataset.reportTarget);
    if (tab) { tab.click(); tab.focus({preventScroll:true}); }
  });
});
document.querySelectorAll('[data-audience]').forEach(link => {
  link.addEventListener('click', () => {
    if (typeof window.gtag === 'function') window.gtag('event','audience_path_click',{
      audience:link.dataset.audience, transport_type:'beacon'
    });
  });
});
