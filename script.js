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

// Typewritter effect
const words = ["Welcome To", "Grand Mirah Hotel"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];
  if (isDeleting) {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j-1);
    j--;
    if (j == 0) {
      isDeleting = false;
      i++;
      if (i == words.length) {
        i = 0;
      }
    }
  } else {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j+1);
    j++;
    if (j == currentWord.length) {
      isDeleting = true;
    }
  }
  setTimeout(type, 200);
}

type();


document.addEventListener("DOMContentLoaded", function() {
  const currentLocation = window.location.pathname;
  const menuItems = document.querySelectorAll(".flex-row li a");

  menuItems.forEach(item => {
    if (item.getAttribute("href") === currentLocation) {
      item.parentElement.classList.add("active");
    }
  });
});

document.getElementById('hotelGallery').classList.add('active');
document.getElementById('destinationgallery').classList.add('active');