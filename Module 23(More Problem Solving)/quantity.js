const shoppingCart =[
    {name: 'shoe', price: 2000, quantity: 6},
    {name: 'shirt', price: 200, quantity: 10},
    {name: 'pant', price: 2000, quantity: 2},
    {name: 'bag', price: 2020, quantity: 3},
    
];

function totalCoast(products) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        const element = products[i];
        const productTotal = element.price * element.quantity;
        total += productTotal;
    }
       return total
    }

    console.log(totalCoast(shoppingCart));
