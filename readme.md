# Let's Play Pairs

## GA WDI London: Project 1

![](https://github.com/CarrylSorene/ga-project-one/blob/master/images/pairs-full.png)

### The Build

* HTML
* CSS
* JavaScript
* jQuery

### Approach taken

The game's aimed at young children so the board is large with cute pictures, rounded corners on the cards and a finger-paint style font. Planning was done in Trello and updated throughout the project. HTML and CSS stayed simple, and jQuery was used as much as possible. Ideas of how to code parts of the JavaScript and jQuery began in planning and changed as soon as they were implemented as I discovered better ways to do them. Once the code was almost complete, sections of it were separated to be easier to read and since it wasn't running properly.

### How It Works

Two names need to be entered into the textboxes before the game can start. Once the first player clicks on two cards, a matched pair will stay visible while a non-matching pair will turn back over after a short delay. Once all the pairs have been matched, the players are told who has won.

### Challenges and Problems

* To reset the game, the players need to refresh the browser.
* If a player clicks on a card that has already been matched, the turn changes and that card disappears if the next one that's clicked isn't a match.
* Due to the delay before non-matching cards turn back over, if the next player clicks on their first card too quickly, the game will be confused about whose turn it is and how many points each player has scored.

### Future Plans

* Fix the problems above
* Style the name-input form.
* Resize the cards/game board and make it responsive so the 4x4 grid remains and is still usable on any size screen.
* Add touch functionality for mobile devices.
* Deploy to Heroku so the working app can be used.