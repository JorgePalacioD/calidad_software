const toggle = document.querySelector(".toggle");
const navbar = document.querySelector(".navbar");
const links = document.querySelectorAll(".navbar a");

toggle.addEventListener("click", () => {
  navbar.classList.toggle("navbar_visible");
});
for (const link of links) {
  link.addEventListener("click", () => {
    navbar.classList.toggle("navbar_visible");
  });
}
