const cardContainer = Array.from(document.querySelectorAll('.card-container'));

let firstCard = null;
let secondCard = null;
let lockBoard = false;

const button = document.getElementById('reset-button');

cardContainer.forEach((cardContainer) => {
    cardContainer.addEventListener('click', flipCard);

});

function flipCard(event) {
    
    if (lockBoard) return;
       event.currentTarget.classList.toggle('flipped');

    if (!firstCard) {
        firstCard = event.currentTarget;
    } else if (event.currentTarget !== firstCard) {
        secondCard = event.currentTarget;
        checkForMatch(firstCard, secondCard);
        firstCard = null;
        secondCard = null;
    }
}


function checkForMatch(firstCard, secondCard) {
    if ( firstCard.dataset.type === secondCard.dataset.type ) {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        checkGameComplete();
    
    } else {
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
        }, 1000);
    }
  
}

//Shuffle Cards function
function ShuffleCards(cardContainer) {
    for (let i = cardContainer.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
         [cardContainer[i], cardContainer[j]] = [cardContainer[j], cardContainer[i]];
    }

    const gameContainer = document.getElementById('game-container');
    cardContainer.forEach((card) => gameContainer.appendChild(card));
}

// Shuffle the cards when the reset button is clicked

if (cardContainer.length > 0) {
    ShuffleCards(cardContainer);}

if (button) {
    button.addEventListener('click', () => {
    ShuffleCards(cardContainer);
    resetGame();
    });
}



function resetGame() {    
    cardContainer.forEach((card) => {
        card.classList.remove('flipped');
        card.classList.remove('matched');
    });
}

function checkGameComplete() {
    const matchedCards = document.querySelectorAll('.card-container.matched');

    if (matchedCards.length === cardContainer.length) {
        alert('Congratulations! You matched all the cards!');
    }
}

// Change theme of cards when the theme button is clicked for animals
function changeToAnimals() {
    cardContainer.forEach((card) => {

        let image = card.querySelector('.inner-card img');

        let animal = card.dataset.animal;

        image.src = `assets/images/${animal}.jpg`;

        image.alt = animal;

        $(image).addClass('animal-image');

    });
    resetGame();
    ShuffleCards(cardContainer);
}
// Connect the theme button to the changeToAnimals function
const themeButton = document.getElementById('animals');
if (themeButton) {
    themeButton.addEventListener('click', changeToAnimals);
};

// Change theme of cards when the theme button is clicked for vehicles
function changeToVehicles() {
    cardContainer.forEach((card) => {

        let image = card.querySelector('.inner-card img');

        let vehicle = card.dataset.vehicle;

        image.src = `assets/images/${vehicle}.png`;

        image.alt = vehicle;

        $(image).addClass('vehicle-image');

    });
    resetGame();
    ShuffleCards(cardContainer);
}
// Connect the theme button to the changeToVehicles function
const vehicleThemeButton = document.getElementById('vehicles');
if (vehicleThemeButton) {
    vehicleThemeButton.addEventListener('click', changeToVehicles);
}

// Connect the fruit button to fruit theme function
function changeToFruits() {
    cardContainer.forEach((card) => {

        let image = card.querySelector('.inner-card img');

        let fruit = card.dataset.type;

        image.src = `assets/images/${fruit}.png`;

        image.alt = fruit;

    });
    resetGame();
    ShuffleCards(cardContainer);
}

// Button to change the theme to fruits
const fruitThemeButton = document.getElementById('fruits');
if (fruitThemeButton) {
    fruitThemeButton.addEventListener('click', changeToFruits);
}

// jQuery to handle the instruction button click event
$(document).ready(function () {
    $('.instruction-button').on('click', function () {
        $(this).next('p').slideDown();
        $(this).addClass('hide-button');
    });
});
