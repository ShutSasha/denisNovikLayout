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
		let elem = document.querySelector('.lng-' + key);
		if (elem) {
			elem.innerHTML = langArr[key][hash];
		}
	}

}
changeLanguage();
