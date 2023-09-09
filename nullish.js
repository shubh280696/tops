// || returns the first truthy value.
// ?? returns the first defined value.


// let x = 0 || false || 200 // null/undefined/0/false
let x = 0 || 100 // null/undefined/0/false//100
console.log("x:", x)

let y1 = false ??100  // null/undefined// false
let y2 = 100 ?? false // null/undefined// 100
console.log("y:", y1)
console.log("🚀y2:", y2)