
// funtion declaration

function add(a, b) {
    return a + b;
}
console.log(" add = ", add(11, 33));

//funtion expression
const sum = function (a, b) {
    return a + b;
}
console.log("sum =", sum(12, 34));


// very simple and concise syntax

const add1 = (a, b) => a * b;

console.log(add1(12, 10));

/// arguments

function findMaxNumber(){
    console.log(arguments);
    return Math.max(...arguments);
}
findMaxNumber(5,77,55,3);

// no own this use in normal function

// const user ={
//     username : "shubham",
//     getUserName: function(){
//         return  this.username;
//     },
// };

//  const getName= user .getUserName;
//  console.log(getName())//undefined
//  console.log(user.getUserName());//shubham

  //no own this use in arrow function

const user2 ={
    username : "shubham",
    getUserName: () =>{
        return  this.username;
        // here this refers to window object instead of user object
    },
};

 const getName2= user2 .getUserName;
 console.log(getName2())//undefined
 console.log(user2.getUserName());//undefined

