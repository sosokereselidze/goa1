function mergeArraysOfObjects(arrays) {
    return arrays.reduce((mergedArray, currentArray) => mergedArray.concat(currentArray), []);
}