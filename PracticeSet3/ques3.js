const prompt = require("prompt-sync")(); 
let y =20
while(true){
    let x =Number(prompt("Guess the number : "))
    if(x==y) {
        console.log("You Win")
        break;
    }
}