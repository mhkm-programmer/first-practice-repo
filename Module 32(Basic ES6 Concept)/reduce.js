numbers = [45, 12, 56, 87, 23, 45, 65, 87, 21, 3, 21];

const total = numbers.reduce((pre, cur) => pre + cur, 0);

console.log(total);

const student = {
  name: "Rahim Ullah",
  father: "Karim Ullah",
  school: {
    Class: "Nine",
    group: "science",
    friends: {
      name: "Jonathan",
      address: "121 circullar road",
      floor: "5th Floor",
    },
  },
};



const output1 = student.school.friends.floor; //Access by notation

const positions = 'floor';

const output2 = student.school.friends[positions];/// Access by bracket

console.log(output2);
