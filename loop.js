

// for loop - In advance if you know your end point of termination then go with the for loop
// while loop -  & when we have no idea when we have to stop then go with the while loop
// do while
// forEach
console.log("============For Loop =================");

   let arr = [10,20,30,40,50]; 

   for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

console.log("=========While Loop =================");

   let i = 0;

   while(i<arr.length){
        console.log(arr[i]);
        i++;
   }
 
   console.log("=========== forEach =================");


   arr.forEach( function (data){
        console.log(data);
   }
   );

   console.log("=========== forEach =================");

   function element(vedant){
    console.log(vedant);
   }

   arr.forEach(element);

   console.log("=========== OR =================");

    let fun = function (vedant){
                console.log(vedant);
                 }

   arr.forEach(fun);
