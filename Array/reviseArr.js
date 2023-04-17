let marks = [10 ,20,"Name" , true , 30]

for(let i in marks){
    console.log(marks[i])
}

console.log("Lenght of the array is "+marks.length)

let num = [1,2,3,4,5,6]
let s = num.toString()
//this is array 
console.log(num)

//this is string 

console.log(s)

console.log(num.join("_  "))

console.log("Push returns the length of the new Array : "+num.push(56))

console.log("This is used to delete from the front of the array "+num.shift())

console.log("Pop is used to delete from the back "+num.pop())

console.log("unshift will add at the beginning of the array "+num.unshift(56))

let arr1 = [11,12,13,14,15,16]

//though the element will be deleted but the lenght of the array will not change 

delete arr1[0]

console.log(arr1)
arr1.unshift(11)
let arr2 = [21,22,23,24,25,26]
let arr3 = [31,32,33,34,135,236]

let new_arr = arr1.concat(arr2,arr3)
console.log(new_arr)

console.log("Note the sorting is done here is Alphabetically "+arr3.sort())