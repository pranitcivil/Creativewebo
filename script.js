const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerMenu = document.getElementById("Hamburger-menu");
const cross = document.querySelector("#Hamburger-menu i")



hamburgerIcon.addEventListener("click", function () {
    hamburgerMenu.classList.add("active");

});
cross.addEventListener("click", function () {
    hamburgerMenu.classList.remove("active");

});
;

