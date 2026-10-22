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

// Change color of the clicked theme button
$('.theme-buttons').click(function() {
    $('.theme-buttons').removeClass('selected');
    $(this).addClass('selected');
});

// Connect the hero section buttons with game page and how to play section
document.getElementById('start-game').addEventListener('click', function() {
    window.location.href = 'game.html';
});
document.getElementById('how-to-play-button').addEventListener('click', function() {
    document.getElementById("how-to-play").scrollIntoView({
        behavior: "smooth"
    });
});
// jQuery 
// to handle the instruction button click event
$(document).ready(function () {
    $('.instruction-button').on('click', function () {
        $(this).next('p').slideDown();
        $(this).addClass('hide-button');
    });
// to add tilt effect to the instruction button
    $('.instruction-button').tilt({
        scale: 1.2
    })
});

// Tilt.js to add a tilt effect to the learning cards
$('.learning-card').tilt({
     glare: true,
    maxGlare: .5
});

// Variables fot Canvas f
 
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let width, height;
let dpr;
let gradient;

// Resize canvas
function resizeCanvas() {
    dpr = window.devicePixelRatio || 1;

    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    linGrad(); // Create the gradient separately
}

// Linear gradient
function linGrad() {
    gradient = ctx.createLinearGradient(0, 0, width, height);

    gradient.addColorStop(0, '#bdb2ff');
    gradient.addColorStop(0.25, '#a0c4ff');
    gradient.addColorStop(0.50, '#fdffb6');
    gradient.addColorStop(0.75, '#ffd6a5');
    gradient.addColorStop(1, '#ffadad');
}

// Draw animated rainbow
function drawingRainbow(progress) {
    ctx.clearRect(0, 0, width, height);

    ctx.beginPath();
    ctx.moveTo(0, 0);

    const wave = Math.sin(progress * Math.PI * 2);

    ctx.bezierCurveTo(
        width * 1.15,
        height * (0.25 + 0.12 * wave),
        width * 1.15,
        height * (0.25 - 0.12 * wave),
        width / 2,
        height / 2
    );

    ctx.bezierCurveTo(
        -width * 0.15,
        height * (0.75 - 0.12 * wave),
        -width * 0.15,
        height * (0.75 + 0.12 * wave),
        width,
        height
    );

    ctx.strokeStyle = gradient;
    ctx.lineWidth = 40;
    ctx.lineCap = 'round';
    ctx.stroke();
}

// Animation loop
function animate(time) {
    const cycle = (time % 4000) / 2000;
    const progress = cycle <= 1 ? cycle : 2 - cycle;

    const eased = 0.5 - 0.5 * Math.cos(progress * Math.PI);

    drawingRainbow(eased);

    requestAnimationFrame(animate);
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);
requestAnimationFrame(animate);
