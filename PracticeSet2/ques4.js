const prompt = require("prompt-sync")();
let x = prompt("Enter a number ");
x = Number(x);

if(x%2==0&&x%3==0){
    console.log(x+" is divisible by 2 and 3");
}
else{
    console.log(x+" is not divisible by 2 and 3");
}