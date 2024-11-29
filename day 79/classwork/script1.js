function manual_map(func, arr) {
    return arr.map(func);
  }
  
  function square(x) {
    return x ** 2;
  }
  
  let originalArray = [1, 2, 3, 4, 5];
  let modifiedArray = manual_map(square, originalArray);
  console.log(modifiedArray);