
// Option 2
function makeRed(){
    document.body.style.backgroundColor="red";
}

// Option 3
const makeBLueBtn = document.getElementById('make-blue');
makeBLueBtn.onclick = makeBLue;
function makeBLue() {
    document.body.style.backgroundColor='blue';
}


// Option 3 an other
const makePurplebtn = document.getElementById('make-purple');
makePurplebtn.onclick = () =>{
 document.body.style.backgroundColor = 'purple';
}

// Option 4
const makePinkBtn = document.getElementById('make-pink');
makePinkBtn.addEventListener('click', makePinkBtnClick);

function makePinkBtnClick() {
    document.body.style.backgroundColor = 'pink';
}


// Option 4 another
const makeGreenBtn = document.getElementById('make-green');
makeGreenBtn.addEventListener('click', function makeGreen() {
 document.body.style.backgroundColor = 'green';
});

// Option 5

document.getElementById('make-golden').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod'
  });
  

//   Final option 

function handlerOnClick() {
    const handlerStatus = document.getElementById('handler-title');
handlerStatus.innerText = 'Handled by function attached by on on click attribute'
}

document.getElementById('eventBtn').addEventListener('click',function(){
    const handlerStatus = document.getElementById('handler-title');
    handlerStatus.innerText = 'Handled by function attached '
});


// Input text update by btn click

const handlerEvent = document.getElementById('btn-update').addEventListener('click', function() {     //step 1 => define btn click
    const inputField = document.getElementById('input-filed');  //define input field
    const inputFieldText = inputField.value;   //define input field text
    const p = document.getElementById('input-text-display');  //define display text
    p.innerText = inputFieldText;  //interconnect display text and input text
    inputField.value = '';     // clear the input field text

   }) 


   // Practice  btn click

   const btnUpdate = document.getElementById('btn-Update').addEventListener('click', function() {
    const inputUpdate = document.getElementById('input-update');
    // inputUpdate.value = inputUpdateText;
    const inputUpdateText = inputUpdate.value;
    const inputTextDisplay = document.getElementById('display-text');
    inputTextDisplay.innerText = inputUpdateText;
    inputUpdate.value = '';

  });


  // New comment creates.....

  const  clickPost = document.getElementById('click-post').addEventListener('click', function() {     //step1 => define btn click
    const inputTextArea = document.getElementById('input-text'); //define input text area
    const newInputText = inputTextArea.value; //define new input text
    const updateNewText = document.getElementById('display-text1'); //define text display location
    const p = document.createElement('p'); //create p element tag
    p.innerText = newInputText //connect input text area and  display text area
    updateNewText.appendChild(p);//connect the parent and child elements


    inputTextArea.value = '';

 });