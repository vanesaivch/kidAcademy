const cardContainer = Array.from(document.querySelectorAll('.card-container'));

let firstCard = null;
let secondCard = null;
let lockBoard = false;

let navBarButton = document.getElementsByClassName('game');
let button = document.getElementById('reset-button');

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


}}

// SHuffle the cards when the page loads or reset button is clicked
navBarButton.addEventListener('click', () => {
    ShuffleCards(cardContainer);
});

button.addEventListener('click', () => {
    ShuffleCards(cardContainer);
});



function resetGame() {}

function checkGameComplete() {}

