const names = ['johndoe', 'roni', 'johndoe', 'roni', 'karoon'];

function remoteDuplicate(names) {
    const uniqueNames = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (uniqueNames.indexOf(name) === -1) {
            uniqueNames.push(name);
        }
        
    }
    return uniqueNames
}

console.log(remoteDuplicate(names));