// Top

function random(number) {
  return Math.floor(Math.random() * number);;
}
function randomColor() {
  return 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
}
function setRandomColor() {
  let clr_val = randomColor();
  document.body.style.backgroundColor = clr_val;

}
const btn = document.getElementById("button");
btn.addEventListener("click", setRandomColor);

// Center

const greet = document.getElementById("greet");
const timeNow = new Date().getHours();
const greeting = timeNow >= 5 && timeNow < 12 ? "Good Morning" : timeNow >= 12 && timeNow < 18 ? "Good Afternoon" : "Good evening";

greet.innerHTML = `<h1>${greeting}, let's calculate.</h1>`

//End

const sum = (a, b) => {
  let num1, num2, sum;
  num1 = parseInt(document.getElementById("input-1").value)
  num2 = parseInt(document.getElementById("input-2").value)
  sum = num1 + num2;
  const result = document.getElementById("result");
  result.innerHTML = `<h3>Your Result: ${sum}</h3>`
}
const calculate = document.getElementById("calculate");
calculate.addEventListener("click", sum)
