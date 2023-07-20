const { getPlayerInput, displayMessage } = require('./UI');

function showShipSelectionMenu() {
  displayMessage("Welcome to Ship Selection Menu!");
  displayMessage("Choose ship sizes from the menu below:");

  const availableSizes = [2, 3, 4, 5];
  let selectedSizes = [];

  while (selectedSizes.length < 3) {
    displayMessage(`Available Sizes: ${availableSizes.join(', ')}`);
    const selectedSize = getPlayerInput(`Select Size ${selectedSizes.length + 1}: `);

    if (availableSizes.includes(Number(selectedSize))) {
      selectedSizes.push(Number(selectedSize));
      const indexToRemove = availableSizes.indexOf(Number(selectedSize));
      availableSizes.splice(indexToRemove, 1);
    } else {
      displayMessage("Invalid selection. Please choose from the available sizes.");
    }
  }

  return selectedSizes;
}

module.exports = { showShipSelectionMenu };
