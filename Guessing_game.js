let maximum = parseInt(prompt("Enter the maximum number"));

while (!maximum) {
  maximum = parseInt(prompt("Invalid input!Enter a valid number!"));
}
let targetnum = Math.floor(Math.random() * maximum) + 1;
console.log(targetnum);
let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (parseInt(guess) !== targetnum) {
  attempts++;
  if (guess === "q") {
    break;
  }
  if (guess > targetnum) guess = prompt("Too high! Enter a new guess :");
  else guess = prompt("Too low! Enter a new guess :");
}
if (guess === "q") {
  console.log("QUITTING");
} else {
  console.log(`You got it! It took you ${attempts} guesses`);
}
