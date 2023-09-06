let obj ={
    name:"shubh",
    age:80
}

let arr=[]
for(const key in obj){
    console.log("hello : ",obj[key])
    arr.push(key)
}
// acces value
let value = Object.values(obj)
console.log("🚀 ~ file: object.js:13 ~ value:", value)

//   accces keys
let keys = Object.keys(obj)
 console.log("🚀 ~ file: object.js:17 ~ keys:", keys)

 // acces entries
 let ent = Object.entries(obj)
 console.log("🚀 ~ file: object.js:22 ~ ent:", ent)

 // important 

 let o ={
    a:{a2: 30},b:90,c:70
 }
 let x="a"

 console.log("----->",o[x].a2);
 

