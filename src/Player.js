// Properties:

// name: The name of the player.
// board: An instance of the Board class representing the player's game board.
// opponentBoard: An instance of the Board class representing the opponent's game board.
// ships: An array of the player's ships

// SELECTION: 
// No.	Class of ship	Size Total No.
// 1	  Carrier	        5      x1
// 2	  Battleship	    4      x1
// 3	  Destroyer	      3      x1
// 4	  Submarine	      3      x2
// 5	  Patrol Boat	    2      x2

// Methods

class Player {
  constructor(name, boardSize){
    // Initializes the player with a name and creates the player's board with the given size.
  }
  placeShips() {
    // Allows the player to place their ships on the board. This method should interact with the player to get ship positions and directions (x, y)
  }
  selectDirection(ship) {
    // Allows the player to choose the direction for a specific ship ("vertical", "horizontal").
  }
  fire(position) {
    // Accepts a position and fires at the opponent's board. 
    // It should check if the shot is valid and update the opponent's board accordingly.
    // It should also check if a ship is hit and if any ship is sunk.
  } 
  hasShipsLeft() {
    // Checks if the player still has any ships left on their board.
  }
}