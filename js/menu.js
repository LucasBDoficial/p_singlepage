let show = true; 
let end = false;

const menuSection = document.querySelector(".menu")
const menuToggle = menuSection.querySelector(".menu_toggle")

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "scroll" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show;
})

document.querySelector("ul")
    .addEventListener("click", () => {
       menuSection.classList.toggle("on", end)
    show = !show;
})