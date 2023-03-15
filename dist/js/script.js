// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const arrow = document.querySelector("#arrow");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    arrow.classList.remove("hidden");
    arrow.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    arrow.classList.remove("flex");
    arrow.classList.add("hidden");
  }
};

// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// klik di luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Dark Toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  // darkToggle.checked ? html.classList.add("dark") : html.classList.remove("dark");
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  // document.documentElement.classList.add("dark");
  darkToggle.checked = true;
} else {
  // document.documentElement.classList.remove("dark");
  darkToggle.checked = false;
}
