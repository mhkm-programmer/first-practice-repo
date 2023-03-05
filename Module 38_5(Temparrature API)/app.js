const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?"  // Main weather data URL
const API_KEY = "appid=b741fcea80de563ff8472ae42d2b29fb";  // API key
let fetchData  //reserve data for future requests

// fetch weather api data
const loadWeather = (city) => {
    fetch(`${BASE_URL}${API_KEY}&q=${city}&units=metric`)
    .then(response => response.json())
    .then(data =>{
        // console.log(data);  
        displayData(data);
        fetchData = data;
    });
  
};

// Reuseable Function......for inner text
const setInnerText = (id,text)=>{
    const cityName = document.getElementById(id);
    cityName.innerText = text;
}

// // Reuseable Function......for inner HTML
// const setInnerHTML = (id,text)=>{
//     const cityName = document.getElementById(id);
//     cityName.innerHTML = text;
// }



//Inner Text.....
const displayData = (data)=>{
    setInnerText('showTemp', data.name);
    setInnerText('temp', data.main.temp);
}

// Search button and Bar connect with api.....
document.getElementById('search').addEventListener("click", function(){
    const searchField = document.querySelector("#searchInput");
    const city = searchField.value;
    city.value = "";
    loadWeather(city);

})

loadWeather('macca'); //Call the function