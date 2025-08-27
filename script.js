// NAVBAR SCROLL BEHAVIOR
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    navbar.classList.remove("transparent");
  } else {
    navbar.classList.remove("scrolled");
    navbar.classList.add("transparent");
  }
});

// FADE-IN ON SCROLL
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// PARALLAX EFFECT
window.addEventListener("scroll", function () {
  const parallaxSections = document.querySelectorAll(".parallax");
  parallaxSections.forEach(section => {
    let scrollPosition = window.scrollY;
    section.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
  });
});
// Auto-fill tier in contact form
const tierButtons = document.querySelectorAll(".choose-tier");
const tierInput = document.getElementById("selected-tier");

tierButtons.forEach(button => {
  button.addEventListener("click", () => {
    const tier = button.dataset.tier;
    if (tierInput) {
      tierInput.value = tier + " Plan";
    }
  });
});
