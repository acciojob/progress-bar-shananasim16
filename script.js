//your JS code here. If required.
const circles = document.querySelectorAll('.circle');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const lines =  document.querySelectorAll('.line');
let currentCircle = 0;

nextBtn.addEventListener('click', () => {
  if (currentCircle < circles.length - 1) {
    currentCircle++;
    circles[currentCircle].classList.add('active');
    lines[currentCircle-1].classList.add('active-line');
    prevBtn.disabled = false;
  }

  if (currentCircle === circles.length - 1) {
    nextBtn.disabled = true;
  }
});

prevBtn.addEventListener('click', () => {
  if (currentCircle > 0) {
    circles[currentCircle].classList.remove('active');
    currentCircle--;
    lines[currentCircle].classList.remove("active-line")
    nextBtn.disabled = false;
  }

  if (currentCircle === 0) {
    prevBtn.disabled = true;
  }
});
