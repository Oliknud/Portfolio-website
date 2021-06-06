const menuLinks = document.querySelector(".mobile-nav");
const burger = document.querySelector("#burger");
const x = document.querySelector(".cross");
const body = document.querySelector("body");
const arrow = document.querySelector("#arrow-down");
const index = document.querySelector(".index-welcome");


// Adding click events to menu icon and X icon
burger.addEventListener("click", burgermenu);
x.addEventListener("click", burgermenu);
arrow.addEventListener("click", scroller);

function burgermenu() {
    
    // When toggled; slides in menu from left
    menuLinks.classList.toggle("mobile-links-active");
    
    // If statement to hide overflow when menu is active.
    if (body.style.overflow === "hidden") {
        body.style.overflow = "visible";
        
    } else {
        body.style.overflow = "hidden";
        window.scrollTo(0, 0);
    }
}

// let viewSize = Math.max(document.documentElement.clientHeight);
let viewSize = index.clientHeight;

function scroller() {
    window.scrollTo(0, viewSize);
}