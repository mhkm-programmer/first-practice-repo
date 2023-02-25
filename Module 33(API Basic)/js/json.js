const student = {
    first_name: 'Mary',
    last_name: 'Green',
    display_full_name: function(){
        return `${this.first_name} ${this.last_name}`
    }
}

console.log(student);
const studentJASON = JSON.stringify(student);
console.log(studentJASON);
const studentObject = JSON.parse(studentJASON);
console.log(studentObject);