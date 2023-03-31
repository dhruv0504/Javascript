const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  randomnum = Math.floor(Math.random() * colors.length);
  console.log(randomnum);
  document.body.style.backgroundColor = colors[randomnum];
  color.textContent = colors[randomnum];
  console.log(color.textContent);
});
