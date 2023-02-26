const URL = "https://jsonplaceholder.typicode.com/photos";

const loadData = () => {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => userPhoto(data.slice(0, 8)));
};

const userPhoto = (users) => {
  users.forEach((user) => {
    
   console.log(user.thumbnailUrl);

   const displayUserPhoto = document.getElementById("user-section");
   const div = document.createElement("div");
   div.classList.add("u");
   div.innerHTML =`
   <div class="rounded-lg h-64 overflow-hidden">
   <img alt="content" class="object-cover object-center h-full w-full" src="${user.thumbnailUrl}">
 </div>
 <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Title ${user.title}</h2>
 <button onclick="loadData()" class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
   `;
   displayUserPhoto.appendChild(div)

    
            
  });
};

loadData();
