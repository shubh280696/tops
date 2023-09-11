let obj={
    x:20,
    y:200,
    z:600,
};

//  let x = obj.x;
//  let y = obj.y;
//  let  z = obj.z;

//let { x,z,u,y} = obj;
let arr =[1,2,3,4];


// let [a,b,c]=arr;
// let [a,c,b]=arr;
// console.log("🚀 ~ file: destruring-rest.js:16 ~ a,b,c:", a,b,c)
// console.log("🚀 ~ file: destruring-rest.js:17 ~ a,c,b:", a,c,b)


// rest-----------------------

  let arr1 =[1,2,3,4,5,6,7];

// let [a, ...c,b] =arr;
  let [a,b,...c] = arr1;
  console.log("a,b,...c",a,b, c);

let obj1 = {
    x:20,
    y:200,
    z:600,
};

let { ...shubh } = obj1;
// console.log("🚀 ~ file: destruring-rest.js:36 ~ y:", y)
console.log("🚀 ~ file: destruring-rest.js:30 ~ v, ...shubh:",   shubh)

function fun (a,b,...c){
    console.log("a",a);//1
console.log("b",b)//2
console.log("c",c)//3,4,5,6
}

fun(1,2,3,4,5,6)

// --------------

function returnobj(params) {
    
    return {name:"shubh",age:12,role: 7};
    
}
let {name,...age} = returnobj();

console.log("🚀 ~ file: destruring-rest.js:55 ~ g:", age)
console.log("🚀 ~ file: destruring-rest.js:55 ~ name:", name)

