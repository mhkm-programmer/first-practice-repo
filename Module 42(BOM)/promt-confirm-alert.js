// Define alert in browser window
const showAlert = () => {
    alert('Check your browser and internet connection')
};
// Define confirm  in browser window
const showConfirm = () => {
    const result = confirm('Check your browser and internet connection');
    if (result === true) {
        alert('Restart then Reset your browser and router')
    } else {
        alert ('Please patience, now internal connectivity is error when active it update you!!!!!');
    }
}; 

// Define prompt in windows  browser

const getInfo = () => {
    const name = prompt('Enter your name:');
    if (name === null || name === '' || name === undefined) {
        alert ('Required correct name');
    } else {
        console.log(name, "Welcome to the site!!!!!");
    }
}


document.cookie.split('; ').map(c => {
    const parts = c.split('=') 
    console.log(`name:${parts[0]} value:${parts[1]}`)
})