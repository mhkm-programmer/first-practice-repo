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

    loadWeather('macca'); //Call the function // Or use onload="fetchCategories()" in HTML body tag....

    //Another searchbar.... Web interface search bar & button
const searchPhone = () => {
    // Start Loader..
    spinner(true);
    const phoneSearchBar = document.getElementById("default-search");
    searchText = phoneSearchBar.value;
    // console.log(phoneSearchBar);
    loadData(searchText); //Dynamic functionality connect with searchBar
  };

  // Search input-field enter press functionality
const input = document.getElementById("default-search");
input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    document.getElementById("inputSearch").click();
  }

});

  // Loading or Spinner  the search setup....

  const spinner = (isLoading) => {
  const loading = document.getElementById("loader");
  if (isLoading) {
    loading.classList.remove("hidden");
  } else {
    loading.classList.add("hidden");
  }
  };


//***Specially spinner or loading setup in API fetch; //get the data from API//
const serachAllData = (id) => {
    const inputElement = document.getElementById("search-value");
    document.getElementById("single-player-details").innerHTML = "";
    document.getElementById("male").classList.add("d-none");
    document.getElementById("female").classList.add("d-none");
    const inputValue = inputElement.value;
    document.getElementById("spinner").classList.remove("d-none");
    const serchId = id || inputValue;
    const URL = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${serchId}`;
    console.log(URL);
  
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        document.getElementById("spinner").classList.add("d-none");
        showPlayerData(data.player);
      });
  };

  // get all data and pass all data using slice to show in the UI when click See All button
const showAllDataTogether = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        showAllData(data);
      });
  };

//show the data to UI
const showPlayerData = (players) => {
    document.getElementById("search-value").value = "";
    const container = document.getElementById("player-info");
    container.innerHTML = "";
    players.forEach((player) => {
      // console.log(player);
      const { strThumb, strPlayer, strNationality, idPlayer } = player;
      const div = document.createElement("div");
      div.classList.add("col");
      div.innerHTML = `
    <div class="card">
    <img src="${
      strThumb ? strThumb : "https://picsum.photos/500/300?random=3"
    } "class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${strPlayer}</h5>
      <p class="card-text">Nationality: ${strNationality}</p>
    </div>
    <div class="my-5 mx-3">
    <button onclick="singlePlayer('${idPlayer}')" type="button" class="btn btn-danger">Details</button>
  <button type="button" class="btn btn-primary">Delete</button>
    </div>
  </div>
    
    `;
      container.appendChild(div);
    });
  };
// Dynamic data for single card/ country/ player  etc.....
    const singlePlayer = (id) => {
    const URL = `https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${id}`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => showSinglePlayer(data.players[0]));
    };


// show single player data using dynamic URL and unique id
    const showSinglePlayer = (data) => {
    console.log(data);
    const { strThumb, strPlayer, strDescriptionEN, strGender } = data;
    const container = document.getElementById("single-player-details");
    const div = document.createElement("div");
    if (strGender === "Male") {
      document.getElementById("male").classList.remove("d-none");
    } else {
      document.getElementById("female").classList.remove("d-none");
    }
    container.innerHTML = "";
    div.innerHTML = `
    <div class="card mb-3 w-100 h-100">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${strThumb}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${strPlayer}</h5>
          <p class="card-text">${strDescriptionEN.slice(0, 100) + "...."}</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
    `;
    container.appendChild(div);
    };

  // Another Dynamic data for single card/ country/ player  etc.....
  
    const fetchCategoriesNews = async(category_id, category_name) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    const res = await fetch(url);
    const data = await res.json();
   

    showAllNews(data.data, category_name);
    }

    const showAllNews = (newsCount, newsName) => {

    // console.log(newsCount, newsName);

    document.querySelector('.news-count').innerText = newsCount.length;
    document.querySelector('.news-name').innerText = newsName;
    }

    //Another Single phone details by Modal

    const loadMobileDetails = async (id) => {
    try{
       const response = await fetch(
           `https://openapi.programming-hero.com/api/phone/${id}`
         );
         const data = await response.json();
         phoneDetails(data.data);
    }
    catch{
       e=>{console.log(e);}
    }
     
   };
   
   const phoneDetails = (phone) => {
   //   console.log(phone);
     const {name, mainFeatures,releaseDate } = phone;
     const displayModal = document.getElementById("my-modal-2");
       displayModal.innerHTML ='';
     const div = document.createElement("div");
     div.classList.add("modal-box");
     
     div.innerHTML = `
               <h3 class="font-bold text-lg">${name}</h3>
                   <p class="py-1">Release Date: ${releaseDate ? releaseDate : "No Release Date Found!!"}</p>
                   <p class="py-1">Storage: ${mainFeatures.storage}</p>
                   <p class="py-1">Display Size: ${mainFeatures.displaySize}</p>
                   <p class="py-1">Chicest: ${mainFeatures.chipSet}</p>
                   <p class="py-1">Memory: ${mainFeatures.memory}</p>
                  
                   
                   <div class="modal-action">
                   <a href="#" class="btn">Close</a>
                   </div>
           `;
     displayModal.appendChild(div);
   };

