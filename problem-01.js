// Free Drinks

let bruger = 600;

if (bruger > 500) console.log("Free Coke");
else console.log("Coke: 30tk");

// BMI Calculator

let height = 1.76784;
let weight = 73;
let BMI = weight / height ** 2;

if (BMI < 18.5) console.log("You are underweight.");
else if (BMI >= 18.5 && BMI <= 24.9) console.log("You are normal.");
else if (BMI >= 25 && BMI <= 29.9) console.log("You are overweight.");
else console.log("You are obese.");

// Grade Calculator

let marks = 100;

if (marks >= 90 && marks <= 100) console.log("Grade : A");
else if (marks >= 80 && marks <= 89) console.log("Grade : B");
else if (marks >= 70 && marks <= 79) console.log("Grade : C");
else if (marks >= 60 && marks <= 69) console.log("Grade : D");
else if (marks >= 0 && marks <= 59) console.log("Grade : E");
else console.log("Grade : F");

// Nested Friend

let myScore = 85;
let fdScore = 85;

if (myScore > 80) {
  if (fdScore > 80) console.log("Go for a lunch.");
  else if (fdScore >= 60 && fdScore < 80) console.log("Good luck next time. ");
  else if (fdScore >= 40 && fdScore < 60) console.log("Keep your friend's message unseen.");
  else if (fdScore < 40) console.log("block your friend");
} else console.log("Go to home and sleep and act sad");

// Ternary Number

let num1 = 10,
  num2 = 20;
let result;

if (num1 > num2) console.log(num1 * 2); // using if...else
else console.log(num1 + num2);

num1 > num2 ? console.log(num1 * 2) : console.log(num1 + num2); // using ternary

// Bus fare Calculator

let age =15;
let ticketPrice = 800;

if (age < 10) console.log("Free");
else if (age >= 10 && age <= 25) console.log(ticketPrice * 0.5);
else if (age >= 60) console.log(ticketPrice - ticketPrice * 0.15);
else console.log(ticketPrice);

// Fun

let error=false;
if(!error) console.log("Life is easy")
else console.log("🙂")