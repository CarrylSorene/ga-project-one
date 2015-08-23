  $(document).ready(function(){
  console.log('ready');
//   $('div').on('click', function(e) { //anonymous callback function //ready for event listeners on page load same as var createListeners in JS example?
//     console.log(this); 
// });
});

//var to store scores: player1 (and player2)
var playerMatches1 = 0;
var startingBoard = $('gameBoard')
//['giraffe1', 'giraffe2', 'lion1', 'lion2', 'zebra1', 'zebra2']; //enough to select them all?
// ['giraffe1', 'giraffe2', 'lion1', 'lion2', 'zebra1', 'zebra2'];
var clickedCards = [];
var winningPairs = [['giraffe1', 'giraffe2'], ['lion1', 'lion2'], ['zebra1', 'zebra2']];

//Step 1 click card - match id to array - move that to clickedCards array, repeat for second click - then stop at 2 clicks.

//move cards clicked to new array - need to identify that card's index

  $.each(startingBoard, function(index, element){
    console.log(startingBoard)
  clickedCards = $('startingBoard').on('click', function(e){
  e.preventDefault();  //doesn't like my < symbol
  // must iterate over elements in array - click events don't work just on array - then add event listener within the for loop

  clickedCards = startingBoard.filter(e); // but in jquery, which bit is the function's name? can it be e for event as above?

  console.log(clickedCards);
  console.log('A card was clicked');
  });
});

// var uppercaseFriends = [];
// friends.forEach(function(friend){
//   uppercaseFriends.push(friend.toUpperCase());
  
// });

// for(var i = 0, i < startingBoard.length; i++) { //use forEach of jQ equiv.
//   console.log(startingBoard[i]);
  

//with a number in [] should be able to filter out that element and move it - why not even console.logging?
    
    // while (clickedCards.length === 2) {
    // if (clickedCards === winningPairs) { //can that look at all arrays of pairs in that outer array? or use for loop, etc?
    //     player1++; //syntax ok just like that? saw it with var count in another example.
    //   };
    //   else {
    //     clickedCards.push(startingBoard) //syntax?
    //   };
    // }; 

// });

  // compare those two cards’ div id’s to the matchingPairs array and decide if the player gets a point.



