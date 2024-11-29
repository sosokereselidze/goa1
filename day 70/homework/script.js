function randomElement(array) {
    if (array.length === 0) return undefined;
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
  
const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'brown', 'black', 'pink'];
console.log("Random color:", randomElement(colors));