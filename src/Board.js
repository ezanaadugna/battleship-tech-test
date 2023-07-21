class Board {
  constructor(size) {
    this.size = size;
    this.grid = this.createGrid(size);
  }

  createGrid(size) {
    return Array.from({ length: size }, () => Array.from({ length: size }, () => false));
  }

  isValidPosition(position) {
    const { x, y } = position;
    return x >= 0 && x < this.size && y >= 0 && y < this.size;
  }

  isPositionEmpty(position) {
    const { x, y } = position;
    return this.isValidPosition(position) && !this.grid[x][y];
  }

  placeShip(ship, position, direction) {
    if (!this.isValidPosition(position)) {
      return false;
    }

    const { size } = ship;
    const { x, y } = position;
    const positionsToCheck = [];
    
    if (direction === 'horizontal') {
      if (x + size > this.size) {
        return false;
      }
      for (let i = x; i < x + size; i++) {
        positionsToCheck.push({ x: i, y });
      }
    } else if (direction === 'vertical') {
      if (y + size > this.size) {
        return false;
      }
      for (let i = y; i < y + size; i++) {
        positionsToCheck.push({ x, y: i });
      }
    } else {
      return false;
    }

    // Check if positions are empty before placing the ship
    for (const pos of positionsToCheck) {
      if (!this.isPositionEmpty(pos)) {
        return false;
      }
    }

    // All checks passed, place the ship
    for (const pos of positionsToCheck) {
      this.grid[pos.x][pos.y] = true;
    }
    return true;
  }

  receiveAttack(position) {
    if (!this.isValidPosition(position)) {
      return false;
    }

    const { x, y } = position;
    if (this.grid[x][y]) {
      return true; // It's a hit!
    } else {
      return false; // It's a miss.
    }
  }
}

module.exports = Board;