const student = {
    name: 'John Doe',
    age: 30,
    address: '123 Main Street',
    friends: ['Apu', 'john', 'kabir', 'Mona'],
    car:{
        color:'red',
        price: 1000
    },
    movies:[{name: 'no. 1', year: 2000},{name: 'no. 2', year:2020}],
    act:function(){
        console.log('BD Best actor');
    },
}

student.act();
console.log(student.act);