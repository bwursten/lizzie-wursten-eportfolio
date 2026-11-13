// Collapsible mobile navigation. Without JavaScript the full menu stays visible.
(function () {
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  if (!header || !toggle) return;

  header.classList.add('js-nav');
  toggle.hidden = false;

  function isOpen() {
    return header.classList.contains('nav-open');
  }

  function setOpen(open) {
    header.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  }

  toggle.addEventListener('click', function () {
    setOpen(!isOpen());
  });

  // Close when tapping anywhere outside the header.
  document.addEventListener('click', function (e) {
    if (isOpen() && !header.contains(e.target)) setOpen(false);
  });

  // Close after choosing a link.
  header.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function () { setOpen(false); });
  });

  // Close with the Escape key.
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });

  // Close when the screen becomes wide enough for the full menu (e.g. rotating a phone).
  var wide = window.matchMedia('(min-width: 1001px)');
  function onWide() { if (wide.matches) setOpen(false); }
  if (wide.addEventListener) wide.addEventListener('change', onWide);
  else if (wide.addListener) wide.addListener(onWide);

  // Start closed when returning with the Back button.
  window.addEventListener('pageshow', function () { setOpen(false); });
})();
