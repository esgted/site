document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelector('.slides');
  const images = document.querySelectorAll('.slides img');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const total = images.length;
  let index = 0;
  let interval;

  // Slider genişliğini ayarla
  slides.style.width = `${total * 100}%`;
  images.forEach(img => {
    img.style.width = `${100 / total}%`;
  });

  function showSlide(i) {
    index = i;
    if (index < 0) index = total - 1;
    if (index >= total) index = 0;
    slides.style.transform = `translateX(-${index * (100 / total)}%)`;
  }

  function nextSlide() {
    showSlide(index + 1);
  }

  function prevSlide() {
    showSlide(index - 1);
  }

  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetInterval();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetInterval();
  });

  function startInterval() {
    interval = setInterval(nextSlide, 4000);
  }

  function resetInterval() {
    clearInterval(interval);
    startInterval();
  }

  startInterval();
});
