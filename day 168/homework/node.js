import os from "os";
const os = require('os');

console.log("Command-line Arguments:");
console.log(process.argv);

console.log("\nCurrent Working Directory:");
console.log(process.cwd());

console.log("\nSystem Information:");
console.log("OS Type:", os.type());
console.log("Platform:", os.platform());

console.log("\nMemory Usage:");
console.log(process.memoryUsage());

console.log("\nEnvironment Variables:");
console.log(process.env);

console.log("\nMemory Info:");
console.log("Total Memory:", os.totalmem(), "bytes");
console.log("Free Memory:", os.freemem(), "bytes");

console.log("\nNode.js Version:");
console.log(process.version);

console.log("\nScript Execution Path:");
console.log(process.argv[1]);


console.log("\nCPU Architecture:");
console.log(os.arch());

console.log("\nUptime Info:");
console.log("System Uptime:", os.uptime(), "seconds");
console.log("Process Uptime:", process.uptime(), "seconds");
