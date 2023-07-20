const readlineSync = require('readline-sync');

function displayBoard(board) {
  // Implement code to display the game board using ASCII art
  // Example: visualize board cells, hits, and misses
}

function displayMessage(message) {
  console.log(message);
}

function getPlayerInput(prompt) {
  return readlineSync.question(prompt);
}

module.exports = { displayBoard, displayMessage, getPlayerInput };
