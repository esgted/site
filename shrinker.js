window.addEventListener("load", () => {
  const header = document.querySelector('header');
  if (!header) return;

  let isHeaderShrunk = false;
  let lastHandled = 0;

  window.addEventListener('scroll', function () {
    if (window.innerWidth <= 768) {
      if (isHeaderShrunk) {
        header.classList.remove('shrink');
        isHeaderShrunk = false;
      }
      return;
    }

    const now = Date.now();
    if (now - lastHandled < 150) return; 
    lastHandled = now;

    const scrollY = window.scrollY;
    const shrinkThreshold = 150;
    const expandThreshold = 50;

    if (scrollY > shrinkThreshold && !isHeaderShrunk) {
      header.classList.add('shrink');
      isHeaderShrunk = true;
    } else if (scrollY < expandThreshold && isHeaderShrunk) {
      header.classList.remove('shrink');
      isHeaderShrunk = false;
    }
  }, { passive: true });
});
