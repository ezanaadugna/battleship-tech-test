// Properties:

// players: An array of the two players.
// currentPlayer: The player whose turn it currently is.
// Methods:

class Game {
  constructor(player1Name, player2Name, boardSize) {
    // Initializes the game with two players and the board size.
  }
  start(){ 
    // Starts the game and handles the main game loop, alternating turns between players until a win or lose condition is met.
  }
  switchTurn() {
    // Switches the current player's turn.
  }
  isGameOver() {
    // Checks if the game is over.
    // returns if player has won or lost.
  }
  announceResult() {
    // Announces the result of the game (which player won or if it was a draw).
  }
}