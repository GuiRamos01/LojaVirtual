const img = document.querySelector("div.img");
const menuuser = document.querySelector("div.menuuser");
const fadeuser = document.querySelector("div.fade-user");

const popUp = () => {
    menuuser.classList.toggle("onOf");
    fadeuser.classList.toggle("fade-user-active");
};

img.addEventListener("click", popUp);
fadeuser.addEventListener("click", popUp);