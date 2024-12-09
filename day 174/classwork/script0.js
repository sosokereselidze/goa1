const errorFirstCallback = (err, data) => {
    if(err) {
      console.log(`Error: ${err.message}`);
    } else {
      console.log(`Received data: ${data}`);
    }
  }
  
  
  const filter = (input, callback) => {
    if(input === 0 || isNaN(input)) {
      const err = new Error("Input cannot be zero or cant be NaN");
      callback(err, input);
    } else {
      callback(null, input);
    }
  }
  
  process.stdin.on("data", (buffer) => {
    try {
      const number = parseInt(buffer);
      filter(number, errorFirstCallback);
    } catch(err) {
      console.log(err)
    }
    
  })