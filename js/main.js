var elBtn = document.querySelector('.site-header__burger-btn');
var elMenu = document.querySelector('.menu')

elBtn.addEventListener('click', function(){
  elMenu.classList.toggle("menu--open")
})