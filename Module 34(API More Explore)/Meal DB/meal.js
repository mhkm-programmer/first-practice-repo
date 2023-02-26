

const loadData = (id) => {
    const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => showMeals(data.meals))
    .catch((err) =>console.log(err))
};

const loadData1 =async (id) => {
    const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`;
    try{
        const res = await fetch(URL);
        const data =await res.json();
        showMeals(data.meals);
    }
    catch(err) {
        console.log(err);
    }
}; 

const showMeals = meals =>{
//  console.log(meals);
 const mealsSection = document.getElementById('meals-container');
 mealsSection.innerHTML = '';
 meals.forEach(meal => {
    console.log(meal.strMeal);
    const{strMealThumb, strCategory, strInstructions, strMeal } = meal;
    const div = document.createElement('div');
    div.innerHTML =`
    <div>
              <div class="rounded-lg h-64 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full" src="${strMealThumb}">
              </div>
              <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">${strCategory}</h2>
              <p class="leading-relaxed text-base">${strMeal}</p>
             
    `;

    mealsSection.appendChild(div);
 });

}

const mealSearch = () => {
    const searchValue = document.getElementById('inputValue').value;
    // console.log(searchValue);
    loadData(searchValue)
}



loadData1('meat');
