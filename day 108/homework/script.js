const counterValue = document.getElementById('counter-value');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

let counter = 0;

function updateCounter() {
  counterValue.textContent = counter;
}

incrementButton.addEventListener('click', () => {
  counter++;
  updateCounter();
});

decrementButton.addEventListener('click', () => {
  counter--;
  updateCounter();
});

resetButton.addEventListener('click', () => {
  counter = 0;
  updateCounter();
});

updateCounter();
