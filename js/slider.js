document.addEventListener("DOMContentLoaded", function () {
  const sliderContainer = document.querySelector(
    ".testimonial-slider-item-container"
  );
  const slides = document.querySelectorAll(".testimonial-slider-item");
  const prevArrow = document.querySelectorAll(".testimonial-slider-arrow")[0];
  const nextArrow = document.querySelectorAll(".testimonial-slider-arrow")[1];
  const dots = document.querySelectorAll(".testimonial-slider-dot");

  let currentSlide = 0;

  function updateSlider() {
    sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

    slides.forEach((dot) => dot.classList.remove("active"));
    slides[currentSlide].classList.add("active");

    dots.forEach((dot) => dot.classList.remove("active"));
    dots[currentSlide].classList.add("active");
  }

  function moveSlide(type) {
    if (type === "next") {
      currentSlide = (currentSlide + 1) % slides.length;
    }

    if (type === "back") {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    }

    updateSlider();
  }

  nextArrow.addEventListener("click", () => moveSlide("next"));
  prevArrow.addEventListener("click", () => moveSlide("back"));
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSlide = index;
      updateSlider();
    });
  });

  const autoSlide = false;
  const autoSlideDuration = 6000;

  if (autoSlide) {
    let handleSlideAutomation = setInterval(
      () => moveSlide("next"),
      autoSlideDuration
    );
    prevArrow.addEventListener("mouseenter", function () {
      clearInterval(handleSlideAutomation);
    });
    prevArrow.addEventListener("mouseleave", function () {
      handleSlideAutomation = setInterval(
        () => moveSlide("next"),
        autoSlideDuration
      );
    });
    nextArrow.addEventListener("mouseenter", function () {
      clearInterval(handleSlideAutomation);
    });
    nextArrow.addEventListener("mouseleave", function () {
      handleSlideAutomation = setInterval(
        () => moveSlide("next"),
        autoSlideDuration
      );
    });
    dots.forEach((dot) =>
      dot.addEventListener("mouseenter", function () {
        clearInterval(handleSlideAutomation);
      })
    );
    dots.forEach((dot) =>
      dot.addEventListener("mouseleave", function () {
        handleSlideAutomation = setInterval(
          () => moveSlide("next"),
          autoSlideDuration
        );
      })
    );
  }
});
