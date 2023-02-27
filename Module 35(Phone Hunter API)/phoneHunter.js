// Step 1: API fetching
const loadData = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  // console.log(data);
  displayData(data);
};

// API data display function start here

const displayData = (mobiles) => {
  // console.log(mobiles.data.slice(0,6));

  const phoneContainer = document.getElementById("phone-container"); //Phone  parent container
  phoneContainer.innerHTML = "";

  mobiles.data.slice(0, 12).forEach((mobile) => {
    // console.log(mobile.slug); //each device data showing

    const { brand, phone_name, image, slug } = mobile; //Get the data from api which contains to show the web interface

    const div = document.createElement("div"); //create an element to display the data
    div.classList.add("phoneCard"); //Add the class

    div.innerHTML = `
        <a href="#">
        <img class="rounded-t-lg mx-auto" src="${image}" alt="" />
    </a>
    <div class="p-5 text-center">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold">${brand}</h5>
        </a>
        <p class="mb-3 font-normal text-black-600">${phone_name}</p>


        <a onclick="loadMobileDetails('${slug}')" href="#my-modal-2" class="btn">
            Show Details
        </a>


    </div>

        `;
    phoneContainer.appendChild(div); //Connect with dom
  });
  //Stop spinner
  spinner(false);
};

// Web interface search bar & button
const searchPhone = () => {
  // Start Loader..
  spinner(true);
  const phoneSearchBar = document.getElementById("default-search");
  searchText = phoneSearchBar.value;
  // console.log(phoneSearchBar);
  loadData(searchText); //Dynamic functionality connect with searchBar
};

// input field enter press
const input = document.getElementById("default-search");
input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    document.getElementById("inputSearch").click();
  }

  // Loading the search
});
const spinner = (isLoading) => {
  const loading = document.getElementById("loader");
  if (isLoading) {
    loading.classList.remove("hidden");
  } else {
    loading.classList.add("hidden");
  }
};

// Single phone details by Modal

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

searchPhone();
loadData("iphone");





