//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    const circles = document.querySelectorAll(".circle");
    const nextButton = document.getElementById("next");
    const prevButton = document.getElementById("prev");
    let currentCircle = 0;

    nextButton.addEventListener("click", () => {
        if (currentCircle < circles.length - 1) {
            circles[currentCircle].classList.remove("active");
            currentCircle++;
            circles[currentCircle].classList.add("active");
            prevButton.removeAttribute("disabled");
        }

        if (currentCircle === circles.length - 1) {
            nextButton.setAttribute("disabled", "disabled");
        }
    });

    prevButton.addEventListener("click", () => {
        if (currentCircle > 0) {
            circles[currentCircle].classList.remove("active");
            currentCircle--;
            circles[currentCircle].classList.add("active");
            nextButton.removeAttribute("disabled");
        }

        if (currentCircle === 0) {
            prevButton.setAttribute("disabled", "disabled");
        }
    });
});

