$(document).ready(function(){
  console.log('ready');
  $('div').on('click', function(e){ //anonymous callback function //ready for event listeners on page load same as var createListeners in JS example? --> Check if it works
    console.log(this);
})

//window.onload = createListeners;  // if not, maybe this way.

//var to store scores: player1 (and player2)
var player1 = 0;
//var player2 = 0;

// array to store card combinations: ['dinosaur', giraffe', 'goat', 'lion', 'snake', 'zebra']

var startingBoard = ['giraffe1', 'giraffe2', 'lion1', 'lion2' 'zebra1', 'zebra2'];
var winningPairs = [['giraffe1', 'giraffe2'], ['lion1' 'lion2'], ['zebra1' 'zebra2']];


//click event for div elements (think I just understood a use for this here, unless we code out every id..?)
//$(document).ready(function(){
//console.log('still ready');
$('div').on('click', function(e){
  console.log('yet more ready')
  var $element = $(this); //div we're in now it was clicked
  $element. //highlight if poss, or change picture from white/white bg to image of animal 
  )
}

//show image
//then second click same result on that card

//decide if pair matches - two divs ids can't be the same, so ids eg if (div id === lion1) && (div id === lion2)

// but how to do with items in array? see tictactoe solution

// ( === dinosaur1) && ( === dinosaur2) / ( === giraffe1) && ( === giraffe2) / ( === goat1) && ( === goat2) /
// ( === snake1) && ( === snake2) / ( === zebra1) && ( === zebra2)

//if pair matched - change colour of back of card and make them unplayable
//splice cards out of array to playedCards array (or playerOnePile and playerTwoPile if get that far)



//decide winner - total number of matched pairs stored in player's variable. Or it's a tie.


//declare winner or tie - change html.