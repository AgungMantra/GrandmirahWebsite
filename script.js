const menuButton = document.getElementById("menu");
const menuList = document.getElementById("menuList");
const menuItems = document.querySelectorAll("#menuList li");

menuButton.addEventListener("click", toggleMenu);
document.addEventListener("click", (event) => {
  if (!menuList.contains(event.target) && !menuButton.contains(event.target)) {
    menuList.classList.remove("onClick");
  }
});

function toggleMenu() {
  menuList.classList.toggle("onClick");
}