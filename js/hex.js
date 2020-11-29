const hex = [
  "0", //<-- Index[0]
  "1", //<-- Index[1]
  "2", //<-- Index[2]
  "3", //<-- Index[3]
  "4", //<-- Index[4]
  "5", //<-- Index[5]
  "6", //<-- Index[6]
  "7", //<-- Index[7]
  "8", //<-- Index[8]
  "9", //<-- Index[9]
  "A", //<-- Index[10]
  "B", //<-- Index[11]
  "C", //<-- Index[12]
  "D", //<-- Index[13]
  "E", //<-- Index[14]
  "F", //<-- Index[15]
];

const button = document.getElementById("btn");
const color = document.querySelector(".color");

button.addEventListener("click", () => {
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    // We are iterating through the 'hex' array 6 times & on each iteration we are returning a random number using
    // the getRandomNumber() function and adds the hashtag to the begining of the random number from the 'hex' array w/ concatenation.
    hexColor += hex[getRandomNumber()];
  }

  // Displaying the results to document model
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

// Generates a random number from the 'hex' array
function getRandomNumber() {
  // Round down the random number from 'hex' aray to nearest whole number then
  // returns the random number from the length of the 'hex' array 0-15
  return Math.floor(Math.random() * hex.length);
}
