const johnAli = {
    name: 'John Smith',
    money: 5000,
    study: 'CSE',
    subjects: ['array', 'object', 'string'],
    exam: function() {
        return this.name + ' ' + 'is joining the exam';
    },
    improveExam: function(subjects){
        return `${this.name} is joining the exam ${this.subjects}`;
    },
    treatEvents: function(amount, tips){
        this.money = this.money - amount - tips;
        return this.money;
    },
    smallTreat: function(amount, tips){
        this.money = this.money - amount - tips;
        return this.money;
    },
}

const rohanAli = {
    name:'Rohan Ali',
    money: 10000

}

// Define how to use one object pro to another object

//call method
const result1 = johnAli.exam.call(rohanAli);
console.log(result1);
//call method
const result2 = johnAli.treatEvents.call(rohanAli, 5000, 100);
console.log(result2);
//apply method
const result3 = johnAli.treatEvents.apply(rohanAli, [1000, 100]);
console.log(result3);
//bind method
const result4 = johnAli.treatEvents.bind(rohanAli);
const output4 = result4(1000,100);
console.log(output4);


const obj ={a:1, b:7, c:3, length:2};
console.log(Object.keys(obj).length);

const obj1= {module: 35, video:2}; 
const obj2= {module: 35, video:2};
console.log(obj1 === obj2);

const getGirlFriend= (name = "chokina")=>"name"; 
console.log(getGirlFriend()); 