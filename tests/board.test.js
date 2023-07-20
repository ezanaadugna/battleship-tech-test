const Board = require('./Board');

describe('Board class', () => {
  let board;

  beforeEach(() => {
    board = new Board(10);
  });

  test('isValidPosition() should return true if position is within the boundaries', () => {
    expect(board.isValidPosition({ x: 5, y: 5 })).toBe(true);
  });

  test('isValidPosition() should return false if position is outside the boundaries', () => {
    expect(board.isValidPosition({ x: -1, y: 5 })).toBe(false);
    expect(board.isValidPosition({ x: 10, y: 5 })).toBe(false);
    expect(board.isValidPosition({ x: 5, y: -1 })).toBe(false);
    expect(board.isValidPosition({ x: 5, y: 10 })).toBe(false);
  });

  test('isPositionEmpty() should return true if the position is empty', () => {
    expect(board.isPositionEmpty({ x: 5, y: 5 })).toBe(true);
  });

  test('isPositionEmpty() should return false if the position is not empty', () => {
    const ship = { size: 3, position: { x: 3, y: 3 }, direction: 'horizontal' };
    board.placeShip(ship, { x: 3, y: 3 }, 'horizontal');
    expect(board.isPositionEmpty({ x: 3, y: 3 })).toBe(false);
    expect(board.isPositionEmpty({ x: 3, y: 4 })).toBe(false);
    expect(board.isPositionEmpty({ x: 3, y: 5 })).toBe(false);
  });

  test('placeShip() should place the ship on the board and update the grid', () => {
    const ship = { size: 3, position: { x: 5, y: 5 }, direction: 'horizontal' };
    board.placeShip(ship, { x: 5, y: 5 }, 'horizontal');
    expect(board.isPositionEmpty({ x: 5, y: 5 })).toBe(false);
    expect(board.isPositionEmpty({ x: 5, y: 6 })).toBe(false);
    expect(board.isPositionEmpty({ x: 5, y: 7 })).toBe(false);
  });

  test('receiveAttack() should return true if the attack hits the ship', () => {
    const ship = { size: 3, position: { x: 5, y: 5 }, direction: 'horizontal' };
    board.placeShip(ship, { x: 5, y: 5 }, 'horizontal');
    expect(board.receiveAttack({ x: 5, y: 5 })).toBe(true);
    expect(board.receiveAttack({ x: 5, y: 6 })).toBe(true);
    expect(board.receiveAttack({ x: 5, y: 7 })).toBe(true);
  });

  test('receiveAttack() should return false if the attack misses the ship', () => {
    const ship = { size: 3, position: { x: 5, y: 5 }, direction: 'horizontal' };
    board.placeShip(ship, { x: 5, y: 5 }, 'horizontal');
    expect(board.receiveAttack({ x: 1, y: 1 })).toBe(false);
    expect(board.receiveAttack({ x: 6, y: 6 })).toBe(false);
    expect(board.receiveAttack({ x: 9, y: 9 })).toBe(false);
  });
});
