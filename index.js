// const quoteText = document.getElementById("quote-text");
const quoteText = document.querySelector("#quote-text");
console.log(quoteText);

const btn = document.querySelector("#quote-btn");
console.log(btn);
const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "It always seems impossible until it's done. - Nelson Mandela",
  "Don't count the days, make the days count. - Muhammad Ali",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
  "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "The secret to getting ahead is getting started. - Mark Twain",
  "If you are not willing to risk the usual, you will have to settle for the ordinary. - Jim Rohn",
  "Opportunities don't happen. You create them. - Chris Grosser",
  "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
  "The only impossible journey is the one you never begin. - Tony Robbins",
  "The best revenge is massive success. - Frank Sinatra",
];

// console.log(quotes[19])

function generateRandomQuotes() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  console.log(randomIndex);
  const randomQuote = quotes[randomIndex];
  quoteText.innerText = randomQuote;
}
// btn.addEventListener("click", () => {
//     quoteText.innerHTML = "<h1>HELO</h1>";
//     quoteText.innerText = "HOLAAA"
// });

btn.addEventListener("click", generateRandomQuotes);
