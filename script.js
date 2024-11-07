document.addEventListener('DOMContentLoaded', () => {
  let currentElement = document.querySelector('#level'); // Use `let` to allow reassignment
  let level = 0;
  while (currentElement) {
    level++;
    currentElement = currentElement.parentElement; // Reassign the `currentElement` to its parent
  }

  alert(`The level of the element is: ${level}`);
});
