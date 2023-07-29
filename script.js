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
  

  //play the audio 
  var audio = document.getElementById("sound");
  

//reset audio to the beggining before playing
audio.currentTime = 0;
audio.play();

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

const allCards = document.getElementsByClassName('flip-card');
const matchedCards = document.getElementsByClassName('match');
if(allCards.length === matchedCards.length) {
  
  setTimeout(function () {
    //stop bgAudio
    var bgAudio = document.getElementById('bgSound');
    bgAudio.pause();
    bgAudio.currentTime = 0;


    //play winning audio
    var winSound = document.getElementById("winSound");

   winSound.play();

    //show good job alert
    alert("Good job, you catched all the suspects! Now there will finally be justice for all their victims!");
    //reload the page to start new page
    window.location.reload();
  }, 1000);
}


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


//For random images and states when page is reloaded ...
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

// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Get all elements with the class "flip-card"
  var flipCards = document.getElementsByClassName("flip-card");

  // Loop through all flip-card elements
  for (var i = 0; i < flipCards.length; i++) {
    // Add a click event listener to each flip-card element
    flipCards[i].addEventListener("onclick", function() {
      // Call the toggleFlip function and pass the clicked element (this) as an argument
      toggleFlip(this);
    });
  }
});



document.addEventListener("DOMContentLoaded", function() {
  // Get the audio element for the background music
  var bgAudio = document.getElementById('bgSound');
  
  var playButton = document.getElementById("playButton");
  if(playButton) {
    playButton.addEventListener("click", function () {
      bgAudio.play();
      playButton.style.display = "none";
      });
  }

  if (bgAudio) {
    document.addEventListener("click", function () {
      bgAudio.play();
      },{ once: true});
  } 
  
});




//call random states func
addRandomStates();

// Call the function to add random images
addRandomImages();

