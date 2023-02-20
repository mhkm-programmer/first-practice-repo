function getInnerText(id) {
   const getText = document.getElementById(id);
   return getText
}

function setInnerText(id, text) {
    const setText = document.getElementById(id, text).innerText;
    return setText
}
function getValue(id){
    const getValue = document.getElementById(id).value;
    return getValue
}

function setValue(id, text) {
    const setValue = document.getElementById(id, text).value;
    return setValue
}

function setElement(id) {
    const createElement = document.createElement(id);
    return createElement
}

 for (let i = 0; i <=6; i++) {
    const element = i;
 
    return element;
}


document.getElementById('color-btn').addEventListener('click', function(){
   
    const id = getInnerText('friend')
    id.style.backgroundColor = 'red'

});



