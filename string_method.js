let str = "HEllO WOrld"

console.log(" str:", str)
/*
// concat()	It provides a combination of two or more strings.
let st = "----"
let newStr = str.concat(" test", st)
console.log("newStr:", newStr)


// indexOf()	It provides the position of a char value present in the given string.
let index = str.indexOf("h")
console.log("index:", index)


// replace()	It replaces a given string with the specified replacement.

let newStr1 = str.replace("H", "my")
console.log("newStr:", newStr1)


// substr()	It is used to fetch the part of the given string on the basis of the specified starting position and length.
  sts ="shubham"
let x1 = sts.substr(0, 5)
console.log("x:", x1)

// substring()	It is used to fetch the part of the given string on the basis of the specified index.

let x2 = str.substring(0, 7)
console.log(" x2:", x2)
// slice()	It is used to fetch the part of the given string. It allows us to assign positive as well negative index.

let x3 = str.slice(0,-1)
console.log("🚀 x3:", x3)
// toLowerCase()	It converts the given string into lowercase letter.
let x4 = str.toLowerCase()
console.log("🚀 ~ file: string_method.js:37 ~ x4:", x4)
// toUpperCase()	It converts the given string into uppercase letter.
let x5 = str.toUpperCase()
console.log("🚀  x5:", x5)
*/
// toString()	It provides a string representing the particular object.
let num = 20
let y = [1,23,3]
console.log("🚀 number",typeof y.to)
console.log("number", typeof num.toString())
console.log("number", typeof { name: "Urvish" }.toString())

// split()	It splits a string into substring array, then returns that newly created array.

let xs = str.split("Wo")
console.log("🚀 ~ file: string_method.js:52 ~ xs:", xs)


// trim()	It trims the white space from the left and right side of the string.
let stp = "    hello    world    "
let s = stp.trim()
console.log("🚀 ~ file: string_method.js:58 ~ stp:", stp)
console.log("🚀 ~ file: string_method.js:58 ~ s:", s)

/*
*/


// console.log(" [1,2,3]===[1,2,3]:", [1, 2, 3] === [1, 2, 3])

// let email = []
// email[0] = "Uv@gmail.com".toLowerCase()
// console.log(" email:", email)
// let matchData = email.find((e) => {
//     return e === "uv@gmail.com".toLowerCase()
// })
// console.log("matchData:", matchData)