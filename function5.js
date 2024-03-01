
function test(a,b){
    return a+b ;
}

let sum = test(10,20);

console.log(sum);

//---------------------------------------------------

// In the above example we returned addition, here we can also return the function

// from one function we can return another function

// function math (a,b){

//         function sum(){
//                 console.log(a+b);
//          }
//  return sum;

// }

// let output = math(105,65);

// output ();

//---------------------------------------------

// shortcut 

function math (a,b){

    return function(){
            console.log(a+b);
     }
 
}
let output = math(105,65);

output ();