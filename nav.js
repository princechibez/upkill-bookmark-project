const hamburger = document.querySelector(".hamburger-icon");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.add("active");
    hamburger.classList.add("active");
    // document.body.style.overflow = "hidden";
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
}))
