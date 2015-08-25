$(document).ready(function(){
  console.log('ready');
  gameSetup();
  initBoard();
  $('#submit-names').on('click', function() {
    var firstName = $('#name1').val()
    var secondName = $('#name2').val()
    players[firstName] = {
      score: 0,
      name: firstName
    }
    players[secondName] = {
      score: 0,
      name: secondName
    }
  })
});

//define variables to start
var startingBoard = $('.card'); //using class of card to grab them all
var startingBoardArray = []; //store ready to shuffle cards before game
var clickedCards = []; //store 2 cards clicked each turn
var clickedDOMElements = [] //store the HTML divs clicked on
var counter = 0; //add one for every 2 cards matched, game ends when counter reaches 8.
var players = {}

var player;
var lastPlayer;
var winner;

function initBoard() {
  $('.card').each(function(index, element){
    startingBoardArray.push($(element)) //create new array to then shuffle card elements
  })
  
  //console.log('Create New Array For Shuffling'); //working multiple times for each

  startingBoardArray.sort(function() { return 0.5 - Math.random() }); //shuffle cards randomly
  console.log(startingBoardArray); //working multiple times for each
  $('.row').each(function(index, row) {
    $(row).empty()
    var newRow = startingBoardArray.splice(0, 4)
    $.each(newRow, function(i, card) {
      $(row).append(card);
    })
  })
}


//Decide who current player is, based on last player

function currentPlayer(player1, player2) {
  return lastPlayer === players[player1].name ? players[player2].name : players[player1].name  
}

function gameSetup() {
  $('body').on('click', '.card', function(e) {
    console.log($(this))
    player = currentPlayer(Object.keys(players)[0], Object.keys(players)[1])
    $('p').children('span').text('The current player is: ' + player);
    $(this).css({'background-image': 'url(./images/' + this.id + '.png)', 'background-repeat': 'no-repeat'}); //this.id matches div id
    var animalClass = $(this).attr('class').split(' ')[1];

    clickedCards.push(animalClass); //also push cards in that var into this array
    clickedDOMElements.push($(this))// pushing the element that the user clicked in to the array

    checkForMatchingPair(animalClass)

  })
}

function decideWinner(player1, player2){
  return players[player1].score > players[player2].score ? players[player1].name : players[player2].name
} 

function checkForMatchingPair(animalClass) {
  if (clickedCards.length % 2 === 0) {
    setTimeout(function() {
      if (clickedCards[0] === clickedCards[1]) { //if the strings, ie card names, of both elements in array match //put into a function
        console.log('match');
        // currentPlayer() //local var
        players[currentPlayer(Object.keys(players)[0], Object.keys(players)[1])].score++ //[referring back to object]
        counter++; //keep count of total matched pairs per game

        $('.' + animalClass).off('click') //remove click event from both
        if (counter === 8) {
        $('#result').text('The winner is ' + decideWinner(Object.keys(players)[0], Object.keys(players)[1]));
          console.log('Game Over');
        }
      } //closes -cardmatching if
      else {
        $(this).css({'background-image': 'url(./images/' + this.id + '.png)', 'background-repeat': 'no-repeat'}); //to show picture
        $.each(clickedDOMElements, function(index, element) {
          $(element).css('background-image', 'url(./images/cardback.png)');
        }); //closes
      }; // closes if match

      lastPlayer = currentPlayer(Object.keys(players)[0], Object.keys(players)[1])
      clickedCards = []; //reset
      clickedDOMElements = []; //reset

    }, 1500); //end of setTimeout

  }; //closes clickedCards.length % 2 === 0
}