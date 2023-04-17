const prompt = require("prompt-sync")();

let age = prompt("What is your age  :  ");
if(age>=20 && age<=30){
    console.log("You are an Adult ");
}
else{
    console.log("You are not an Adult ");
}