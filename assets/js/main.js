/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav-link, we remove the show-menu class
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
  //     reset: true
});

sr.reveal(".home-data, .about-img, .tab-titles.active-tab", {});
sr.reveal(
  ".home-img, .about-subtitle, .about-text, .tab-content.active-tab, .tab-titles, .projects-img",
  {
    delay: 400,
  }
);
sr.reveal(".home-social-icon", { interval: 200 });
sr.reveal(
  ".project-img, .contact-text, .contact-text li , .contact-input, .button",
  {
    interval: 200,
  }
);

/*===== Tab selection =====*/
const tabLinks = document.querySelectorAll(".tab-link"),
  tabContent = document.querySelectorAll(".tab-content");

tabLinks.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabContent.forEach((content) => {
      content.classList.remove("active-tab");
    });
    tabLinks.forEach((tab) => {
      tab.classList.remove("active-link");
    });
    tabContent[index].classList.add("active-tab");
    tabLinks[index].classList.add("active-link");
  });
});
