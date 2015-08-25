  $(document).ready(function(){
  console.log('ready');
});

//define variables to start
var playerscore1 = 0; //store player scores
var playerscore2 = 0;
var startingBoard = $('.card'); //using class of card to grab them all
var clickedCards = []; //will move 2 cards clicked each turn into this
var clickedDOMElements = []
var turn = 0;
var counter = 0; //add one for every 2 cards matched, game ends when counter reaches 8.
var player1 = 'Carryl'; //blank - assigned when click - val of text box
var player2 = 'Jeremy';
var player;
var lastPlayer;
  //Click to turn over a card - twice per move - every odd clickNum === new turn?

function currentPlayer() {
  return lastPlayer === player1 ? player2 : player1  
}

$.each(startingBoard, function(index, element){
  //console.log(element);
  $(element).on('click', function(e){ //when a card is clicked
    console.log(e);
    
    player = currentPlayer()
    console.log('player is: ', player);

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
          counter++; //keep count of total matched pairs per game
          $('.' + animalClass).off('click') //remove click event from both
        } //closes -cardmatching if
        else {
          $(this).css({'background-image': 'url(./images/' + this.id + '.png)', 'background-repeat': 'no-repeat'}); //to show picture
          $.each(clickedDOMElements, function(index, element) {
            $(element).css('background-image', 'url(./images/cardback.png)');
          }); //closes
        }; // closes if match
        lastPlayer = player
        console.log(turn); //seems to be working - is outputting +1 each time
        clickedCards = []; //reset
        clickedDOMElements = []; //reset

      }, 1500); //end of setTimeout

    }; //closes clickedCards.length % 2 === 0
  }); //closes click function

}); //closes startingboard each

//decide and display winner - also with array to store playerMatches so can compare against lengths
          //if (counter === 8) function(){
          $('#scoreButton').on('click', function(e){
            $('#score').text(player1); //would have string for text, but broke on ()
          });
        //}); closes if counter - only shows score if true, otherwise use button
         