let pendingPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("-----done------>");
    }, 5000);
  });
  
  let x = pendingPromise;
  console.log("🚀 ~ file: promise2.js:34 ~ x:", x);
  
//   function fun(params) {
//     return new Promise((resolve, reject) => {
  
//     })
 // }