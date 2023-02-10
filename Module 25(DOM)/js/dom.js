const sections = document.querySelectorAll("section");
// section.forEach(section => {
//     section.addEventListener('click', () => {
//         section.classList.toggle('active');
//     });
// });

for (const section of sections) {
  section.style.border = "1px solid black";
  section.style.background = "gray";
  section.style.marginBottom = "10px";
  section.style.padding = "10px";
  // section.style.textAlign = 'center';
  section.style.color = "white";
  section.style.fontSize = "20px";
  // section.style.fontWeight = 'bold';
  // section.style.textDecoration = 'underline';
  section.style.cursor = "pointer";
  section.style.borderRadius = "10px";
}

const fruitsList = document.getElementById("headerText");
fruitsList.classList.remove("textHeader");
fruitsList.innerText = "This is my first DOM.";

const li = document.createElement("li");
li.innerText = "This is my first";

const li2 = document.createElement("li");
li2.innerText = "DOM";

const header = document.getElementById("apple");
header.appendChild(li);
header.appendChild(li2);

const mainConatainer = document.getElementById("main-container");
const section = document.createElement("section");

const h1 = document.createElement("h1");
h1.innerText = "My friends";
section.appendChild(h1);

const ul = document.createElement("ul");
const li3 = document.createElement("li");
const li4 = document.createElement("li");
const li5 = document.createElement("li");
li3.innerText = "Hary";
li4.innerText = "Johm";
li5.innerText = "Mark";
ul.appendChild(li3);
ul.appendChild(li4);
ul.appendChild(li5);
section.appendChild(ul);

mainConatainer.appendChild(section);

const newSection = document.createElement("section");
newSection.innerHTML = `
<h1>My friends</h1>
<ul> 
<li>Rahim</li>
<li>Karim</li>
<li>Jalil</li>
<li>Ab Rahim</li>
<li>Irfan</li>
<li>Raho</li>
</ul>
`
mainConatainer.appendChild(newSection);
newSection.style.fontSize
