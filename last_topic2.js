

let obj = {

    "0" :"Amey",
    "1" :32,
    "2" :"Delhi",
    "3" : "From India",
    length:4
};

console.log(obj[0]);
console.log(obj[1]);
console.log(obj[2]);
console.log(obj[3]);

console.log(typeof obj);
console.log(obj.length);

obj['length'] = 35;

console.log(obj.length);

console.log("============================================");

let arr = ["Amey",32, "Delhi", "From India"];
console.log(arr[0]);
console.log(arr.length);
arr['length'] = 135;
console.log(arr.length);
console.log(typeof arr);




