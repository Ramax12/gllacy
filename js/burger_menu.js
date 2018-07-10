'use strict';

(function () {
var mainHeader = document.querySelector('.main-header');
var navToggle = document.querySelector('.main-nav__toggle');

//burger menu
mainHeader.classList.add('main-header--closed');
navToggle.addEventListener('click', function() {
	if (mainHeader.classList.contains('main-header--closed')) {
		mainHeader.classList.remove('main-header--closed');
		mainHeader.classList.add('main-header--opened');
	} else {
		mainHeader.classList.add('main-header--closed');
		mainHeader.classList.remove('main-header--opened');
	}
});
})();