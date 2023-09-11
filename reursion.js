function fun1(x){
    console.log("fun1 ~ x",x);

if(x.length>0){
    x.shift();
    fun1(x);
 }
}
// function fun1(x) {
//   console.log("--->", x);
//   if (x >= 0) {
//     fun1(x - 1);
//   }
// }

fun1([9 ,1,2,3,5]);