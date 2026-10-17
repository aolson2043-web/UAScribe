(() => {
  document.querySelectorAll('[data-report-reader]').forEach(viewer => {
    const tabs = [...viewer.querySelectorAll('[role="tab"]')];
    const previous = viewer.querySelector('.report-previous');
    const next = viewer.querySelector('.report-next');
    const position = viewer.querySelector('.report-position');
    let current = 0;
    const title = tab => tab.querySelector('span:last-child').textContent;
    const activate = index => {
      current = index;
      tabs.forEach((tab, i) => {
        const selected = i === current;
        tab.setAttribute('aria-selected', String(selected));
        tab.tabIndex = selected ? 0 : -1;
        document.getElementById(tab.getAttribute('aria-controls')).hidden = !selected;
      });
      position.textContent = `Page ${current + 1} of ${tabs.length} · ${title(tabs[current])}`;
      previous.disabled = current === 0;
      next.disabled = current === tabs.length - 1;
      next.textContent = next.disabled ? 'End of report' : `Next: ${title(tabs[current + 1])} →`;
    };
    previous.addEventListener('click', () => { if (current > 0) activate(current - 1); });
    next.addEventListener('click', () => { if (current < tabs.length - 1) activate(current + 1); });
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => activate(index));
      tab.addEventListener('keydown', event => {
        let indexToSelect;
        if (event.key === 'ArrowRight') indexToSelect = (index + 1) % tabs.length;
        if (event.key === 'ArrowLeft') indexToSelect = (index + tabs.length - 1) % tabs.length;
        if (event.key === 'Home') indexToSelect = 0;
        if (event.key === 'End') indexToSelect = tabs.length - 1;
        if (indexToSelect === undefined) return;
        event.preventDefault();
        activate(indexToSelect);
        tabs[indexToSelect].focus();
      });
    });
    activate(0);
  });
})();
