// // // // Question 01 // // //
// // Prompt the user for input
// var userInput = prompt("Enter a positive integer:");

// // Parse the user input to an integer
// var num = parseInt(userInput);

// // Check if the input is a positive integer
// if (!isNaN(num) && num > 0) {
//   // Calculate round, floor, and ceil values
//   var roundValue = Math.round(num);
//   var floorValue = Math.floor(num);
//   var ceilValue = Math.ceil(num);

//   // Display the results in the browser
//   document.write("<h3>Number: " + num + "</h3>");
//   document.write("<h3>Round Off Value: " + roundValue + "</h3>");
//   document.write("<h3>Floor Value: " + floorValue + "</h3>");
//   document.write("<h3>Ceil Value: " + ceilValue + "</h3>");
// } else {
//   // Display an error message if the input is not valid
//   document.write("<h3>Invalid input. Please enter a positive integer.</h3>");
// }
// // // // Question 02 // // //

// // Step 1: Prompt the user to enter a negative floating-point number
// var userInput = parseFloat(prompt("Enter a negative floating-point number:"));

// // Step 2: Check if the user entered a valid negative number
// if (isNaN(userInput) || userInput >= 0) {
//   alert("Invalid input. Please enter a negative floating-point number.");
// } else {
//   // Step 3: Display the entered number
//   alert("Number: " + userInput);

//   // Step 4: Calculate and display the round-off value
//   var roundedValue = Math.round(userInput);
//   alert("Round-off value: " + roundedValue);

//   // Step 5: Calculate and display the floor value
//   var floorValue = Math.floor(userInput);
//   alert("Floor value: " + floorValue);

//   // Step 6: Calculate and display the ceil value
//   var ceilValue = Math.ceil(userInput);
//   alert("Ceil value: " + ceilValue);
// }

// // // // Question 03 // // //

// // Prompt the user for input
// var number = prompt("Enter a number:");

// // Parse the input as a floating-point number
// number = parseFloat(number);

// // Calculate the absolute value
// var absoluteValue;

// if (isNaN(number)) {
//   // Handle the case where the input is not a valid number
//   absoluteValue = "Invalid input. Please enter a valid number.";
// } else if (number < 0) {
//   absoluteValue = -number; // Take the negation if the number is negative
// } else {
//   absoluteValue = number; // Leave the number unchanged if it's positive or zero
// }

// // Display the result
// console.log("The absolute value of " + number + " is " + absoluteValue);

// // // // Question 04 // // //

//         // Function to simulate a dice roll and display the result
//         function rollDice() {
//             // Generate a random number between 1 and 6 (inclusive) for the dice roll
//             var diceValue = Math.floor(Math.random() * 6) + 1;
            
//             // Display the result on the web page
//             var resultElement = document.getElementById("diceResult");
//             resultElement.innerHTML = "You rolled a " + diceValue;
//         }

//         // Add a click event listener to the "Roll the Dice" button
//         var rollButton = document.getElementById("rollButton");
//         rollButton.addEventListener("click", rollDice);

// // // // Question 05 // // //

// function tossCoin() {
//     // Generate a random number between 0 and 1
//     const randomValue = Math.random();

//     // Use the random value to determine the coin toss result
//     let coinResult;
//     if (randomValue < 0.5) {
//         coinResult = "Heads";
//     } else {
//         coinResult = "Tails";
//     }

//     // Display the result in the browser
//     const resultElement = document.getElementById("result");
//     resultElement.textContent = `The coin landed on: ${coinResult}`;
// }
// // // // Question 06 // // //

//   // Generate a random number between 1 and 100
//   const randomNumber = Math.floor(Math.random() * 100) + 1;

//   // Display the random number in the browser
//   const randomNumberElement = document.getElementById("randomNumber");
//   randomNumberElement.textContent = randomNumber;
// // // // Question 07 // // //

// // Function to parse and extract the weight from user input
// function parseWeight(input) {
//     // Regular expression pattern to match different input formats
//     const regex = /^(\d+(\.\d+)?)(kgs|kilograms)?$/i;
//     const match = input.match(regex);
  
//     if (match) {
//       // Extract the numeric part and convert it to a floating-point number
//       const weight = parseFloat(match[1]);
//       return weight;
//     } else {
//       return null; // Return null for invalid input
//     }
//   }
  
//   // Function to get user input and display the weight
//   function getUserInputAndDisplayWeight() {
//     const userInput = prompt("Enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");
  
//     if (userInput) {
//       const weight = parseWeight(userInput);
//       if (weight !== null) {
//         alert(`Your weight is ${weight} kilograms.`);
//       } else {
//         alert("Invalid input. Please use a valid format.");
//       }
//     } else {
//       alert("No input provided.");
//     }
//   }
  
  // Call the function to start the program
//   getUserInputAndDisplayWeight();
  


// // Generate a random secret number between 1 and 10
// const secretNumber = Math.floor(Math.random() * 10) + 1;

// // Ask the user to input a number between 1 and 10
// const userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// // Check if the user's guess equals the secret number
// if (userGuess === secretNumber) {
//   alert("Congratulations! You guessed the secret number!");
// } else {
//   alert(`Sorry, the secret number was ${secretNumber}. Try again!`);
// }
