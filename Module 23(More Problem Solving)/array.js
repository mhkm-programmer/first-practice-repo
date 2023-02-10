const friendship = ['john', 'fred', 'yallina', 'palss'];

console.log(typeof friendship);
console.log(Array.isArray(friendship));

console.log(friendship.includes('john'));

const newFriendship = ['john', 'fred', 'yallina', 'palss'];

const allFriend = newFriendship.concat(friendship);

console.log(allFriend);