const cardContainer = Array.from(document.querySelectorAll('.card-container'));

cardContainers.forEach((cardContainer) => {
    cardContainer.addEventListener('click', flipCard);
});

function flipCard(event) {
    event.currentTarget.classList.toggle('flipped');
}

function checkForMatch(cardContainer) {
    let firstCard = document.querySelectorAll('img');
    let secondCard = document.querySelectorAll('img');

    if ( firstCard.alt === secondCard.alt ) {
    
}
}
function resetCards() {}

function resetGame() {}

function checkGameComplete() {}

