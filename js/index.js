const menuHamburger = document.querySelector(".menu-deroulant");
const navBar = document.querySelector(".nav-bar-list");

const menuMobile = document.querySelector(".menu-deroulant-mobile");
const navBarMobile = document.querySelector(".nav-bar");

const filterOverlay = document.querySelector(".filter");

menuMobile.addEventListener("click", () => {
    navBarMobile.classList.toggle("mobile-menu")
    if(navBarMobile.classList.contains("mobile-menu") === true) {
        filterOverlay.style.display = "block"
    } else {
        filterOverlay.style.display = "none"
    }
    document.body.style.overflowY = document.body.style.overflowY === "hidden" ? "visible" : "hidden"
})

menuHamburger.addEventListener("click", () => {
    navBar.classList.toggle("nav-bar-list-content")}
)


// FORMULAIRE
// FORMULAIRE
// FORMULAIRE

const btnSubmit = document.querySelector("#submit");
const merci = document.querySelector(".merci");
const form = document.querySelector("form");

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    form.style.display = "none";
    merci.style.display = "flex";
})


const container = document.querySelectorAll(".container")
const anchor = document.querySelectorAll(".fixed-anchor")

