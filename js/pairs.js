$(document).ready(function(){
  console.log('ready');
  gameSetup();
  initBoard();
  $('#submit-names').on('click', function() { //store in object along with scores
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
var lastPlayer; //so we can compare that and swap to display who's turn is next
var winner;

function initBoard() {
  $('.card').each(function(index, element){
    startingBoardArray.push($(element)) //create new array to then shuffle card elements
  })

  startingBoardArray.sort(function() { return 0.5 - Math.random() }); //shuffle cards randomly
  // console.log(startingBoardArray);
  $('.row').each(function(index, row) {
    $(row).empty() //empty rows before shuffing array and using it to refill the rows
    var newRow = startingBoardArray.splice(0, 4) //each row contains 4 cards
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
  $('body').on('click', '.card', function(e) { //click to turn a card
    console.log($(this))
    player = currentPlayer(Object.keys(players)[0], Object.keys(players)[1]) //look at keys in players objects - there are only 2
    $('p').children('span').text('The current player is ' + player);
    $(this).css({'background-image': 'url(./images/' + this.id + '.png)', 'background-repeat': 'no-repeat', 'padding': '10px auto'}); //this.id matches div id
    var animalClass = $(this).attr('class').split(' ')[1]; //store the 2 cards clicked on & split from the startingBoard array

    clickedCards.push(animalClass); //also push cards in that var into this array
    clickedDOMElements.push($(this))// push the DOM element that the user clicked in to the array (div by id)
    checkForMatchingPair(animalClass) //pass variable in 

  })
}

function decideWinner(player1, player2){
  return players[player1].score > players[player2].score ? players[player1].name : players[player2].name //referring to the object
} 

function checkForMatchingPair(animalClass) {
  if (clickedCards.length % 2 === 0) { //after every 2 clicks
    setTimeout(function() {
      if (clickedCards[0] === clickedCards[1]) { //both elements in array created when 2 cards are clicked
        console.log('match');
        players[currentPlayer(Object.keys(players)[0], Object.keys(players)[1])].score++ //referring to the object
        counter++; //keep count of total matched pairs per game

        $('.' + animalClass).off('click') //remove click event from both so they can't be clicked again
        if (counter === 8) { //all 16 cards have been clicked, so there are 8 matching pairs
        $('#result').text('The winner is ' + decideWinner(Object.keys(players)[0], Object.keys(players)[1]));
          console.log('Game Over');
        }
      } //closes cardmatching if
      else {
        $(this).css({'background-image': 'url(./images/' + this.id + '.png)', 'background-repeat': 'no-repeat'}); //to show picture
        $.each(clickedDOMElements, function(index, element) {
          $(element).css('background-image', 'url(./images/cardback.png)');
        }); //closes
      }; // closes if match

      lastPlayer = currentPlayer(Object.keys(players)[0], Object.keys(players)[1]) //check lastPlayer so current will play next
      clickedCards = []; //reset, empty the arrey
      clickedDOMElements = []; //reset, empty the array

    }, 1500); //end of setTimeout
  }; //closes clickedCards.length % 2 === 0
}