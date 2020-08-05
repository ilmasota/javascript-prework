'use strict';
{
  const displayResults = {
    'rounds' : 0,
    'playerWins' : 0,
    'computerWins' : 0
  }

  const playGame = function(playerInput){

    clearMessages();

    const getMoveName = function(argMoveId){
      if(argMoveId == 1){
        return 'kamień';
      } else if (argMoveId == 2){
        return 'papier';
      } else if (argMoveId == 3) {
        return 'nożyce';
      }
    }

    const displayResult = function(argComputerMove, argPlayerMove) {
      if((argComputerMove == 'kamień' && argPlayerMove == 'papier')||(argComputerMove == 'papier' && argPlayerMove == 'nożyce')||(argComputerMove == 'nożyce' && argPlayerMove == 'kamień')){
        displayResults.rounds += 1;
        displayResults.playerWins += 1;
        return 'Ty wygrywasz!';
      } else if ((argComputerMove == 'kamień' && argPlayerMove == 'nożyce')||(argComputerMove == 'papier' && argPlayerMove == 'kamień')||(argComputerMove == 'nożyce' && argPlayerMove == 'papier')){
        displayResults.rounds += 1;
        displayResults.computerWins += 1;
        return 'Komputer wygrywa!';
      } else {
        displayResults.rounds +=1;
        return 'Remis!';
      }
    }

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    /* Computer move */
    console.log('Wylosowana liczba to: ' + randomNumber);
    const computerMove = getMoveName(randomNumber);
    printMessage('Ruch komputera to: ' + computerMove);

    /* Player move */
    console.log('Gracz wpisał: ' + playerInput);
    const playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);

    /* Displaying Result */
    printMessage(displayResult(computerMove, playerMove));
    printMessage('liczba rund: ' + displayResults.rounds + ", komputer: " + displayResults.computerWins + ", Ty: " + displayResults.playerWins);
  }

  const clickedRock = function() {
    playGame(1);
  }

  const clickedPaper = function() {
    playGame(2);
  }

  const clickedScissors = function() {
    playGame(3);
  }

  document.getElementById('play-rock').addEventListener('click', clickedRock);
  document.getElementById('play-paper').addEventListener('click', clickedPaper);
  document.getElementById('play-scissors').addEventListener('click', clickedScissors);
}
