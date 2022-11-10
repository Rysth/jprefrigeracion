const navbarToggler = document.querySelector("#nav-toggler");
const provitionalNavBar = document.querySelector(".provitional-navbar");
const navbarLinks = document.querySelectorAll(".provitional-navbar ul li a");

window.onclick = function (event) {
  navbarLinks.forEach((element) => {
    if(event.target === element || event.target === navbarToggler){
        toggleNavList();
    }
  });
};

function toggleNavList() {
  provitionalNavBar.classList.toggle("display-initial");
}
