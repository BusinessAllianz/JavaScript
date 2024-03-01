
function fun(f){
    f();
}
// function new1(){
//     console.log("I am a new function");
// }

// fun(new1);

//---------------------------------------------------------------------

// there is one more shortcut

// fun(function new1(){
//     console.log("I am a new function");   // here we are writting function as argument
// });

//--------------------------------------------------------------


fun(function (){
    console.log("I am a new function");   // here we are writting function as argument
});

// actual behind process

// f = function (){
//     console.log("I am a new function");   
// }

