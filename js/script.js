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
  }  // printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      // return 'nieznany ruch';
    // }

  function displayResult(argComputerMove, argPlayerMove) {
    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      return 'Ty wygrywasz!';
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
      return 'Komputer wygrywa!';
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
      return 'Ty wygrywasz!';
    } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
      return 'Komputer wygrywa!';
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
      return 'Komputer wygrywa!';
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
      return 'Ty wygrywasz!';
    } else if (argComputerMove == argPlayerMove) {
      return 'Remis!';
    } else {
      return 'Runda nierozstrzygnięta! Spróbuj jeszcze raz.';
      }
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  /* Computer move */
  console.log('Wylosowana liczba to: ' + randomNumber);
  let computerMove = getMoveName(randomNumber);
  printMessage('Ruch komputera to: ' + computerMove);

  /* Player move */
  // let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
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

let buttonRock = document.getElementById('play-rock');
let buttonPaper = document.getElementById('play-paper');
let buttonScissors = document.getElementById('play-scissors');

buttonRock.addEventListener('click', clickedRock);
buttonPaper.addEventListener('click', clickedPaper);
buttonScissors.addEventListener('click', clickedScissors);
