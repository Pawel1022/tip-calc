const cashBill = document.querySelector('.tips-calculator__input--bill');
const people = document.querySelector('.tips-calculator__input--persons');
const tip = document.querySelectorAll('.tips-calculator__select-item');
const btn = document.querySelector('.tips-calculator__btn');
const tipList = document.querySelector('.tips-calculator__select');
const p = document.querySelector('.tips-calculator__app-res');

let selected;

const main = () => {
	tip.forEach((option) => option.addEventListener('click', checkTipValue));
    btn.addEventListener('click',calc)
    
};

const checkTipValue = (e) => {
	selected = e.target.closest('option').value;
};


const calc = () => {
    const tips = selected * cashBill.value / people.value
    const bill = cashBill.value / people.value
    const toPay = Math.round(tips+bill)

   

   p.textContent = `Powinniśćie się złożyć po ${toPay} zł .`

   
   

   
    
}





document.addEventListener('DOMContentLoaded', main);
