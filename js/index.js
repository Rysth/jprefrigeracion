const navbarToggler = document.querySelector("#nav-toggler");
const provitionalNavBar = document.querySelector(".provitional-navbar");
const navbarLinks = document.querySelectorAll(".provitional-navbar ul li");

window.onclick = (event) => {
  for (let index = 0; index < navbarLinks.length; index++) {
    const element = navbarLinks[index];
    if (event.target !== navbarToggler && event.target !== element) {
      removeNavList();
      break;
    }
  }
};

navbarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    addNavList();
  });
});

navbarToggler.addEventListener("click", () => {
  addNavList();
});

function addNavList() {
  provitionalNavBar.classList.add("display-initial");
}

function removeNavList() {
  provitionalNavBar.classList.remove("display-initial");
}
