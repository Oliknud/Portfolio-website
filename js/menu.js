const menuLinks = document.querySelector(".mobile-nav");
const burger = document.querySelector("#burger");
const x = document.querySelector(".cross");
const body = document.querySelector("body");

// Adding click events to menu icon and X icon
burger.addEventListener("click", burgermenu);
x.addEventListener("click", burgermenu);

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

