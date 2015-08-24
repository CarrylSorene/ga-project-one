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
    console.log(element);
    $(element).on('click', function(e){ //when a card is clicked
    console.log(e);
      var animalClass = $(this).attr('class').split(' ')[1]; //once max of 2 are clicked, assign to this var
      clickedCards.push(animalClass); //also push cards in that var into this array
      console.log(clickedCards);

      if (clickedCards.length % 2 === 0) {
        if (clickedCards[0] === clickedCards[1]) { //if the strings -card names- of both elements in array match
          console.log('match');
          player1++; //give a point
          $('.' + animalClass).unbind('click') //remove click event from both
        } //closes second if
       } //closes first if
       // else { //if no match, but not required --> everything's done on match, so no need for any -else- actions
     
     // }
        clickedCards = []; //reset 
    }); //closes function on click
  }); //closes function on startingBoard

// --> turn-taking and parsingInt for using index of array elements to match:

// function clickedCards(event){ //is this the right var at this time?

//   // Ensure nothing happens if the box had already been clicked on 
//   // event.target... gives you the element on which the event happened (you can also use 'this') - targets your event so you can find what's been clicked on
//   if (event.target.css({'background-image: cardback.png'}){ //to change card round to starting position again // or write "if === cardback.png"?

//     if (counter % 2 === 0) { //if counter === zero, it's player1's turn
//       OMoves.push(parseInt(event.target.getAttribute("data-num"))); //parse the string into a number so the array of winningCombinations can be accessed //so far have id not data-num - does it make a difference? still need to select any card that might have a unique array within the id of gameBoard and class of card
//       event.target. = "O"; //set the blank box to this symbol
//       event.target.setAttribute("class","O"); // this is for styling
//       turnText.innerHTML = "It is player 2's turn";
//       counter++; //to track whose turn it is by updating the counter
//       //checkForWin(OMoves, "O"); //how to incorporate this bit?
//     }
//     else {
//       XMoves.push(parseInt(event.target.getAttribute("data-num")));
//       event.target.innerHTML = "X"; 
//       event.target.setAttribute("class","X");
//       turnText.innerHTML = "It is O's turn";
//       counter++;
//       checkForWin(XMoves, "X");
//     }
//   // if the counter is greater than or equal to 10, the game is a draw!
//   if (counter >= 10){
//     turnText.innerHTML = "Game Over!";
//     var conf = confirm("It's a draw, do you want to play again?"); //like alert, gives you a box to click eg OK or cancel
//     if(conf){ //if that element is truthy or falsey - if undefined, would be falsey
//       resetBoard(); // function defined below - it fine as we use anonymous function
//     }
//   }
//  }