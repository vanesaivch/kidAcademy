const cardContainer = Array.from(document.querySelectorAll('.card-container'));

let firstCard = null;
let secondCard = null;
let lockBoard = false;

cardContainer.forEach((cardContainer) => {
    cardContainer.addEventListener('click', flipCard);
});

function flipCard(event) {
       event.currentTarget.classList.toggle('flipped');
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
function resetCards() {}

function resetGame() {}

function checkGameComplete() {}

