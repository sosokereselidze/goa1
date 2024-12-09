// 1. alloc()

// const buffer1 = Buffer.alloc(10, 112);
// console.log(buffer1.toString());

// console.log(5 * "l")

// buffer1[0] = 105;

// const multiString = (char, num) => {
//     const result = Buffer.alloc(5);
//     for (let i = 0; i < num; i++){
//         result[i] = char.charCodAt(0);
//     }

//     return result.toString();
// }

// console.log(multiString("k", 5));




// 2. .from()

// const buffer2 = Buffer.from("Hello")
// console.log(buffer2);


// 3. 

// const joinBuff = [strBuffer1, strBuffer2];
// console.log(Buffer.concat([joinBuff])



// fs

// const fs = require("fs");
// fs.readFile("data.text", "utf8", (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     } else{
//         console.log("file content:", data)
//     }
// })

// process.stdin.on("data", (data) => {
//     const input = data.toString().trim();

//     if (input === "exit"){
//         process.exit();
//     }

//     fs.appendFile("data.txt" `\n${input}`, (err) => {
//         if(err) console.error("error writing file:", err);
//         else console.log("file saved successfully")
// });
// });

// const fs = require('fs');
// const readline = require('readline');

// // Create a readline interface for user input
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     prompt: 'enter text: '
// });

// const fileName = 'data.txt';

// rl.prompt();

// rl.on('line', (input) => {
//     if (input.trim().toLowerCase() === 'exit') {
//         console.log('program is closed');
//         rl.close();
//     } else {
//         fs.appendFile(fileName, input + '\n', (err) => {
//             if (err) {
//                 console.error('Error writing to file:', err);
//             } else {
//                 console.log(`Saved: "${input}"`);
//             }
//         });
//         rl.prompt();
//     }
// });

// rl.on('close', () => {
//     console.log('program terminated.');
// });


const fs = require("fs");

process.stdin.on("data", (chunk) => {
  const input = chunk.toString().trim();

  if (input === "exit"){ 
    process.exit();
  }

  fs.appendFile("data.txt", `\n${input}`, (err) => {
    if (err) console.error("Error writing file:", err);
    else console.log("File saved successfully");
  });
});