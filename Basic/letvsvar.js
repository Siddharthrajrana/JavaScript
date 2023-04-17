var a =65 ;
{
    var a = 45;
    console.log(a);
}
console.log(a);

//var is not block scoped while let is globally scoped 

let b = "Global";
{
    let b="Local";
    console.log(b)
}

console.log(b);

//Constant is not reassigned value is not chsnged ... 

const z="Constant";


console.log(z);