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

  $.each(startingBoard, function(index, element){
    // console.log(element);
    $(element).on('click', function(e){ //when a card is clicked
    console.log(e);
      var animalClass = $(this).attr('class').split(' ')[1]; //once max of 2 are clicked, assign to this var
      clickedCards.push(animalClass); //also push cards in that var into this array
      console.log(clickedCards);

      if (clickedCards.length % 2 === 0) {
        if (clickedCards[0] === clickedCards[1]) { //if the strings, ie card names, of both elements in array match
          console.log('match');
          player1++; //give a point
          $('.' + animalClass).unbind('click') //remove click event from both

        }; //closes second if
        clickedCards = []; //reset 
       }; //closes first if
       // else { //if no match, but not required --> everything's done on match, so no need for anymore actions on else
     // }
    }); //closes function on click
  }); //closes function on startingBoard

// --> turn-taking and parsingInt for using index of array elements to match:
