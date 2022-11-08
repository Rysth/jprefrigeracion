const navbarToggler = document.querySelector("#nav-toggler");
const provitionalNavBar = document.querySelector(".provitional-navbar");
const navbarLinks = document.querySelectorAll(".provitional-navbar ul li a");

navbarToggler.addEventListener("click", () =>{
  provitionalNavBar.classList.toggle("display-initial");
});

navbarLinks.forEach(element => {
  element.addEventListener("click", () =>{
    provitionalNavBar.classList.toggle("display-initial");
  });
});

