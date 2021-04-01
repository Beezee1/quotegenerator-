"use strict";

const quote = document.querySelector(".quote");
const generateNew = document.querySelector(".genQuote");
let n = 0;
let newQuotes;
let url = "https://api.quotable.io/quotes";

//Fetch Quotes from Quotable API
fetch(url)
  .then((data) => data.json())
  .then((q) => (newQuotes = q.results));

// Function to change the quote.
const newQuote = () => {
  if (n < 20) {
    quote.textContent = newQuotes[n].content;
    n++;
  } else {
    n = 0;
    quote.textContent = newQuotes[n].content;
  }
};

// Click event to generate the next quote.
generateNew.addEventListener("click", newQuote);
