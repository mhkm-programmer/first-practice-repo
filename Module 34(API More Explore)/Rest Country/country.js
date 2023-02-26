const URL = "https://restcountries.com/v3.1/all";

const loadData = () => {
  fetch(URL)
    .then((response) => response.json())
    .then((responseData) => displayData(responseData.slice(0, 4)));
};

const displayData = (country) => {
  country.forEach((singleCountry) => {
    // console.log(singleCountry);
    const { flags, continents, cca2, cca3, area, capital, name } = singleCountry;
    const countryTags = document.getElementById("country-id");
    const div = document.createElement("div");
    div.innerHTML = `
      
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="${
            flags.png
          }" alt="content">
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">${
            capital ? capital[0] : "No Capital"
          }</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">${
            name.common
          }</h2> 
          <button onClick ="countryDetails('${cca2}')" class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>   
        </div>
        `;
    countryTags.appendChild(div);
  });
};

const countryDetails = (id) =>{
  
  fetch(`https://restcountries.com/v3.1/alpha/${id}`)
  .then(res => res.json())
  .then(data => showCountry(data[0]));

}



const showCountry = singleCountryDetails =>{
  console.log(singleCountryDetails);
  const detailsContainer =document.getElementById('country-details');
  detailsContainer.innerHTML ='';
  const div = document.createElement('div');
  div.innerHTML = `
  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">${
    singleCountryDetails.cca2
  }</h2> 
  `;

  detailsContainer.appendChild(div);

}
// countryDetails();
loadData();



