const userName = "redSmitk";
const lastName = "redSmitK";

if (userName.toLowerCase == lastName.toLowerCase) {
console.log('vaild user name');
} else{
    console.log('invalid user name');
}



// Reverse String 

function reverseString(text) {
    let rever = '';
    for (let i = text.length - 1; i >= 0; i--){
        rever += text[i];
    }
    return rever;
}

let text = 'I Love You';
const reverse = reverseString(text);
console.log(reverse);


// reverse word 

function reverseWord(wordText) {
    const word = wordText.split(' ');
    let spiltWords = [];
    for (let i = word.length - 1; i >= 0; i--)
    {
        spiltWords.push(word[i]);
    }
    return spiltWords
}

let wordText = 'I Love You';
const myText = reverseWord(wordText);
console.log(myText);