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

ScrollReveal({
  reset: false,
  distance: '10px',
  duration: 1000,
  delay: 600
});
{ scale: 1 }


ScrollReveal().reveal('#Srscale,.Srscale', { scale: 0.85 });
ScrollReveal().reveal('#Srleft' ,{ origin: 'left' });
ScrollReveal().reveal('#Srright' ,{ origin: 'right' });
ScrollReveal().reveal('#Srbottom' ,{ origin: 'bottom' });