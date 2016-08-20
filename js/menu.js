var burger = document.querySelector(".header-promo__burger-btn");
var menu = document.querySelector(".main-nav");
var close = document.querySelector(".main-nav__close-btn");

close.addEventListener("click", function(event) {
	event.preventDefault();
	menu.classList.add("main-nav__menu--js");
	menu.classList.remove("main-nav__menu--nojs");
});

burger.addEventListener("click", function(event) {
	event.preventDefault();
	menu.classList.remove("main-nav__menu--js");
	menu.classList.add("main-nav__menu--nojs");
});