let students = {

    name:"Vedant",
    age:20,
    marks:[
        {
            subject:"Maths",
            score: 99
        },{
            subject:"Science",
            score: 98
        },{
            subject:"English",
            score: 97
        }
    ],
    calculatePercentage:function (){
        let sum = 0;
        for(let i=0; i<this.marks.length; i++){
            sum = sum+this.marks[i].score;
        }
        console.log("Percentage = "+ sum/this.marks.length);
    }
};
console.log(students.name);
students.calculatePercentage();

