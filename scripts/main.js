const buttonLangUA = document.querySelector('.button-lang-UA');
const buttonLangENG = document.querySelector('.button-lang-ENG');
let select = 'en';

buttonLangUA.onclick = () => {
	changeURLLanguage('ua');

	setTimeout(() => {
		buttonLangUA.style.color = '#070707';
		buttonLangENG.style.color = '#828282';
		buttonLangUA.style.transition = 'color .5s ease';
		buttonLangENG.style.transition = 'color .4s ease';
	}, 500);

	select = 'ua';
}

buttonLangENG.onclick = () => {
	setTimeout(() => {
		changeURLLanguage('en')
	}, 500);

	buttonLangUA.style.color = '#828282';
	buttonLangENG.style.color = '#070707';
	buttonLangUA.style.transition = 'color .4s ease';
	buttonLangENG.style.transition = 'color .5s ease';
	select = 'en';

}

const allLang = ['en', 'ua'];


function changeURLLanguage (lang) {
	location.href = window.location.pathname + '#' + lang;
	location.reload();
	console.log(location.href)
}

function changeLanguage () {
	let hash = window.location.hash;
	hash = hash.substr(1);
	console.log(hash);
	if (!allLang.includes(hash)) {
		location.href = window.location.pathname + '#en';
		location.reload();
	}
	select = hash;
	document.querySelector('title').innerHTML = langArr['unit'][hash];

	for (let key in langArr) {
		let elem = document.querySelector('.lng-' + key);
		if (elem) {
			elem.innerHTML = langArr[key][hash];
		}

	}
}

changeLanguage();
