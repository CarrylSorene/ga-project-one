  $(document).ready(function(){
  console.log('ready');
});

//define variables to start
var player1 = 0; //store player scores
//var player2 = 0;
var startingBoard = $('.card'); //using class of card to grab them all
var clickedCards = []; //will move 2 cards clicked each turn into this
//var counter = 0; //can use later to make turn-taking work

  //ask players for names - use at the end with declareWinner (& at start of each turn to tell them whose turn it is - on click of changeTurn button)

  //shuffle cards --> at start of game, along with reset

// Shuffle(startingBoard);

//   $(function() {
//     for (var i=0; i < startingBoard.length; i++) {
//       $('#gameBoard').append(startingBoard[i]);
//     }
//   });

//   or --> but how does either one work separately?

//   startingBoard.sort(function() {
//     return 0.5 - Math.random()
//   });

  //Click to turn over a card - twice per move

  $.each(startingBoard, function(index, element){
    //console.log(element);
    $(element).on('click', function(e){ //when a card is clicked
    console.log(e);
    // $(this).css('background-color', 'red');
    $(this).css({'background-image': 'url(./images/' + this.id + '.png)', 'background-repeat': 'no-repeat'}); //this.id matches div id
      var animalClass = $(this).attr('class').split(' ')[1]; //once max of 2 are clicked, assign to this var
      console.log("this", this);
      console.log('this.id', this.id);
      clickedCards.push(animalClass); //also push cards in that var into this array
      console.log(clickedCards);

//Check if clicked cards match winningPairs

      if (clickedCards.length % 2 === 0) {
        if (clickedCards[0] === clickedCards[1]) { //if the strings, ie card names, of both elements in array match
          console.log('match');
          player1++; //give a point //edit for player2's turn -->
          $('.' + animalClass).off('click') //remove click event from both
        } //closes -cardmatching if
         
          else {
            $(this).css({'background-image': 'url(./images/' + this.id + '.png)', 'background-repeat': 'no-repeat'}); //to show picture
               };
            // console.log("no match");
          
          clickedCards = []; //reset
          
            }; //closes array.length if
        }); //closes click function
      }); //closes startingBoard function

//change turn - store number of matches each player makes in an array? to compare lengths to end game & decide winner

//decide and display winner - works better with turn-taking and 2 players - also with array to store playerMatches so can compare against lengths
          
          $('#scoreButton').on('click', function(e){
            $('#score').text(player1); //would have string for text, but broke on ()
          });

$(document).ready(function reset()
{
    
          $('#resetButton').on('click', function(e){ //click enough? not working
            player1 = 0; //store player scores
          //player2 = 0;
            startingBoard = $('.card'); //using class of card to grab them all
            clickedCards = [];
          });
    //note, you must ensure event handlers are unbound --> ?
    $('#reset').unbind('click').bind('click', reset);//<-- call main callback
});

  // if (playerMatches1.length > playerMatches2.length) {
  //   $('#result').text('Player 1 is the winner with ' + player1 ' pairs!');
  // }
  //   else if (playerMatches1.length < playerMatches2.length) {
  //   $('#result').text('Player 2 in the winner with ' + player2 ' pairs!'
  // }
  //   

//play again and reset?