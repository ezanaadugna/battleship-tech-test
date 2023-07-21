class Ship {
  constructor(size) {
    this.size = size;
    this.position = { x: 0, y: 0 };
    this.direction = "horizontal";
    this.hits = new Set();
  }

  hit(position) {
    // Accepts a position and checks if the ship is hit at that location.
    // If it is hit and the position is valid within the ship's size, update the ship's internal state to reflect the hit.
    if (this.isPositionOnShip(position)) {
      this.hits.add(position);
      return true;
    }
    return false;
  }

  isPositionOnShip(position) {
    // Checks if the provided position is within the boundaries of the ship.
    if (this.direction === "horizontal") {
      return (
        position.y === this.position.y &&
        position.x >= this.position.x &&
        position.x < this.position.x + this.size
      );
    } else if (this.direction === "vertical") {
      return (
        position.x === this.position.x &&
        position.y >= this.position.y &&
        position.y < this.position.y + this.size
      );
    }
    return false;
  }

  isSunk() {
    // Checks if the ship is sunk.
    return this.hits.size === this.size;
  }
}

module.exports = Ship;s