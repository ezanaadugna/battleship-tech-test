const Ship = require('../src/Ship');

describe('Ship class', () => {
  let ship;

  beforeEach(() => {
    ship = new Ship(3); // Create a ship with size 3 for testing
  });

  test('hit() should update the ship state if the position is hit', () => {
    expect(ship.isSunk()).toBe(false);

    ship.hit({ x: 0, y: 0 });
    expect(ship.hits.has({ x: 0, y: 0 })).toBe(true);
    expect(ship.isSunk()).toBe(false);

    ship.hit({ x: 0, y: 1 });
    expect(ship.hits.has({ x: 0, y: 1 })).toBe(true);
    expect(ship.isSunk()).toBe(false);

    ship.hit({ x: 0, y: 2 });
    expect(ship.hits.has({ x: 0, y: 2 })).toBe(true);
    expect(ship.isSunk()).toBe(true);
  });

  test('hit() should not update the ship state if the position is invalid', () => {
    expect(ship.isSunk()).toBe(false);

    ship.hit({ x: 1, y: 0 });
    expect(ship.hits.has({ x: 1, y: 0 })).toBe(false);
    expect(ship.isSunk()).toBe(false);

    ship.hit({ x: 0, y: 3 });
    expect(ship.hits.has({ x: 0, y: 3 })).toBe(false);
    expect(ship.isSunk()).toBe(false);
  });

  test('isSunk() should return true if the ship is sunk', () => {
    expect(ship.isSunk()).toBe(false);

    ship.hit({ x: 0, y: 0 });
    expect(ship.isSunk()).toBe(false);

    ship.hit({ x: 0, y: 1 });
    expect(ship.isSunk()).toBe(false);

    ship.hit({ x: 0, y: 2 });
    expect(ship.isSunk()).toBe(true);
  });

  test('isSunk() should return false if the ship is not sunk', () => {
    expect(ship.isSunk()).toBe(false);

    ship.hit({ x: 0, y: 0 });
    expect(ship.isSunk()).toBe(false);

    ship.hit({ x: 0, y: 1 });
    expect(ship.isSunk()).toBe(false);
  });
});