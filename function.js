// function f1(x,y){
//     console.log("x,y:",x,y);

// }
// f1("shubh" ,"shiv");
// f1(20,true,{},[]);
// f1(10,20);
// f1(100,200);

// function fun1() {

//     return [{ name: "shubh" }];
// }

// let num = fun1()

// console.log(num);

// function narmal(){
//     return "shubham";
// }

// let st= narmal();
// console.log(st);

// -----normalfunction-----

// function multiply(num1, num2) {
//     const result = num1 * num2
//     return result
   
//   }

//   multiply(10,20);
  

//   function print() {
//     console.log()
//   }
  
//   print("hell0",400,false ,87, 56);
//   print("hell0",400,false ,87);

// example normal function 
let user = {   
    show(){
        console.log(arguments);
    }
};
user.show(1, 2, 3);


//   fat aarowfuntion


  

//    function declaration

//   function calcRectArea(width, height ,area) {
//     return width + height *area ;
//   }
  
//   console.log(calcRectArea(5, 6 ,10));
  
  

// ----this key word----

let user1 = {
    name: "GFG",
    gfg1:() => {
        console.log("hello  shubham " + this.name); // no 'this' binding here
    },
    gfg2(){   
        console.log("Welcome to goa " + this.name); // 'this' binding works here
    }
};
user1.gfg1();
user1.gfg2();

 