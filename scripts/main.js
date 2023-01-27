const buttonLangUA = document.querySelector('.button-lang-UA');
const buttonLangENG = document.querySelector('.button-lang-ENG');
let select;

buttonLangUA.onclick = () => {
	changeURLLanguage('ua');
	select = 'ua';
}

buttonLangENG.onclick = () => {
	changeURLLanguage('en')
	select = 'en';

}

const allLang = ['en', 'ua'];


function changeURLLanguage (lang) {
	location.href = window.location.pathname + '#' + lang;
	location.reload();
	console.log(location.href);
}

function changeLanguage () {
	let hash = window.location.hash;
	hash = hash.slice(1);

	if (!allLang.includes(hash)) {
		location.href = window.location.pathname + '#en';
		location.reload();
	}
	select = hash;

	if (String(select) == 'ua') {
		buttonLangUA.classList.add('active-btn-ua');
		buttonLangENG.classList.add('no-active-btn-eng');
		buttonLangENG.classList.remove('active-btn-eng');
	}
	else {
		buttonLangUA.classList.remove('active-btn-ua');
		buttonLangENG.classList.add('active-btn-eng');
	}

	for (let key in langArr) {
		let elem = document.querySelector(key);
		if (elem) {
			elem.innerHTML = langArr[key][hash];
		}
	}

}
changeLanguage();

const scrollToUp = document.querySelector('.scrollTop');

window.onscroll = () => {
	if (window.scrollY > 600) {
		scrollToUp.classList.remove('hideScroll');
		scrollToUp.classList.add('showScroll');
	}

	else if (window.scrollY < 600) {
		scrollToUp.classList.remove('showScroll');
		scrollToUp.classList.add('hideScroll');
	}

	scrollToUp.onclick = () => {
		window.scrollTo(0, 0)
	}

}

// scroll to anchors
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
	anchors.onclick = (event) => {
		event.preventDefault();
		const blockID = anchor.getAttribute('href');
		document.querySelector('' + blockID).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	}
}


let activeBurgerBoolean = false;
const headerBurger = document.querySelector('.header-burger').onclick = () => {
	const menuList = document.querySelector('.nav-menu-list');
	const langButtons = document.querySelector('.buttons-langs');
	if (document.querySelector('.active-burger')) {
		activeBurgerBoolean = false;
		menuList.classList.remove('active-burger');
		langButtons.classList.remove('buttons-in-burger');
		document.querySelector('.header-burger').classList.remove('active-header-burger')
		scrollToUp.style.display = 'block';
		document.querySelector('.buttons-langs').style.cssText = 'display: none !important';
		document.querySelector('body').style.overflow = 'visible';
	}
	else {
		activeBurgerBoolean = true;
		menuList.classList.add('active-burger');
		document.querySelector('.header-burger').classList.add('active-header-burger')
		langButtons.classList.add('buttons-in-burger');
		document.querySelector('.buttons-langs').style.cssText = 'display: flex !important';
		scrollToUp.style.display = 'none';
		document.querySelector('body').style.overflow = 'hidden';
		if (activeBurgerBoolean) {
			document.querySelector('.nav-menu-list').onclick = (event) => {
				let target = event.target;

				if (target.tagName != 'A')
					return

				else {
					activeBurgerBoolean = false;
					menuList.classList.remove('active-burger');
					langButtons.classList.remove('buttons-in-burger');
					document.querySelector('.header-burger').classList.remove('active-header-burger')
					scrollToUp.style.display = 'block';
					document.querySelector('.buttons-langs').style.cssText = 'display: none !important';
					document.querySelector('body').style.overflow = 'visible';
				}
			}
		}
	}
}