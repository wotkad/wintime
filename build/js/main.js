// //mobile menu
// var selectorButton = document.querySelector('selector'); // button selector
// var selectorMenu = document.querySelector('selector'); // menu selector
// //send mail
// var sendMail = function sendMail(selector) {
//   return fetch('mail.php', {
// 	method: 'POST',
// 	body: new FormData(document.querySelector(selector))
//   }).catch(function (error) {
// 	alertify.error("Ошибка. Повторите отправку позже");
//   });
// };

// // form for sendmail method with yandex counter
// var sendMessage = function() {
// 	document.querySelector("selector"); // button selector
// 	document.querySelector("selector").onsubmit = function(n) { //menu selector
// 		n.preventDefault(), sendMail("selector").then(function(e) { //menu selector
// 			return alertify.success('Ваша заявка отправленна, Мы свяжемся с вами в ближайшее время!')/*, yaCounter********.reachGoal('****', function () {})*/.then(form.reset());
// 		})
// 	};
// }
// sendMessage();

// // mask for "tel" input
// var input = document.querySelectorAll('input[type="tel"]')
// var mask = new Inputmask("+7 (999) 999-99-99");
// for (i = 0; i < input.length; i++){
// var input = document.querySelectorAll('input[type="tel"]')
// 	mask.mask(input[i]);
// }

$(function(){
var sidebar = new Menu;
sidebar.init();

function Menu(){
	var $body = $('body');
	var $button = $('.sidebar__block')
	this.init = function(){
		$body.addClass('open');
		$('.sidebar__block').each(function(){
			var theHeight = $(this).next().height();
			$(this).next().attr('data-height', theHeight);
		});
		$body.removeClass('open');
		$button.click(function(){
			if($(this).hasClass('open')){
				sidebar.hideDropDown(this);
			}else{
				sidebar.showDropDown(this);
			}
			$button.not(this).removeClass('open');
			$button.not(this).next().removeAttr('style');
		})
	}
	this.showDropDown = function(elem) {
		$(elem).next().removeAttr('style');
		$(elem).removeClass('open');
		$(elem).next().css('height', $(elem).next().data('height'))
		$(elem).addClass('open');
	}
	this.hideDropDown = function(elem) {
		$(elem).next().removeAttr('style');
		$(elem).removeClass('open');
	}
}

var swiper = new Swiper('.swiper-container-forecasts', {
	slidesPerView: 3,
	slidesPerColumn: 2,
	grabCursor: false,
	spaceBetween: 20,
	allowTouchMove: false,
	navigation: {
		nextEl: '.forecasts-tags__blocks .swiper-button-next',
		prevEl: '.forecasts-tags__blocks .swiper-button-prev',
	},
	pagination: {
		el: '.forecasts-tags__blocks .swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	breakpoints: {
		650: {
		  slidesPerView: 1,
		  spaceBetween: 20,
		  slidesPerColumn: 1,
		  allowTouchMove: true,
		  grabCursor: true,
		},
		1140: {
		  slidesPerView: 2,
		  spaceBetween: 20,
		  allowTouchMove: true,
		  grabCursor: true,
		}
	}
  })

var swiper = new Swiper('.swiper-container-experts', {
	slidesPerView: 3,
	grabCursor: true,
	navigation: {
		nextEl: '.experts__slider .swiper-button-next',
		prevEl: '.experts__slider .swiper-button-prev',
	},
	pagination: {
		el: '.experts .swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	breakpoints: {
		950: {
			slidesPerView: 1,
		},
		1240: {
			slidesPerView: 2,
		}
	}
})

$("section, .sidebar__container").mCustomScrollbar({
	theme:"dark",
	autoHideScrollbar: true,
});

//close popup by "esc" button
window.onkeydown = function( event ) {
	if ( event.keyCode == 27 ) {
		searchPopup.classList.remove('search__active');
		menuMob.classList.remove('mobmenu__active');
		popup.classList.remove('popup__active');
		popupBg.classList.remove('popup-bg__active');
	}
};

const searchPopup = document.querySelector('.search')

$('.menu__items-item-search-img').click(function(e) {
	var $search = $('.search');
	if ($search.css('display') != 'block') {
		$search.addClass('search__active');
		var firstClick = true;
		$(document).bind('click.myEvent', function(e) {
			if (!firstClick && $(e.target).closest('.search').length == 0) {
				$search.removeClass('search__active');
				$(document).unbind('click.myEvent');
			}
			firstClick = false;
		});
	}
	e.preventDefault();
});

$('.search__container-close').click(function(e) {
	var $search = $('.search');
	$search.removeClass('search__active');
	e.preventDefault();
});

const menuButton = document.querySelector('.menu__items-item-button');
const menuButtonClose = document.querySelector('.mobmenu__close-button');
const menuMob = document.querySelector('.mobmenu');
const body = document.body;
menuButton.onclick = function() {
	menuMob.classList.toggle('mobmenu__active');
	body.style.overflow = 'hidden';
}
menuButtonClose.onclick = function() {
	menuMob.classList.remove('mobmenu__active');
	body.style.overflow = 'auto';
}

var mobmenu = new MobMenu;
mobmenu.init();

function MobMenu(){
	var $body = $('body');
	var $button = $('.mobmenu__items-item-toggle')
	this.init = function(){
		$body.addClass('open');
		$('.mobmenu__items-item-toggle').each(function(){
			var theHeight = $(this).next().height();
			$(this).next().attr('data-height', theHeight);
		});
		$body.removeClass('open');
		$button.click(function(){
			if($(this).hasClass('open')){
				mobmenu.hideDropDown(this);
			}else{
				mobmenu.showDropDown(this);
			}
			$button.not(this).removeClass('open');
			$button.not(this).next().removeAttr('style');
		})
	}
	this.showDropDown = function(elem) {
		$(elem).next().removeAttr('style');
		$(elem).removeClass('open');
		$(elem).next().css('height', $(elem).next().data('height'))
		$(elem).addClass('open');
	}
	this.hideDropDown = function(elem) {
		$(elem).next().removeAttr('style');
		$(elem).removeClass('open');
	}
}

function sideFilter() {
	const filtersSelect = document.querySelectorAll('.sidebar__container-filter-selector');
	for (i = 0; i < filtersSelect.length; i++) {
		filtersSelect[i].onclick = function(){
			$(this).children().last().children().toggleClass('rotated-filter-arrow');
			$(this).next().toggleClass('show-select');
			$('.sidebar__container-filter-selector').not(this).next().removeClass('show-select');
			$('.sidebar__container-filter-selector').not(this).children().last().children().removeClass('rotated-filter-arrow');
		}
	}
}
sideFilter();

function sideFilter2() {
	const filtersSelect = document.querySelector('.sidebar__container-bonuses-selector');
	filtersSelect.onclick = function(){
		$(this).children().last().children().toggleClass('rotated-filter-arrow');
		$(this).next().toggleClass('show-select');
	}
}
sideFilter2();

function selectOption1() {
	let filtersSelect = document.querySelector('#result1');
	let options = document.querySelectorAll('.sidebar__container-filter-filters__option');
	for (i = 0; i < options.length; i++) {
		options[i].onclick = function() {
			filtersSelect.innerText = $(this).attr('data-target');
			$(this).parent().prev().children().last().children().removeClass('rotated-filter-arrow');
			$(this).parent().removeClass('show-select');
			filtersSelect.setAttribute('data-target', $(this).attr('data-target'));
		}
	}
}
selectOption1()

function selectOption2() {
	let filtersSelect = document.querySelector('#result2');
	let options = document.querySelectorAll('.sidebar__container-filter-filters__option2');
	for (i = 0; i < options.length; i++) {
		options[i].onclick = function() {
			filtersSelect.innerText = $(this).attr('data-target');
			$(this).parent().prev().children().last().children().removeClass('rotated-filter-arrow');
			$(this).parent().removeClass('show-select');
			filtersSelect.setAttribute('data-target', $(this).attr('data-target'));
		}

	}
}
selectOption2()

function selectOption1Center() {
	let filtersSelect = document.querySelector('#result3');
	let options = document.querySelectorAll('.forecasts-tags__filter__container-filter-filters__option');
	for (i = 0; i < options.length; i++) {
		options[i].onclick = function() {
			filtersSelect.innerText = $(this).attr('data-target');
			$(this).parent().removeClass('show-select');
			filtersSelect.setAttribute('data-target', $(this).attr('data-target'));
		}
	}
}
selectOption1Center()

function selectOption2Center() {
	let filtersSelect = document.querySelector('#result4');
	let options = document.querySelectorAll('.forecasts-tags__filter__container-filter-filters__option2');
	for (i = 0; i < options.length; i++) {
		options[i].onclick = function() {
			filtersSelect.innerText = $(this).attr('data-target');
			$(this).parent().removeClass('show-select');
			filtersSelect.setAttribute('data-target', $(this).attr('data-target'));
		}

	}
}
selectOption2Center()

function selectOption3() {
	let filtersSelect = document.querySelector('#result5');
	let options = document.querySelectorAll('.sidebar__container-bonuses-filters__option');
	for (i = 0; i < options.length; i++) {
		options[i].onclick = function() {
			filtersSelect.innerText = $(this).attr('data-target');
			$(this).parent().prev().children().last().children().removeClass('rotated-filter-arrow');
			$(this).parent().removeClass('show-select');
			filtersSelect.setAttribute('data-target', $(this).attr('data-target'));
		}

	}
}
selectOption3()

function selectOption3Center() {
	let filtersSelect = document.querySelector('#result6');
	let options = document.querySelectorAll('.bonuses__filter__container-filter-filters__option');
	for (i = 0; i < options.length; i++) {
		options[i].onclick = function() {
			filtersSelect.innerText = $(this).attr('data-target');
			$(this).parent().removeClass('show-select');
			filtersSelect.setAttribute('data-target', $(this).attr('data-target'));
		}
	}
}
selectOption3Center()

const popupButton = document.querySelectorAll('.callback');
const popupButtonClose = document.querySelector('.popup__header-container-close');
const popup = document.querySelector('.popup');
const popupBg = document.querySelector('.popup-bg');
for (i = 0; i < popupButton.length; i++) {
	popupButton[i].onclick = function() {
		popup.classList.toggle('popup__active');
		popupBg.classList.toggle('popup-bg__active');
		body.style.overflow = 'hidden';
	}
}
popupButtonClose.onclick = function() {
	popup.classList.remove('popup__active');
	popupBg.classList.remove('popup-bg__active');
	body.style.overflow = 'auto';
}
popupBg.onclick = function() {
	popup.classList.remove('popup__active');
	popupBg.classList.remove('popup-bg__active');
	body.style.overflow = 'auto';
}


const popupReviewCallbackButton = document.querySelector('.callback-review');
const popupReviewCallbackButtonClose = document.querySelector('.review-callback__header-container-close');
const popupReviewCallbackContainer = document.querySelector('.review-callback');
const popupReviewCallbackBg = document.querySelector('.review-callback-bg');
if (popupReviewCallbackButton != null) {
	popupReviewCallbackButton.onclick = function() {
		popupReviewCallbackContainer.classList.toggle('review-callback__active');
		popupReviewCallbackBg.classList.toggle('review-callback-bg__active');
		body.style.overflow = 'hidden';
	}
}
if (popupReviewCallbackButtonClose != null) {
	popupReviewCallbackButtonClose.onclick = function() {
		popupReviewCallbackContainer.classList.remove('review-callback__active');
		popupReviewCallbackBg.classList.remove('review-callback-bg__active');
		body.style.overflow = 'auto';
	}
}
if (popupReviewCallbackBg != null) {
	popupReviewCallbackBg.onclick = function() {
		popupReviewCallbackContainer.classList.remove('review-callback__active');
		popupReviewCallbackBg.classList.remove('review-callback-bg__active');
		body.style.overflow = 'auto';
	}
}

const loginPopupButton = document.querySelectorAll('.login');
const loginPopupButtonClose = document.querySelector('.loginpopup__header-container-close');
const loginPopup = document.querySelector('.loginpopup');
const loginPopupBg = document.querySelector('.popup-bg');
for (i = 0; i < loginPopupButton.length; i++) {
	loginPopupButton[i].onclick = function() {
		loginPopup.classList.toggle('loginpopup__active');
		loginPopupBg.classList.toggle('loginpopup-bg__active');
		forgotPopup.classList.remove('forgotpopup__active');
		forgotPopupBg.classList.remove('forgotpopup-bg__active');
		body.style.overflow = 'hidden';
	}
}
loginPopupButtonClose.onclick = function() {
	loginPopup.classList.remove('loginpopup__active');
	loginPopupBg.classList.remove('loginpopup-bg__active');
	body.style.overflow = 'auto';
}
loginPopupBg.onclick = function() {
	loginPopup.classList.remove('loginpopup__active');
	loginPopupBg.classList.remove('loginpopup-bg__active');
	body.style.overflow = 'auto';
}

const forgotPopupButton = document.querySelector('.forgot');
const forgotPopupButtonClose = document.querySelector('.forgotpopup__header-container-close');
const forgotPopup = document.querySelector('.forgotpopup');
const forgotPopupBg = document.querySelector('.forgotpopup-bg');
forgotPopupButton.onclick = function() {
	forgotPopup.classList.toggle('forgotpopup__active');
	forgotPopupBg.classList.toggle('forgotpopup-bg__active');
	loginPopup.classList.remove('loginpopup__active');
	loginPopupBg.classList.remove('loginpopup-bg__active');
	body.style.overflow = 'hidden';
}
forgotPopupButtonClose.onclick = function() {
	forgotPopup.classList.remove('forgotpopup__active');
	forgotPopupBg.classList.remove('forgotpopup-bg__active');
	body.style.overflow = 'auto';
}
forgotPopupBg.onclick = function() {
	forgotPopup.classList.remove('forgotpopup__active');
	forgotPopupBg.classList.remove('forgotpopup-bg__active');
	body.style.overflow = 'auto';
}

const registrationPopupButton = document.querySelectorAll('.registration');
const registrationPopupButtonClose = document.querySelector('.registrationpopup__header-container-close');
const registrationPopup = document.querySelector('.registrationpopup');
const registrationPopupBg = document.querySelector('.registrationpopup-bg');

for (i = 0; i < registrationPopupButton.length; i++) {
	registrationPopupButton[i].onclick = function() {
		registrationPopup.classList.toggle('registrationpopup__active');
		registrationPopupBg.classList.toggle('registrationpopup-bg__active');
		loginPopup.classList.remove('loginpopup__active');
		loginPopupBg.classList.remove('loginpopup-bg__active');
		body.style.overflow = 'hidden';
	}
}

registrationPopupButtonClose.onclick = function() {
	registrationPopup.classList.remove('registrationpopup__active');
	registrationPopupBg.classList.remove('registrationpopup-bg__active');
	body.style.overflow = 'auto';
}

registrationPopupBg.onclick = function() {
	registrationPopup.classList.remove('registrationpopup__active');
	registrationPopupBg.classList.remove('registrationpopup-bg__active');
	body.style.overflow = 'auto';
}

function centerFilter() {
	const filtersSelect = document.querySelectorAll('.forecasts-tags__filter__container-filter-selector');
	for (i = 0; i < filtersSelect.length; i++) {
		filtersSelect[i].onclick = function(){
			$(this).children().last().children().toggleClass('rotated-filter-arrow');
			$(this).next().toggleClass('show-select');
			$('.forecasts-tags__filter__container-filter-selector').not(this).next().removeClass('show-select');
			$('.forecasts-tags__filter__container-filter-selector').not(this).children().last().children().removeClass('rotated-filter-arrow');
		}
	}
}
centerFilter();

const closeFilterCenter = document.querySelector('.forecasts-tags__filter-titles-arrow');
const filterCenter = document.querySelector('.forecasts-tags__filter__container');
if (closeFilterCenter != null) {
	closeFilterCenter.onclick = function() {
		filterCenter.classList.toggle('hide-select');
		closeFilterCenter.classList.toggle('rotated-filter-arrow');
	}
}


const closeFilterCenter2 = document.querySelector('.bonuses__filter-titles-arrow');
const filterCenter2 = document.querySelector('.bonuses__filter__container');
if (closeFilterCenter2 != null) {
	closeFilterCenter2.onclick = function() {
		filterCenter2.classList.toggle('hide-select');
		closeFilterCenter2.classList.toggle('rotated-filter-arrow');
	}
}


const closeFilterCenterBookmakers = document.querySelector('.bookmakers__filter-titles-arrow');
const filterCenterBookmakers = document.querySelector('.bookmakers__filter__container');
if (closeFilterCenterBookmakers != null)
	closeFilterCenterBookmakers.onclick = function() {
		filterCenterBookmakers.classList.toggle('hide-select');
		closeFilterCenterBookmakers.classList.toggle('rotated-filter-arrow');
	}

});


function selectBookmaker() {
	let bookmakerSelect = document.querySelector('#bookmaker-select');
	let options = document.querySelector('.review-callback__body-form-options');
	if (bookmakerSelect != null) {
		bookmakerSelect.onclick = function() {
			$(this).next().toggleClass('show-select');
		}
	}
}
selectBookmaker()


function selectBonus() {
	let bookmakerSelect = document.querySelector('#result6');
	let arrow = document.querySelector('.bonuses__filter__container-filter-selector-select-arrow i');
	let options = document.querySelector('.review-callback__body-form-options');
	if (bookmakerSelect != null) {
		bookmakerSelect.onclick = function() {
			$(this).parent().next().toggleClass('show-select');
			arrow.classList.toggle('rotated-filter-arrow');
		}
	}
}
selectBonus()

var swiper = new Swiper('.swiper-container-bookmakers-single', {
	slidesPerView: 1,
	slidesPerColumn: 3,
	grabCursor: false,
	allowTouchMove: false,
	navigation: {
		nextEl: '.bookmakers-single__review-block-items .swiper-button-next',
		prevEl: '.bookmakers-single__review-block-items .swiper-button-prev',
	},
	pagination: {
		el: '.bookmakers-single__review-block-items .swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	breakpoints: {
		768: {
		  slidesPerView: 1,
		  spaceBetween: 20,
		  allowTouchMove: true,
		  grabCursor: true,
		  slidesPerColumn: 1,
		},
		1240: {
		  slidesPerView: 3,
		  spaceBetween: 20,
		  allowTouchMove: true,
		  grabCursor: true,
		  slidesPerColumn: 1,
		}
	}
})

const detailBookmakerContainer = document.querySelector('.bookmakers-single__review-block-text');
const showMoreDetailBookmakerButton = document.querySelector('.bookmakers-single__review-block-text-button');
const showMoreDetailBookmakerButtonText = document.querySelector('.bookmakers-single__review-block-text-button span')
const showMoreDetailBookmakerIcon = document.querySelector('.bookmakers-single__review-block-text-button i')
if (showMoreDetailBookmakerButton != null) {
	showMoreDetailBookmakerButton.onclick = function() {
		detailBookmakerContainer.classList.toggle('bookmakers-single__review-block-text-active');
		showMoreDetailBookmakerButtonText.classList.toggle('hide-select');
		$(this).toggleClass('more-switch')
		showMoreDetailBookmakerIcon.classList.toggle('icon-right');
	}
}

const showMoreDetailBookmakerBonusButton = document.querySelectorAll('.bookmakers-single__blocked__blocks-block-item__links-button-active');
for (i = 0; i < showMoreDetailBookmakerBonusButton.length; i++) {
	showMoreDetailBookmakerBonusButton[i].onclick = function() {
		$(this).parent().parent().parent().parent().toggleClass('bookmakers-single__blocked__blocks-active');
	}
}

const showMoreDetailBonusesBonusButton = document.querySelectorAll('.bonuses__blocked__blocks-block-item__links-button-active');
for (i = 0; i < showMoreDetailBonusesBonusButton.length; i++) {
	showMoreDetailBonusesBonusButton[i].onclick = function() {
		$(this).parent().parent().parent().parent().toggleClass('bonuses__blocked__blocks-active');
	}
}

var swiper = new Swiper('.swiper-container-bookmakers-single-container__clients', {
	slidesPerView: 4,
	grabCursor: true,
	loop: true,
	navigation: {
		nextEl: '.bookmakers-single__clients__slider .swiper-button-next',
		prevEl: '.bookmakers-single__clients__slider .swiper-button-prev',
	},
	pagination: {
		el: '.bookmakers-single__clients__slider .swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	breakpoints: {
		650: {
			slidesPerView: 1,
		},
		768: {
		  slidesPerView: 2,
		},
		1240: {
		  slidesPerView: 3,
		}
	}
})

function selectOptionBookmaker() {
	let bookmakerSelect = document.querySelector('#bookmaker-select');
	let option = document.querySelectorAll('.review-callback__body-form-options-option');
	for (i = 0; i < option.length; i++) {
		option[i].onclick = function() {
			bookmakerSelect.innerText = $(this).attr('data-target');
			$(this).parent().removeClass('show-select');
			bookmakerSelect.setAttribute('data-target', $(this).attr('data-target'));
		}
	}
}
selectOptionBookmaker()

var swiper = new Swiper('.swiper-container-expert-detail', {
	slidesPerView: 3,
	slidesPerColumn: 2,
	grabCursor: false,
	spaceBetween: 20,
	allowTouchMove: false,
	navigation: {
		nextEl: '.expert-detail__blocks .swiper-button-next',
		prevEl: '.expert-detail__blocks .swiper-button-prev',
	},
	pagination: {
		el: '.expert-detail__blocks .swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	breakpoints: {
		650: {
		  slidesPerView: 1,
		  spaceBetween: 20,
		  slidesPerColumn: 1,
		  allowTouchMove: true,
		  grabCursor: true,
		},
		1140: {
		  slidesPerView: 2,
		  spaceBetween: 20,
		  allowTouchMove: true,
		  grabCursor: true,
		}
	}
  })

  var swiper = new Swiper('.swiper-container-forecast-single', {
	slidesPerView: 3,
	grabCursor: true,
	spaceBetween: 20,
	navigation: {
		nextEl: '.forecast-single__blocks .swiper-button-next',
		prevEl: '.forecast-single__blocks .swiper-button-prev',
	},
	pagination: {
		el: '.forecast-single__blocks .swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	breakpoints: {
		650: {
		  slidesPerView: 1,
		  spaceBetween: 20,
		  grabCursor: true,
		},
		1140: {
		  slidesPerView: 2,
		  spaceBetween: 20,
		  grabCursor: true,
		}
	}
  })

const knowledgebaseBlocks = document.querySelectorAll('.knowledgebase__blocks-block-posts');
const knowledgebaseButtons = document.querySelectorAll('.knowledgebase__blocks-block-button div');
const knoledgebaseShadows = document.querySelectorAll('.knowledgebase__blocks-block-posts-shadow');
for (i = 0; i < knowledgebaseBlocks.length; i++) {
	for (k = 0; k < knowledgebaseButtons.length; k++) {
		knowledgebaseButtons[k].onclick = function() {
			$(this).parent().prev().toggleClass('knowledgebase__blocks-block-posts-active');
			$(this).parent().parent().toggleClass('knowledgebase__blocks-block-active');
			$(this).children().prev().prev().toggleClass('fa-times');
			$(this).children().prev().prev().toggleClass('fa-refresh');
		}
	}
}

$('.menu__items-item-login').click(function(e) {
	var $search = $('.menu__items-item__container');
	if ($search.css('display') != 'block') {
		$search.addClass('menu__items-item__container-active');
		var firstClick = true;
		$(document).bind('click.myEvent', function(e) {
			if (!firstClick && $(e.target).closest('.menu__items-item__container').length == 0) {
				$search.removeClass('menu__items-item__container-active');
				$(document).unbind('click.myEvent');
			}
			firstClick = false;
		});
	}
	e.preventDefault();
});
