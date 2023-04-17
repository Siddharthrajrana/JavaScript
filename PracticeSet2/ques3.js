const prompt = require("prompt-sync")();
let age = prompt("Enter your age : ");
console.log(typeof age)
age = Number(age)
console.log(typeof age )