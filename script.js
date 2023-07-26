let flippedCards = [];
let noClicking = false;
const stateNames = [
  "ALASKA",
  "FLORIDA",
  "HAWAII",
  "GEORGIA",
  "COLORADO",
  "KENTUCKY",
  // Add more state names as needed
];


function toggleFlip(e) {

  if (noClicking) return
  e.classList.toggle('clicked');
  
  // Add or remove the clicked card from the flippedCards array
  const index = flippedCards.indexOf(e);
  if (index > -1) {
    flippedCards.splice(index, 1);
  } else {
    flippedCards.push(e);
  }
  
  // Check if two cards are flipped
  if (flippedCards.length === 2) {
    checkMatch();
  }
}

function checkMatch() {
  noClicking = true;
  const firstCard = flippedCards[0];

  const secondCard = flippedCards[1];
  
  const firstState = firstCard.querySelector('.state').textContent;
  const secondState = secondCard.querySelector('.state').textContent;
  
  if (firstState === secondState) {
    // Cards match, keep them flipped and change to black and white
    firstCard.classList.add('match');
    secondCard.classList.add('match');
    flippedCards = [];
    noClicking = false;
  } else {
    // Cards don't match, flip them back after a delay
    setTimeout(() => {
      firstCard.classList.remove('clicked');
      secondCard.classList.remove('clicked');
      flippedCards = [];
      noClicking = false;
    }, 1000);
  }
}

function addRandomStates() {
  const flipCards = document.getElementsByClassName('flip-card-back');

  const stateNames = [
    "ALASKA",
    "FLORIDA",
    "HAWAII",
    "GEORGIA",
    "COLORADO",
    "KENTUCKY",
    // Add more state names as needed
  ];

  for (let i = 0; i < flipCards.length; i++) {
    const randomIndex = Math.floor(Math.random() * stateNames.length);
    const stateName = stateNames[randomIndex];
    stateNames.splice(randomIndex, 1);
    flipCards[i].querySelector('.state').textContent = stateName;

    if (stateNames.length === 0) {
      stateNames.push("ALASKA", "FLORIDA", "HAWAII", "GEORGIA", "COLORADO", "KENTUCKY");
    }
  }
}


function addRandomImages() {
  const flipCards = document.getElementsByClassName('flip-card-back');
  const imagePaths = [
    'Images/1.JPG',
    'Images/2.JPG',
    'Images/3.JPG',
    'Images/4.JPG',
    'Images/5.JPG',
    'Images/6.JPG',
    'Images/7.JPG',
    'Images/8.JPG',
    'Images/9.JPG',
    'Images/10.JPG',
    'Images/11.JPG',
    'Images/12.JPG'
  ];

  for (let i = 0; i < flipCards.length; i++) {
    const randomIndex = Math.floor(Math.random() * imagePaths.length);
    const imagePath = imagePaths[randomIndex];
    flipCards[i].style.backgroundImage = `url(${imagePath})`;
    imagePaths.splice(randomIndex, 1); // Remove the used image path from the array
  }
}

//call random states func
addRandomStates();

// Call the function to add random images
addRandomImages();

