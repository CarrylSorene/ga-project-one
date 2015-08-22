  $(document).ready(function(){
console.log('ready');
  $('div').on('click', function(e) { //anonymous callback function //ready for event listeners on page load same as var createListeners in JS example?
    console.log(this); 
});
});

//var to store scores: player1 (and player2)
var playerMatches1 = 0;

var startingBoard = $('div'); //enough to select them all?
// ['giraffe1', 'giraffe2', 'lion1', 'lion2', 'zebra1', 'zebra2'];
var clickedCards = [];
var winningPairs = [['giraffe1', 'giraffe2'], ['lion1', 'lion2'], ['zebra1', 'zebra2']];

//pass listener to divs - must iterate through array and add listener to individual html elements //does that mean I can't only go up to 2 before full array is longer - so do that separately. How would they be workable separately?
//click event for div elements (think I just understood a use for this here, unless we code out every id..?)

// $(document).ready(function(){
// 
//     $('div').on('click', function(e){
//     console.log('yet more ready');
//     console.log(this);


//move clicked cards into array - only 2 - limit after 2

    function addCardListener(){ 
    debugger;
    for (var i = gameBoard.length, i < gameBoard.length -1; i++) {
      clickedCards[i] = $('div').on('click');
      console.log('Clicked cards to array of only two');

      var cardsIndex = (startingBoard.length); //look for that clicked card - not random - and use it 
      var playedCards = startingBoard[index];
      
     $('div').('click')clickedCards.push$

      startingBoard.splice(cardsIndex, 1);
      
      console.log(startingBoard.length);
      console.log(cardsIndex);

  };

      //check if clicked cards match a winning pair

      if //clicked div x 2 (!um, by calling (e) ? and second click?)
        ((e) === giraffe1) && ((e) === giraffe2) {
          console.log('giraffes');
        
        };

//how many times/need neater way to write this, since we're checking same thing -> use switch.
        else if  ((e) === lion1) && ((e) === lion2) {
          console.log('lions');
        };

          else if ((e) === zebra1) && ((e) === zebra2) {
            console.log('zebras');
           };

            else //if nothing matches, turn cards back/white bg //new turn 
            {
              console.log('no matching pairs');
            };

var cardsIndex = Math.floor(Math.random() * startingBoard.length);
var playedCards = startingBoard[index];
startingBoard.splice(cardsIndex, 1);
console.log(startingBoard.length);
console.log(cardsIndex);


      //save any matching pairs in player1's var, but first ^

//   var $element = $(this); //div we're in now it was clicked
//   $element. //highlight if poss, or change picture from white/white bg to image of animal 
});  

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