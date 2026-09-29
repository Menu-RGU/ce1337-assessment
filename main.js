const prompt = require("readline-sync");

// Score that starts set at zero
let score = Number(0);

//Score recived depending on a correct answer
let correctAnswer = Number(1);

// Name that is inputed
let name = ("");

//Asking the user to input a name
name = prompt.question("Please enter your name: ");

//The correctAnswer is added to score
score = score += correctAnswer

//Displaying the name that the user inputted plus the final score
console.log (name + (" Your final score is: ") + score);