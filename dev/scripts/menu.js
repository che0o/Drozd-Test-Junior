let hamburger = document.querySelector(".burger");
let overlay = document.querySelector(".overlay");
let body = document.querySelector("body");



function hideMenu(){
    hamburger.classList.remove("burger--active");
    overlay.classList.remove("overlay--active");
}


function toggleMenu(){
    hamburger.classList.toggle("burger--active");
    overlay.classList.toggle("overlay--active");
}

hamburger.addEventListener("click", toggleMenu);