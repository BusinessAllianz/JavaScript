// let person = {};
// console.log(person);
// console.log(typeof person);
// console.log(typeof {});

// typeof - is a operator, we can pass value or variable as i/p it will return data type as an o/p

let address = {
    line1:"Neo City",
    line2:"Wagholi",    // Hoisting 
    city:"Pune",
    pincode:412207
};

let person_info = {
    firstName :"Ganesh",
    lastName : "Pandit",
    age :24,
    gender : "Male",
    address : address
};



console.log(person_info.address.city);

