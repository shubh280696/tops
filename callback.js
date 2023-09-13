function printName(callBack) {
    setTimeout(() => {
      console.log("shubh ");
      callBack();
    }, 5000);
  }
  // callback
  function printsurName(params) {
    setTimeout(() => {
        console.log("chaudhari ");
        
      }, 5000);
    }
  

  printName(printsurName);
  // printsurName()

//   ----------------------call back

// // function
// function greet(name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback();
// }

// // callback function
// function callMe() {
//     console.log('I am callback function');
// }

// // passing function as an argument
// greet('Peter', callMe);

