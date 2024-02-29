
let cricketer = {
    firstName:"Kapil",
    lastName:"Dev",
    age:55,
    phoneNumber: [9876543210, 1236549870, 8523697410],
    matches:[
        {
            type:"Test Match",
            year: 2011,
            role:"Captain"
        },{
            type:"One Day",
            year: 2010,
            role:"Kipper"

        },{
            type:"IPL",
            year: 2012,
            role:"Baller"

        }
    ]
};
console.log(cricketer.firstName);
for(let i=0; i<cricketer.matches.length; i++){
    console.log(cricketer.matches[i].type);
    console.log(cricketer.matches[i].year);
    console.log(cricketer.matches[i].role);
    console.log("===============================================");
}