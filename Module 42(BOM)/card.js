
//Define BTN and and input field
const productAdd = () =>{
    const productInput = document.getElementById('product'); // define input product field
    const product = productInput.value;
    const  quantityinput = document.getElementById('quantity');// define input quantity field
    const quantity = quantityinput.value;
    productInput.value = '';
    quantityinput.value = '';
    console.log(product, quantity);
    displayProduct(product, quantity);
    saveProductToLocalStorage(product, quantity);
}

//Define dynamic html for display product

const displayProduct =(product, quantity) =>{
    const ul =document.getElementById('ul');
    const li = document.createElement('li');
    li.innerHTML = `${product} ${quantity}`;
    ul.appendChild(li);
}

// Create a list of products that are available for the specified 
const getStoreShoppingCart =() =>{
    let cart = {}; // store to store the cart information 
    const storeCart = localStorage.getItem('cart'); //get the item from local storage
    if (storeCart) {  
        cart = JSON.parse(storeCart); // convert to JSON object and store 
    }
    return cart; // display empty cart
}

// Define save product to local storage
const saveProductToLocalStorage = (product, quantity) =>{
   const cart = getStoreShoppingCart(); // convert cart data calling by function
   cart[product] = quantity; // define quantity
   const cartStringing = JSON.stringify(cart); // convert cart stringing
  localStorage.setItem('cart', cartStringing) // set the cart stringing item in local storage
}

// Define product display from local storage

const displayProductFromLocalStorage = () => {
    const savedCart = getStoreShoppingCart();  // convert cart data calling by function
    for(const product in savedCart){   // display data in local storage to window screen
        const quantity = savedCart[product]; // display quantity data in window screen
        displayProduct(product, quantity) // link with input field and btn to display
    }   
}

displayProductFromLocalStorage(); // call displayProduct from local storage