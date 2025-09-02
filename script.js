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
      }, index * 200);
    }
  });
});

// Mobile hamburger toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  console.log("Hamburger and nav links found"); // Debug log
  
  hamburger.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("open");
    
    console.log("Menu toggled, active class:", navLinks.classList.contains("active")); // Debug log
  });

  // Close menu when clicking on a link
  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === 'A') {
      navLinks.classList.remove("active");
      hamburger.classList.remove("open");
    }
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove("active");
      hamburger.classList.remove("open");
    }
  });
} else {
  console.log("Hamburger or nav links not found"); // Debug log
}