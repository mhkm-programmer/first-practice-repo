const shoppingCart =[
    {name: 'shoe', price: 2000,},
    {name: 'shirt', price: 200,},
    {name: 'pant', price: 2000,},
    {name: 'bag', price: 2020,},
    {name: 'belt', price: 2900,}
];

function totalCoast(products) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        const element = products[i];
        total += element.price;
    }
       return total; 
    }

    console.log(totalCoast(shoppingCart));
