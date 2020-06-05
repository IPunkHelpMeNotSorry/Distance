const burgerButton = document.querySelector('.m-menu');
const menu = document.querySelector('.menu-sidebar');

burgerButton.addEventListener('click', function(){
	menu.classList.toggle('active');
})