const cardContainer = Array.from(document.querySelectorAll('.card-container'));

let firstCard = null;
let secondCard = null;
let lockBoard = false;

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
function resetCards() {}

function resetGame() {}

function checkGameComplete() {}

