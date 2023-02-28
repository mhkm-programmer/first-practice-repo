const student = {
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

const result1 = student.exam();
const result2 = student.improveExam('array');
const result3 = student.treatEvents(468,50);
const result4 = student.smallTreat(200,50);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);