var boton = document.querySelector(".btn-menu");

function toggle() {
  var menu = document.querySelector(".menu-mobile");
  menu.classList.toggle('hidden');
}

boton.addEventListener('click', toggle);

var menuFullScreen = document.querySelector(".menu-full-screen");
var menuItems = [
  "About",
  "blog",
  "contact"
];


for (var i = 0; i < menuItems.length; i++) {
  menuFullScreen.innerHTML += '<li><a href="#">'+menuItems[i]+'</a></li>';
}
