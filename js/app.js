const colors = [
  "#00ff00",
  "Green",
  "Orange",
  "rgb(255, 255, 200)",
  "Yellow",
  "Purple",
];

const button = document.getElementById("btn");
const color = document.querySelector(".color");

button.addEventListener("click", () => {
  const randomNumber = getRandomNumber();

  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
