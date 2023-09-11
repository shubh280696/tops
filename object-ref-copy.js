

let obj1 = {
    name: "urvish",
    age: 24,
  };
  let obj3 = {};
  let obj2 = obj1;
  console.log("obj2:", obj2.age);

for (const key in obj1) {
    console.log("key:", obj1[key])
    obj3[key] = obj1[key]
}
let x = {
    a: 20,
    b: 40
}
let key = "b"
let y = {}
x.key
y[key] = x[key]
x.a = 10000
console.log("🚀 ~ file: object-ref-copy.js:31 ~ y:", y)
console.log("x.key:", x[key])


let a1 = [1, 2, 3];
let a2 = a1;
let a3 = [...a1, ...a1, 111000];
let a4 =[11,22,33,45,5,555]
console.log("a1:", a1);
console.log("a2:", a2);
a1[2] = 3000;
console.log("a2:", a2);
console.log("a3:", a3);

Math.max(...a4);
console.log(" math.max(..a1):",Math.max(...a4));
console.log(" math.max(..a1):",Math.max(...a3));

// -------------------------

let test = { a: 1000 };
obj3 = { ...obj1, add: "surat", ...test };

obj1.age = 50;
console.log("obj2:", obj2);
console.log("obj3:", obj3);
