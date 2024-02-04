const body = document.querySelector('body');

const background = [
    'background_1.jpg',
]

const chosenImage = background[Math.floor(Math.random() * background.length)];

body.style.backgroundImage = `url(../assets/images/${chosenImage})`;
