import './style.css';

const burgerMenu = document.querySelector('.icon-hamburger');
const menuIcon = document.querySelector('.icon-menu');
const menu = document.querySelector('.menu');
const main = document.querySelector('.main');

burgerMenu?.addEventListener('click', () => {
	menu?.classList.toggle('show');
	main?.classList.toggle('lower-opacity');
	menuIcon?.classList.toggle('close-icon');
});
