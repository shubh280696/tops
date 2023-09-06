// == / ===
console.log("2" == 2);
console.log("true" == true);
console.log("[1,2]" == [1, 2]);
console.log("2" === 2);
//!== "t"!=="t"
//!=

 
let x = 5;
if (x === 5) {
  console.log("true");
  console.log("true+1");
} else {
  console.log("false");
}

x === 5 ? console.log("true") : console.log("false");
let m = () => {};
console.log(typeof m);

if (x === 5) {
  console.log("------5");
}
if (x === 5) {
  console.log("------6");
}
if (x === 7) {
  console.log("------7");
}
if (x === 7) {
  console.log("------7");
}

if (x === 5) {
  console.log("------5");
} else if (x === 5) {
  console.log("------6");
} else if (x === 7) {
  console.log("------7");
} else if (x === 7) {
  console.log("------7");
}