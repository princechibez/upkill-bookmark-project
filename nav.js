const hAMburger = document.querySelector(".hAMburger-icon");
const nAVMenu = document.querySelector(".nAV-menu");

hamburger.addEventListener("click", () => {
    nAVMenu.classList.add("active");
    hAMburger.classList.add("active");
    // document.body.style.overflow = "hidden";
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
}))
