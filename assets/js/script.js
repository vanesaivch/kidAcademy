const cardContainers = Array.from(document.querySelectorAll('.card-container'));

cardContainers.forEach((cardContainer) => {
    cardContainer.addEventListener('click', flipCard);
});

function flipCard(event) {
    event.currentTarget.classList.toggle('flipped');
}

function checkForMatch(cardContainer) {}

function resetCards() {}

function resetGame() {}

function checkGameComplete() {}

