let isOpenSideBar = false;
const menuIcon = document.getElementById("menuIcon");
const menuToggle = document.querySelector(".menu-bar");
const overlay = document.querySelector(".overlay");

// select all menus
const menuLinks = document.querySelectorAll(".menu a");
// select all sections
const sections = document.querySelectorAll("section");

// Initial, Function to remove active class from all menu items
function removeActiveClasses() {
  menuLinks.forEach((link) => link.classList.remove("active"));
}

// Function to add active class to the menu item corresponding to the section in view
function setActiveMenu() {
  let currentSectionId = "";

  // Check each section's position relative to the viewport
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 200;
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

const menuToggleButton = document.getElementById("menuToggleButton");
const sideMenu = document.getElementById("sideMenu");
const closeMenu = document.getElementById("closeMenuButton");
// Open side menu event listener
menuToggleButton.addEventListener("click", () => {
  sideMenu.style.marginLeft = 0;
  sideMenu.style.transition = "ease-in-out 0.5s";
  overlay.classList.add("active");
  menuToggleButton.style.display = "none";
  closeMenu.style.display = "block";
  document.body.classList.add("no-scroll");
});
closeMenu.addEventListener("click", () => {
  sideMenu.style.marginLeft = "-9999px";
  closeMenu.style.display = "none";
  menuToggleButton.style.display = "block";
  overlay.classList.remove("active");
});
// Close Side menu event listener
sideMenu.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    sideMenu.style.marginLeft = "-999px";
    overlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
  }
});

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

// Select modal elements
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const closeModal = document.querySelector(".close");
const openButtons = document.querySelectorAll(".open-modal");

// Function to open modal and update content
openButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const title = button.getAttribute("data-title");
    const content = button.getAttribute("data-content");
    modalTitle.textContent = title;
    modalBody.textContent = content;
    modal.style.display = "flex";
    document.body.classList.add("no-scroll");
  });
});
//truncate text
document.addEventListener("DOMContentLoaded", function () {
  const contentElements = document.querySelectorAll(".blogContent"); // Select all elements with the class "content"

  contentElements.forEach((element) => {
    const fullText = element.textContent;

    // Truncate to the first 20 characters
    const truncatedText =
      fullText.length > 20 ? fullText.substring(0, 40) + "..." : fullText;

    // Update the content
    element.textContent = truncatedText;
  });
});

// Close modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.classList.remove("no-scroll");
});

// Close modal when clicking outside the content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    document.body.classList.remove("no-scroll");
  }
});
