(function () {
  var box = document.getElementById('lightbox');
  if (!box) return;

  var items = Array.prototype.slice.call(document.querySelectorAll('.photo__open'));
  var img = box.querySelector('.lightbox__img');
  var caption = box.querySelector('.lightbox__caption');
  var count = box.querySelector('.lightbox__count');
  var closeBtn = box.querySelector('.lightbox__close');
  var current = -1;
  var opener = null;

  function show(i) {
    current = (i + items.length) % items.length;
    var el = items[current];
    img.classList.remove('is-loaded');
    img.style.backgroundColor = el.dataset.color || '';
    img.onload = function () { img.classList.add('is-loaded'); };
    img.src = el.dataset.full;
    img.alt = el.querySelector('img').alt;
    caption.textContent = el.dataset.caption;
    count.textContent = (current + 1) + ' / ' + items.length;
    [current - 1, current + 1].forEach(function (j) {
      var n = items[(j + items.length) % items.length];
      new Image().src = n.dataset.full;
    });
  }

  function open(i) {
    opener = items[i];
    box.hidden = false;
    document.body.classList.add('lightbox-open');
    show(i);
    requestAnimationFrame(function () { box.classList.add('is-open'); });
    closeBtn.focus();
  }

  function close() {
    box.classList.remove('is-open');
    document.body.classList.remove('lightbox-open');
    box.hidden = true;
    img.removeAttribute('src');
    if (opener) opener.focus();
  }

  items.forEach(function (el, i) {
    el.addEventListener('click', function () { open(i); });
  });

  closeBtn.addEventListener('click', close);
  box.querySelector('.lightbox__prev').addEventListener('click', function () { show(current - 1); });
  box.querySelector('.lightbox__next').addEventListener('click', function () { show(current + 1); });

  // Clicking the black backdrop closes the viewer; clicking the photo does not.
  box.addEventListener('click', function (e) {
    if (e.target === box || e.target.classList.contains('lightbox__figure')) close();
  });

  document.addEventListener('keydown', function (e) {
    if (box.hidden) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') show(current - 1);
    else if (e.key === 'ArrowRight') show(current + 1);
    else if (e.key === 'Tab') {
      // Keep focus inside the viewer.
      var f = Array.prototype.slice.call(box.querySelectorAll('button')).filter(function (b) {
        return b.offsetParent !== null;
      });
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // Swipe left/right on touch screens.
  var x0 = null;
  box.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  box.addEventListener('touchend', function (e) {
    if (x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) show(current + (dx < 0 ? 1 : -1));
    x0 = null;
  });
})();
