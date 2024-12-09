const errorFirstCallback = (err, data) => {
    if (err) {
      console.log(`Error: ${err.message}`);
    } else {
      console.log(`You chose the color: ${data}`);
    }
  };
  
  const filterChoice = (input, callback) => {
    const choices = ["red", "blue", "green", "yellow", "purple"];
    
    if (!choices.includes(input.trim().toLowerCase())) {
      const err = new Error("Invalid choice! Please choose: red, blue, green, yellow, purple.");
      callback(err, input);
    } else {
      callback(null, input);
    }
  };
  
  console.log("choose: red, blue, green, yellow, purple");
  
  process.stdin.on("data", (buffer) => {
    try {
      const choice = buffer.toString().trim();
      filterChoice(choice, errorFirstCallback);
    } catch (err) {
      console.log(`Unexpected error: ${err.message}`);
    }
  });
  
