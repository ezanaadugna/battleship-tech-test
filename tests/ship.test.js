const Ship = require('../src/Ship');

describe('Ship', () => {
  let ship;

  beforeEach(() => {
    ship = new Ship(3); // Create a ship of size 3
  });

  test('should initialize ship properties correctly', () => {
    // Add test cases to check if ship properties are set correctly during initialization
  });

  test('should register hits correctly', () => {
    // Add test cases to check if ship registers hits and sinks when appropriate
  });

  // Add more tests for other methods in the Ship class
});
