var boton = document.querySelector(".btn-menu");
var menu = document.querySelector(".menu-mobile");

function toggle() {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');

  } else {
    menu.classList.add('hidden');
  }
}
boton.addEventListener('click', toggle);
