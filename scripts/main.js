const buttonLangUA = document.querySelector('.button-lang-UA');
const buttonLangENG = document.querySelector('.button-lang-ENG');

buttonLangUA.onclick = () => {
	buttonLangUA.style.color = '#070707';
	buttonLangENG.style.color = '#828282';
	buttonLangUA.style.transition = 'color .5s ease'
	buttonLangENG.style.transition = 'color .4s ease'
}

buttonLangENG.onclick = () => {
	buttonLangUA.style.color = '#828282';
	buttonLangENG.style.color = '#070707';
	buttonLangUA.style.transition = 'color .4s ease'
	buttonLangENG.style.transition = 'color .5s ease'
}
