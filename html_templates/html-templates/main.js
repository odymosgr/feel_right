const menuIcon = document.querySelector("#menu-icon")
const closeIcon = document.querySelector("#close-icon")
const mobileNav = document.querySelector("#mobile-menu-container")

menuIcon.addEventListener("click", () => {
  mobileNav.classList.add("active")
})

closeIcon.addEventListener("click", () => {
  mobileNav.classList.remove("active")
})
