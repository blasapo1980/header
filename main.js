var boton = document.querySelector(".btn-menu");
var menu = document.querySelector(".show-menu");

function toggle() {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');

  } else {
    menu.classList.add('hidden');
  }
}
boton.addEventListener('click', toggle);

function hiddenFullScreen() {
  menu.classList.add('hidden')
}
window.addEventListener('resize', hiddenFullScreen);
