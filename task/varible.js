


// -> Want to re-use variable name so which variable declare method should i use

// ------------------------------------------------------------------------------------------

// -> give the list which variable name not works in js
// 1. let a=0 //right
// 2. let "a"=0//wrong
// 3. let 'a'=0//wrong
// 4. let `10`=0//wrong
// 5. let 1=0//wrong
// ------------------------------------------------------------

let x = 100
console.log("🚀 ~ file: varible.js:17 ~ x:", x)
var y = 100
console.log("🚀 ~ file: varible.js:19 ~ y:", y)
// const z = 100
//  const m
{
    x = 90

    y = 90

    z = 90


    console.log(x) //_______90____________ point-x1
    console.log(y) //_________90__________ point-y1
    console.log(z) //___________90________ point-z1
    // console.log(m) //___________________ 
}

console.log(x) //_______90____________ point-x2
console.log(y) //__________90_________ point-y2
console.log(z) //_____________90______ point-z2

// what will print at x1-__100_____
// what will print at y1-_____100__
// what will print at z1-___90____
// what will print at x2-_____90__
// what will print at y2-_______90
// what will print at z2-_______90

//----------------------------------------------------------------------------------------

//> task-2

console.log(x) //__________90_________ point-x2
console.log(y) //____________90_______ point-y2
console.log(z) //______________90_____ point-z2

{
    let x = 100
    var y = 100
    const z = 100
}


console.log(x) //_____90______________ point-x1
console.log(y) //_______100____________ point-y1
console.log(z) //__________90_________ point-z1


// what will print at x1-_______
// what will print at y1-_______
// what will print at z1-_______
// what will print at x2-_______
// what will print at y2-_______
// what will print at z2-_______

// ------------------------------------------------------------------------------------------

// *

