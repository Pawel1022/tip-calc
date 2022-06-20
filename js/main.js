const cashBill = document.querySelector('.tips-calculator__input--bill');
const people = document.querySelector('.tips-calculator__input--persons');
const btn = document.querySelector('.tips-calculator__btn');
const tipList = document.querySelector('.tips-calculator__select');
const p = document.querySelector('.tips-calculator__app-res');
const appError = document.querySelector('.tips-calculator__error');

const validation = () => {
	if (cashBill.value == '' || people.value == '' || tipList.value == 0) {
		appError.textContent = 'Uzupełnij poprawnie wszystkie pola !';
	} else {
		appError.textContent = '';
		calc();
	}
};

const calc = () => {
	const bill = cashBill.value
	const person = people.value
	const tip = tipList.value

	const sum = (bill + (bill * tip)) /person

	p.textContent = `Musicie się złożyć po ${sum}`
	p.style.display ='block'
};

btn.addEventListener('click', validation);
