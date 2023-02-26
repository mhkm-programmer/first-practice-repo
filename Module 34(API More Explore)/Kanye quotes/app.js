const URL = "https://api.kanye.rest/";

const loadData = () => {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
        displayQuotes(data);
        console.log(data);
    });
};

const displayQuotes = (quotes) => {
  console.log(quotes);
  const blockQuote = document.getElementById("quotes");
  blockQuote.innerHTML = `
    <p>${quotes.quote}</p>
    `;};

loadData();
