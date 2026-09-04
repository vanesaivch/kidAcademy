const cardContainer = Array.from(document.querySelectorAll('.card-container'));


cardContainer.forEach((cardContainer) => {
    cardContainer.addEventListener('click', flipCard);
});

function flipCard(event) {
    event.currentTarget.classList.toggle('flipped');
}

function checkForMatch(cardContainer) {
    let firstCard = document.querySelector('.inner-card img');
    let secondCard = document.querySelector('.inner-card img');

    if ( firstCard.alt === secondCard.alt ) {
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

