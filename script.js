let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById('start');
let currentlyPlaying = true;
let score = 0;
let highScore = 0;
let currentStreak = document.getElementById('score-num');
let bestStreak = document.getElementById('high-score');
currentStreak.innerHTML = score;
bestStreak.innerHTML = highScore;

//variable with the robot img
let botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
//variable with the beach img
let beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
//variable with the space img
let spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";
//variable closed door image
let closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";

let numClosedDoors = 3;

let openDoor1;
let openDoor2;
let openDoor3;

let isClicked = (door) => {
  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
}

let isBot = (door) => {
  if (door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
}

let playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver('win');
  } else if (isBot(door)) {
    gameOver('lose');
  }
}

let randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else {
    openDoor3 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor1 = spaceDoorPath;
  }
}

door1.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage1)) {
  doorImage1.src = openDoor1;
  playDoor(doorImage1);
  }
}

door2.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage2)) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
}

door3.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage3)) {
  doorImage3.src = openDoor3;
  playDoor(doorImage3);
  }
}

startButton.onclick = () => {
  if (!currentlyPlaying) {
  startRound();
  }
}

let startRound = () => {
  door1.src = closedDoorPath;
  door2.src = closedDoorPath;
  door3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

let gameOver = (status) => {
  if (status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
    scoreTracking();
  } else {
    startButton.innerHTML = 'Game over! Play again?';
    score = 0;
    currentStreak.innerHTML = score;
  }
  currentlyPlaying = false;
}

const scoreTracking = () => {
  score++;
  currentStreak.innerHTML = score;
  if (score > highScore) {
    highScore = score;
    bestStreak.innerHTML = highScore;
  }
}

startRound();
