//Properties

// size: The size of the ship
// position: the position of the ship on the board. represented as an obkect with x and y co-ordinates.
// direction: The direction the ship is facing. represented as a string ("vertical", "horizontal").
// hits: A set, array, or map to keep track of the ship's hit positions.


class Ship {
  constructor(size){
    // Initializes the ship with the given size.
  } 
  
  hit(position) { 
    // Accepts a position and checks if the ship is hit at that location. If it is hit, update the ship's internal state to reflect the hit.
  }

  isPositionOnShip(position) {
    // Checks if the provided position is within the boundaries of the ship.
  }

  isSunk() {
    // Checks if the ship is sunk
  }
}
