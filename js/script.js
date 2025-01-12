let isOpenSideBar = false;
const menuIcon = document.getElementById("menuIcon");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.querySelector(".overlay");

// need to study
const menuLinks = document.querySelectorAll(".menu a");
const sections = document.querySelectorAll("section"); // All sections

// Function to remove active class from all menu items
function removeActiveClasses() {
  menuLinks.forEach((link) => link.classList.remove("active"));
}

// Function to add active class to the menu item corresponding to the section in view
function setActiveMenu() {
  let currentSectionId = "";

  // Check each section's position relative to the viewport
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100; // Adjust offset for smoothness
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSectionId = section.getAttribute("id");
    }
  });

  // Update active class in the menu
  removeActiveClasses();
  const activeLink = document.querySelector(
    `.menu a[href="#${currentSectionId}"]`
  );
  if (activeLink) activeLink.classList.add("active");
}
// Event listeners
window.addEventListener("scroll", setActiveMenu); // Update on scroll
menuLinks.forEach((link) => {
  link.addEventListener("click", function () {
    menuLinks.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  });
});

function ToggleSideMenu() {
  isOpenSideBar = !isOpenSideBar;
  if (isOpenSideBar) {
    sideMenu.style.marginLeft = 0;
    menuIcon.className = "fa-solid fa-xmark";
    overlay.classList.add("active");
    document.body.classList.add("no-scroll");
  } else {
    sideMenu.style.marginLeft = "-999px";
    menuIcon.className = "fa-solid fa-bars";
    overlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
  }
}

// Select the navbar
const navbar = document.querySelector(".primary-menu");
const scrollTopButton = document.getElementById("scrollTop");
// Add scroll event listener
window.addEventListener("scroll", () => {
  const scrollThreshold = window.innerHeight * 0.2;
  if (window.scrollY > scrollThreshold) {
    navbar.classList.add("sticky"); // Make navbar sticky
  }
  if (window.scrollY > window.innerHeight * 0.4) {
    scrollTopButton.style.display = "block";
  } else {
    navbar.classList.remove("sticky"); // Revert to normal position
    scrollTopButton.style.display = "none";
  }
});
// Scroll top function

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// Resume Filter
function showResumeContent(id) {
  const resumeTaps = document.querySelectorAll(".resume");
  const resumeContents = document.querySelectorAll(".resume-content");
  resumeTaps.forEach((resumeTap) => {
    resumeTap.classList.remove("active");
  });
  resumeContents.forEach((resumeContent) => {
    resumeContent.classList.add("hidden");
  });
  document.getElementById(id).classList.remove("hidden");
  document
    .querySelector(`.resume[onclick="showResumeContent('${id}')"]`)
    .classList.add("active");
}
// Pricing Filter
function showPricingContent(id) {
  const pricingPlans = document.querySelectorAll(".pricing");
  const pricingContents = document.querySelectorAll(".pricing-content");
  pricingPlans.forEach((pricingPlan) => {
    pricingPlan.classList.remove("active");
  });
  pricingContents.forEach((resumeContent) => {
    resumeContent.classList.add("hidden");
  });
  document.getElementById(id).classList.remove("hidden");
  document
    .querySelector(`.pricing[onclick="showPricingContent('${id}')"]`)
    .classList.add("active");
}

// Auto increase height in textarea
const textarea = document.getElementById("autoResizeTextarea");

textarea.addEventListener("input", () => {
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
});

// Contact Form
document.querySelector("#contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.elements.name.value = "";
  e.target.elements.email.value = "";
  e.target.elements.message.value = "";
});

// Auto Type
