function playGame(playerInput){

  clearMessages();

  function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if (argMoveId == 2){
      return 'papier'
    } else if (argMoveId == 3) {
      return 'nożyce'
    }
  }

  function displayResult(argComputerMove, argPlayerMove) {
    if((argComputerMove == 'kamień' && argPlayerMove == 'papier')||(argComputerMove == 'papier' && argPlayerMove == 'nożyce')||(argComputerMove == 'nożyce' && argPlayerMove == 'kamień')){
      return 'Ty wygrywasz!';
    } else if ((argComputerMove == 'kamień' && argPlayerMove == 'nożyce')||(argComputerMove == 'papier' && argPlayerMove == 'kamień')||(argComputerMove == 'nożyce' && argPlayerMove == 'papier')){
      return 'Komputer wygrywa!';
    } else {
      return 'Remis!';
    }
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  /* Computer move */
  console.log('Wylosowana liczba to: ' + randomNumber);
  let computerMove = getMoveName(randomNumber);
  printMessage('Ruch komputera to: ' + computerMove);

  /* Player move */
  console.log('Gracz wpisał: ' + playerInput);
  let playerMove = getMoveName(playerInput);
  printMessage('Twój ruch to: ' + playerMove);

  /* Displaying Result */
  printMessage(displayResult(computerMove, playerMove));
}

function clickedRock() {
  playGame(1);
}

function clickedPaper() {
  playGame(2);
}

function clickedScissors() {
  playGame(3);
}

document.getElementById('play-rock').addEventListener('click', clickedRock);
document.getElementById('play-paper').addEventListener('click', clickedPaper);
document.getElementById('play-scissors').addEventListener('click', clickedScissors);
