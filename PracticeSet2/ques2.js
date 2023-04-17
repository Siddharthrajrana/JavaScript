const prompt = require("prompt-sync")();
//defaut it take value in string form 
let age = prompt("Enter your age ")
age = Number(age)
switch(age ){
    case 18:
        console.log("Your age is  18");
        break;
    case 50 :
        console.log("Your age is 50");
        break;
    default :
        console.log("Ok ");
}