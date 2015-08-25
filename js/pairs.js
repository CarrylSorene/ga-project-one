  $(document).ready(function(){
  console.log('ready');
});

//define variables to start
var player1 = 0; //store player scores
var player2 = 0;
var startingBoard = $('.card'); //using class of card to grab them all
var clickedCards = []; //will move 2 cards clicked each turn into this
var clickedDOMElements = []
var counter = 0; //add one for every 2 cards matched, game ends when counter reaches 8.

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
    clickedDOMElements.push($(this)) // pushing the element that the user clicked in to the array
    
//Check if clicked cards match winningPairs

    if (clickedCards.length % 2 === 0) {
      setTimeout(function() {
        if (clickedCards[0] === clickedCards[1]) { //if the strings, ie card names, of both elements in array match //put into a function
          console.log('match');
          player1++; //give a point //edit for player2's turn -->
          $('.' + animalClass).off('click') //remove click event from both
        } //closes -cardmatching if
        else {
          $(this).css({'background-image': 'url(./images/' + this.id + '.png)', 'background-repeat': 'no-repeat'}); //to show picture
          $.each(clickedDOMElements, function(index, element) {
            $(element).css('background-image', 'url(./images/cardback.png)');
          })
        } // closes if match
        
        //Turn-taking - need to add one to counter for every turn regardless of match --> up where cards are clicked etc
  changeTurn (function(){ //change player turn
    if (counter % 2 === 0) { //player 1 starts
        turnText.innerHTML = "It is player 1's turn"; //tell players whose turn it is
        
        player1++ //only if they match a pair, or they don't get a point
    }
    else {
        turnText.innerHTML = "It is player2's turn"; //tell players whose turn it is
        counter++; //what does this do?
        player2++ //only if they match a pair, or they don't get a point
    }
  }); //end of changeTurn function
        
        clickedCards = []; //reset
        clickedDOMElements = []; //reset
        
        // }; //closes array.length if

      }, 1500) // end of setTimeout

    }; //closes clickedCards.length % 2 === 0
  }); 
}); // closes startingboard each

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