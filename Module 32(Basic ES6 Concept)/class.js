class TeamMember{
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
}
class Teacher extends TeamMember{
    designation = 'Teacher'
    team = 'ph'
    constructor(name, location){
        super(name, location);
    }
  
    start(time){
        console.log(`Stat time is ${time}`);
    }

    
    end(endTime){
        console.log(`End time is ${endTime}`);
    };
}
   

class Developer extends TeamMember{
    designation = 'Web Developer';
    team = 'Web';
    constructor(name, location){
        super(name, location);
    }
    start(time){
        console.log(`Stat time is ${time}`);
    }

    end(endTime){
        console.log(`End time is ${endTime}`);
    };
}

const john = new Developer('mhkm','Dacca');
john.start('12:00');
john.end('1:00');
// console.log(john);


function min(nums){ 
    return Math.min(nums) 
  }
//   console.log(min( [1,3,2 ]))

  const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
// console.log(output);

const friends = ["Moushumi", "Misha", "Manna", "mimi" , "mahiya"];
console.log();
