const phones = [
    { name: 'Samsung', type: 'phone', storage: '120gb', price:36000, color: 'white' },
    { name: 'Nokia', type: 'phone', storage: '20gb', price:25000, color: 'white' },
    { name: 'Walton', type: 'phone', storage: '10gb', price:20000, color: 'white' },
    { name: 'Apple', type: 'phone', storage: '220gb', price:136000, color: 'white' },
    { name: 'Xaomi', type: 'phone', storage: '50gb', price:32000, color: 'white' },
]

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const element = phones[i];
        if (element.price < cheapest.price) {
            cheapest = element;
        }
        
    }
    return cheapest;
}

console.log(cheapestPhone(phones));