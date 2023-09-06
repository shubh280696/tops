
// //   Map(); function
// const arr =[1,2,3,4,5,6];
// const mapped= arr.map(Element=>Element+30);
// console.log(mapped);//31,32,33,34,35,36

// // -------------------,<Filter()-------------
// const arr2 =[1,2,3,4,5,6,8,10,12];
// const filtered = arr2.filter(Element=> Element==2 || Element==4);
// console.log(filtered);

// // --------------------concat-------

// const are1 =[ "a","b","c"];
// const  are2 =["d","e","f"];
// console.log(are1.concat(are2));
// console.log(are1);
// console.log(are2);

// ---------------- push----------
//   let arry = [10,20,30,40,50,60];
//   arry.push(10);
//   console.log("🚀 ~ file: array-method.js:24 ~ arry:", arry)




// ---------------class practice------------------

let arr = [1, 2, 3, 4, 5, 6, 7, 10, 9, 100]
console.log(" arr:", arr)

// push(...items) – adds items to the end,
arr.push(100)
console.log("🚀 ~ file: array-method.js:35 ~ arr:", arr)
// pop() – extracts an item from the end,
arr.pop()
console.log("🚀 ~ file: array-method.js:38 ~ arr:", arr)
// shift() – extracts an item from the beginning,
arr.shift()
console.log("🚀 ~ file: array-method.js:41 ~ arr:", arr)
// unshift(...items) – adds items to the beginning.
arr.unshift(0)
console.log("🚀 ~ file: array-method.js:44 ~ arr:", arr)

// concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.
//  a2 = arr.concat(a2,  "test")
//  console.log("🚀 ~ file: array-method.js:48 ~ a3:", a3)

// reverse() – reverses the array in-place, then returns it.
//  arr.reverse()
console.log("🚀 ~ file: array.js:23 ~ arr:", arr)

// sort(func) – sorts the array in-place, then returns it.
let sarr = [9, 8, 7, 6, 5, 4, 3, 2, 1]
sarr.sort();
console.log("🚀 ~ file: array-method.js:57 ~ sarr:", sarr)


// indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.
let index = arr.indexOf(7)
let index2 = arr.lastIndexOf(10)
console.log("🚀 ~ file: array.js:34 ~ index2:", index2)
console.log("🚀 ~ file: array.js:33 ~ index:", index)

// includes(value) – returns true if the array has value, otherwise false.
let inc = arr.includes(7)
console.log("🚀 ~ file: array.js:38 ~ inc:", inc)

/// fill()

const arr1 = new Array(4);
console.log("🚀 ~ file: array-method.js:73 ~ arr1:", arr1)//[empty,]
console.log(arr1.fill(10));

// foreach

arr.forEach(Element => {
    console.log(Element);
})