// модальное окно
let buttons = document.querySelectorAll('[data-modal]');
let closeButton = document.querySelector('[data-close]');
let card = document.querySelector('.modal');


buttons.forEach(button => {
    button.onclick = () => {
        card.classList.add('show'); 
    };
});
closeButton.onclick = () => {
    card.classList.remove('show'); 
};
card.onclick = (event) => {
    if (event.target === card) {
        card.classList.remove('show'); 
    }
};



// скролл
const link = document.querySelector('.header__link');
const orderSection = document.querySelector('.order');

link.addEventListener('click', (event) => {
    event.preventDefault(); 

    orderSection.scrollIntoView({
        behavior: 'smooth' 
    });
});

const secondLink = document.querySelector('.second-link');
const offerSection = document.querySelector('.offer');

secondLink.addEventListener('click', (event) => {
    event.preventDefault(); 

    offerSection.scrollIntoView({
        behavior: 'smooth' 
    });
});
