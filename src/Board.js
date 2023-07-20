// Properties:
// size: 10 x 10
// grid: A 2D array representing the board grid. Each cell in the grid will hold information about whether it's empty or occupied by a ship.


// Methods:
class board {
  
  constructor(size) {
    // Initializes the board with the given size and sets up the grid [ 10 x10 ].
  };

  isValidPosition(position) {
    // Checks if a given position is within the boundaries of the board i.e checks if the player had already attacked that cell
  }
  isPositionEmpty(position) {
    // Checks if a given position on the board is empty
  }

  placeShip(ship, position, direction) {
    // Attempts to place a ship on the board at the given position and direction. 
    // It should check for constraints like board boundaries and ship overlaps.
    // If the placement is succesful, update the grid.
  }
  receiveAttack(position) {
    // Accepts a position and registers the attack on the board. It should return whether the attack was a hit or a miss.
  }
}
