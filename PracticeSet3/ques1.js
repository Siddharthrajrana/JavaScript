const obj ={
    raman : 30 ,
    mohan : 40,
    shyam : 82,
    rohan : 65

}

const printObj=(obj)=>{
    console.log("Name  Marks")
    for (let i in obj ){
        console.log(i+"   "+obj[i])
    }

}
printObj(obj);