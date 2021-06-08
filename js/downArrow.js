const arrow = document.querySelector("#arrow-down");
const index = document.querySelector(".index-welcome");
let viewSize = index.clientHeight;

// Scroll down arrow
arrow.addEventListener("click", function(){
    window.scrollTo(0, viewSize);
});