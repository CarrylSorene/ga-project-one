  $(document).ready(function(){
  console.log('ready');
//   $('div').on('click', function(e) { //anonymous callback function
//     console.log(this); 
// });
});

//define variables to start
var player1 = 0; //store player scores
//var player2 = 0;
var startingBoard = $('.card'); //using class of card to grab them all
var clickedCards = []; //will move 2 cards clicked each turn into this
//var counter = 0; //use later if time to make turn-taking work

  //ask players for names - use at the end with declareWinner (& at start of each turn to tell them whose turn it is)

  //shuffle cards


  $.each(startingBoard, function(index, element){
    //console.log(element);
    $(element).on('click', function(e){ //when a card is clicked
    console.log(e);
    // $(this).css('background-color', 'red');
    $(this).css({'background-image': 'url(./images/' + this.id + '.png)', 'background-repeat': 'no-repeat'});
      var animalClass = $(this).attr('class').split(' ')[1]; //once max of 2 are clicked, assign to this var
      console.log("this", this);
      // $(this).css({"background-image" : "url(./images/ + this.id + .png)","background-repeat": "no-repeat"}); //this.id matches div id
      console.log('this.id', this.id);
      clickedCards.push(animalClass); //also push cards in that var into this array
      console.log(clickedCards);

      //./images + this.id + '.png'

//turn cards over to show pictures

// if (clickedCards[0] === "elephant") { //|| clickedCards[1]
//         $(this).css('background', 'url(./images/elephant.png) center no-repeat');
//         $(this).css('background-color', 'white');
//         console.log('hello');

        if (clickedCards.length % 2 === 0) {
          if (clickedCards[0] === clickedCards[1]) { //if the strings, ie card names, of both elements in array match //not doing it for other matches
            console.log('first match');
            player1++; //give a point
            $('.' + animalClass).off('click') //remove click event from both (instead of unbind)
          } //closes second if
          // else if (clickedCards[2] === clickedCards[3]) {
          //   console.log("second match");
          // }
          else {
            $(this).css({'background-image': 'url(./images/' + this.id + '.png)', 'background-repeat': 'no-repeat'}); //to show 2nd non-matching picture
            // $(this).delay(2000).addClass('white-background');
            $(this).delay(2000).fadeOut(500, function() {
              setTimeout(function() {
              $(this).addClass('white-background');
              }, 2000);
            });

    //       $(this).click(function(){
    //     $(this).delay(500).addClass('white-background');
    // });  
            console.log("background class?", this)
            // $(this).animate({opacity: 0}, 4000);
            // $(this).animate({ width: "400px" }, 500);
            // console.log(this)
            // $('.card').css('background-image', 'url(./images/cardback.png)'); //line just added -- will this work within original click
            console.log("no match");
            } 
          clickedCards = []; //reset
          // $('.card').css('background-image', 'url(./images/cardback.png)');
                  }; //closes else not-matching
        // if (clickedCards.length % 2 !== 0 && clickedCards.length > 1) {
        //   console.log("firstCard", firstCard);
        //   console.log("secondCard", secondCard);
        //   console.log('add white background');
        //   firstCard.css('background-image', 'url(./images/cardback.png)');
        // }; //closes not-matching - show white
        }); //closes first if
    }); //closes function on click
 // }); //closes function on startingBoard

//change turn - store number of matches each player makes in an array? to compare lengths to end game & decide winner

//decide and display winner - works better with turn-taking and 2 players - also with array to store playerMatches so can compare against lengths
          // if (all cards clicked?) { how to end game with just 1 player?
          // $('#result').text('You matched ' + player1 'pairs!')
          // };
  // if (playerMatches1.length > playerMatches2.length) {
  //   $('#result').text('Player 1 is the winner with ' + player1 ' pairs!');
  // }
  //   else if (playerMatches1.length < playerMatches2.length) {
  //   $('#result').text('Player 2 in the winner with ' + player2 ' pairs!'
  // }
  //   

//play again and reset?