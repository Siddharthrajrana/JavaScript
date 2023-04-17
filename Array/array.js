let arr = [1 , 2 , "Aeiou"]
arr.push(40)

for (let i in arr){
    console.log(arr[i])
}
console.log("Poped is "+arr.pop())

for (let i in arr){
    console.log(arr[i])
}

console.log(arr)

let num =[1,2,3,4,5]

num.forEach((element)=>{
    console.log(element*element)
})

//convert to array 
let name = "Siddharth"
let ne = Array.from(name)
console.log(ne)


//shorting in array 
const compare=(a,b)=>{
    return b-a
}
console.log(num.sort(compare))

//splice 

let array1 = [35 , 87 ,98,78,74,85,7,4,79,4,7,45]
//2 se start kro 3 elenent remove kro baaki 102054 4879 65478 22512 add krr doo
array1.splice(2,3,102054,4879,65478,22512)
console.log(array1)

