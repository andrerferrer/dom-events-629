// const ul = document.querySelector('ul');
// const ul = document.querySelector('#players');
// const ul = document.querySelector('.list');
const ul = document.getElementById('players');
// insert an element
ul.insertAdjacentHTML('beforeend', '<li>Elena</li>');
ul.insertAdjacentHTML('beforeend', '<li>Martín</li>');
ul.insertAdjacentHTML('beforeend', '<li>Maurice</li>');

// select the winners
const winners = document.querySelectorAll('#fifa-wins li');
// console.log(winners);

const winnersList = document.querySelector('#fifa-wins');
winnersList.insertAdjacentHTML('beforeend', '<li>France (2 wins)</li>')

winners.forEach((winner) => {
  // console.log(winner);
  // console.log(`${winner.innerText} is the best country in the world`);
});

const italy = document.querySelector('#fifa-wins li:nth-child(3)');
// console.log(italy);

// add the class red to italy
italy.classList.add('red');


// ALWAYS, the first step will be
// SELECT THE ELEMENT
const flaviaImg = document.querySelector('#flavia');
console.log(flaviaImg);

// flaviaImg.addEventListener(TYPE, CALLBACK)
// flaviaImg.addEventListener(ACTION_TO_LISTEN, REACTION)



// REFACTORED WAY IS THIS
// const roundImage = (event) => {
//   // console.log(event);
//   // console.log(event.currentTarget);
//   // console.log(flaviaImg === event.currentTarget);
//   // console.log('Olá, Flávia');

//   // add the class img-round to the image
//   event.currentTarget.classList.toggle('img-round');
// }

// flaviaImg.addEventListener('click', roundImage);


// NON REFACTORED WAY IS THIS

// flaviaImg.addEventListener('click', (event) => {
//   // console.log(event);
//   // console.log(event.currentTarget);
//   // console.log(flaviaImg === event.currentTarget);
//   // console.log('Olá, Flávia');

//   // add the class img-round to the image
//   event.currentTarget.classList.toggle('img-round');
// });


// ALL IMAGES
const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
  img.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('img-round');
  });
});

// 1 select the element
// 2 add the event listener
// 3 implement the callback


















