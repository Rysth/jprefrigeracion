const navbarToggler = document.querySelector("#nav-toggler");
const provitionalNavBar = document.querySelector(".provitional-navbar");
const navbarLinks = document.querySelectorAll(".provitional-navbar ul li a");

window.onclick = function (event) {
  console.log(event)
  if (event.target !== navbarToggler) {
    toggleNavList();
  }
};

navbarToggler.addEventListener("click", () => {
  toggleNavList();
});

navbarLinks.forEach((element) => {
  element.addEventListener("click", () => {
    toggleNavList();
  });
});

function toggleNavList() {
  provitionalNavBar.classList.toggle("display-initial");
}
