function mapClone(collection, subFunc) {
    if (!Array.isArray(collection)) {
        throw new Error("Input collection must be an array");
    }
    
    const mappedArray = [];
    
    for (let i = 0; i < collection.length; i++) {
        const mappedValue = subFunc(collection[i]);
        if (i % 2 === 0) {
            mappedArray.push(mappedValue * mappedValue);
        } else {
            mappedArray.push(mappedValue);
        }
    }
    
    return mappedArray;
}

const numbers = [1, 2, 3, 4, 5];
const squaredAtEvenIndices = mapClone(numbers, (num) => num);
console.log(squaredAtEvenIndices); // Output: [1, 2, 9, 16, 5]
