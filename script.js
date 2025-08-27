// Navbar scroll effect + smooth logo fade
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Scroll animation for features (staggered)
const features = document.querySelectorAll(".feature");

window.addEventListener("scroll", () => {
  features.forEach((feature, index) => {
    const rect = feature.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      setTimeout(() => {
        feature.classList.add("show");
      }, index * 200); // 200ms delay between each feature
    }
  });
});

