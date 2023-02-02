
const lyrics = 'When erver you what ever you Do I will waiting for you, ocean the heart day after day,In the slowly go on, when ever you what ever you do I be just for waiting for you';
// const words = lyrics.split('heart');
// console.log(words);


// const searchString = 'heart';
// const lyricsLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(lyricsLine);

// console.log(lyrics.indexOf(searchString));
// console.log(lyrics.indexOf('heart'));

// if (lyrics.indexOf('heart') !== -1) {
//     console.log('Existing the search string');
    
// } else{
//     console.log('No existing the search string');
// }


// startswith 

const startWith = lyrics.startsWith('soul');
console.log(startWith);


// endsWith 

const endsWith = lyrics.endsWith('heart');
console.log(endsWith);


// split 

const wordSplit = lyrics.split(' ');
console.log(wordSplit);

const senSpilt = lyrics.split('.');
console.log(senSpilt);

const charSplit = lyrics.split('');
console.log(charSplit);

const wordJoin = wordSplit.join(' ');
console.log(wordJoin);

const fixedWordsSplit = lyrics.split('waiting');
console.log(fixedWordsSplit);


// Slice 
 const wordSlice = lyrics.slice(10, 15);
 console.log(wordSlice);


 const wordReplacement = lyrics.replace('heart', 'love');
 console.log(wordReplacement);
	