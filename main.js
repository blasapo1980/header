var boton = document.querySelector(".btn-menu");


function toggle() {
  var menu = document.querySelector(".show-menu");
  if (menu.style.display==="none" || menu.style.display===""){
    menu.style.display="block";
  } else {
    menu.style.display="none";
  }
}
boton.addEventListener('click', toggle);
