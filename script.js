const circles = document.querySelectorAll('.circle');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

nextButton.addEventListener('click', () => {
  if (currentIndex < circles.length - 1) {
    circles[currentIndex].classList.remove('active');
    currentIndex++;
    circles[currentIndex].classList.add('active');
    prevButton.removeAttribute('disabled');

    if (currentIndex === circles.length - 1) {
      nextButton.setAttribute('disabled', 'true');
    }
  }
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    circles[currentIndex].classList.remove('active');
    currentIndex--;
    circles[currentIndex].classList.add('active');
    nextButton.removeAttribute('disabled');

    if (currentIndex === 0) {
      prevButton.setAttribute('disabled', 'true');
    }
  }
});

