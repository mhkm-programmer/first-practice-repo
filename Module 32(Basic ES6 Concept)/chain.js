const student = {
    name : 'Rahim Ullah',
    father : 'Karim Ullah',
    school : {
        Class : 'Nine',
        group : 'science',
        friends : {
            name : 'Jonathan',
            address : '121 circullar road',
            floor: '5th Floor',
        },
    },

}

// console.log(student?.school?.friends?.address);

const data = {
    count : 50000,
    data : ['student', 'salam', {name: 'kabir', address: '121 circullar road',
            group: [12, 45, 78, 98, 74], country: {
                bd:'Bangladesh', in : 'India', usa: 'United States of America'
            }
        }

    ]
};

console.log(data?.data[2]?.country?.usa);