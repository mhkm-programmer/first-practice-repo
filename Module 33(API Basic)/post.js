const URL = "https://jsonplaceholder.typicode.com/posts"

function dataLoad() {
    fetch(URL)
    .then((res) => res.json())
    .then((data) => displayPots(data))
    .catch((err) => {
        console.log(err);
    });
}




const displayPots = (data) => {
    const containerDiv = document.getElementById('container');

    for (let singleData of data.slice(0, 5)) {
        const postDiv = document.createElement("div");

        postDiv.innerHTML =`
        <h3>Title ${singleData.title}</h3>
        <p>Post ${singleData.body}</p>
        `;

        containerDiv.appendChild(postDiv);
    }

}


dataLoad();
    