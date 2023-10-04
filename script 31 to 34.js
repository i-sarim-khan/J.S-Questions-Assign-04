// // // // Question 01 // // //

// function updateDateTime() {
//     const dateTimeElement = document.getElementById("datetime");
//     const currentDate = new Date();
//     const dateTimeString = currentDate.toLocaleString();
//     dateTimeElement.textContent = "Current Date and Time: " + dateTimeString;
// }

// // Call the updateDateTime function to display the date and time immediately
// updateDateTime();

// // Set up an interval to update the date and time every second
// setInterval(updateDateTime, 1000);

// // // // Question 02 // // //

// // Create an array of month names
// const monthNames = [
//     "January", "February", "March", "April", "May", "June", 
//     "July", "August", "September", "October", "November", "December"
//   ];
  
//   // Get the current date
//   const currentDate = new Date();
  
//   // Get the current month (0-based index, so we need to add 1)
//   const currentMonth = currentDate.getMonth();
  
//   // Get the month name from the array
//   const currentMonthName = monthNames[currentMonth];
  
//   // Alert the current month name
//   alert(currentMonthName);
  
// // // // Question 03 // // //

// // Get the current date
// const currentDate = new Date();

// // Define an array of day names
// const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// // Get the current day of the week (0 = Sunday, 1 = Monday, etc.)
// const currentDayIndex = currentDate.getDay();

// // Get the first 3 letters of the current day
// const currentDayAbbreviation = daysOfWeek[currentDayIndex];

// // Alert the abbreviation
// alert(currentDayAbbreviation);

// // // // Question 04 // // //

// // Get the current date
// const currentDate = new Date();

// // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
// const currentDay = currentDate.getDay();

// // Check if it's Saturday (6) or Sunday (0)
// if (currentDay === 0 || currentDay === 6) {
//   console.log("It's Fun day");
// } else {
//   console.log("It's not Fun day");
// }

// // // // Question 05 // // //

// // Get the current date
// const currentDate = new Date();

// // Get the day of the month
// const dayOfMonth = currentDate.getDate();

// // Check if the day is less than 16
// if (dayOfMonth < 16) {
//     console.log("First fifteen days of the month");
// } else {
//     console.log("Last days of the month");
// }

// // // // Question 06 // // //

// // Create a Date object representing the current date and time
// var currentDate = new Date();

// // Get the number of milliseconds since Jan. 1, 1970
// var millisecondsSince1970 = currentDate.getTime();

// // Calculate the number of minutes since midnight
// var minutesSinceMidnight = millisecondsSince1970 / (1000 * 60);

// // Output the result
// console.log("Minutes since midnight, Jan. 1, 1970:", minutesSinceMidnight);

// // // // Question 07 // // //

// // Get the current date and time
// const currentDate = new Date();

// // Get the current hour (0-23)
// const currentHour = currentDate.getHours();

// // Check if it's before noon (AM) or after noon (PM)
// if (currentHour < 12) {
//   alert("It's AM");
// } else {
//   alert("It's PM");
// }

// // // // Question 08 // // //

// // Create a Date object for December 31, 2020
// var lastDayOf2020 = new Date(2020, 11, 31);

// // Assign it to the variable named laterDate
// var laterDate = lastDayOf2020;

// // Print the value of laterDate to the console
// console.log(laterDate);

// // // // Question 09 // // //

// // Define the date of 1st Ramadan
// var ramadanStartDate = new Date('2015-06-18');

// // Get the current date
// var currentDate = new Date();

// // Calculate the difference in milliseconds between the current date and 1st Ramadan
// var timeDifference = currentDate - ramadanStartDate;

// // Calculate the number of days by dividing the time difference by milliseconds in a day
// var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// // Alert the number of days passed
// alert("Number of days past since 1st Ramadan: " + daysPassed);

// // // // Question 10 // // //

// // Define the reference date
// const referenceDate = new Date('2023-10-04T00:00:00'); // Replace with your reference date

// // Define the beginning of 2015
// const beginningOf2015 = new Date('2015-01-01T00:00:00');

// // Calculate the time difference in milliseconds
// const timeDifference = referenceDate - beginningOf2015;

// // Calculate the number of seconds
// const secondsElapsed = Math.floor(timeDifference / 1000);

// // Display the result in the browser
// document.write(`Seconds elapsed between the reference date and the beginning of 2015: ${secondsElapsed} seconds`);

// // // // Question 11 // // //

// // Step 1: Create a Date object for the current date and time
// var currentDate = new Date();

// // Step 2: Extract the hours
// var currentHours = currentDate.getHours();

// // Step 3: Reset the Date object an hour ahead
// currentDate.setHours(currentHours + 1);

// // Step 4: Display the updated Date object in your browser
// alert(currentDate);

// // // // Question 12 // // //

// // Create a new Date object
// var currentDate = new Date();

// // Subtract 100 years from the current date
// currentDate.setFullYear(currentDate.getFullYear() - 100);

// // Display the date in an alert box
// alert("100 years ago, the date was: " + currentDate.toDateString());

// // // // Question 13 // // //

// // Ask the user for their age
// var age = prompt("Please enter your age:");

// // Check if the user entered a valid age (a number)
// if (!isNaN(age)) {
//   // Calculate the birth year by subtracting the age from the current year
//   var currentYear = new Date().getFullYear();
//   var birthYear = currentYear - parseInt(age);

//   // Display the birth year in an alert box
//   alert("Your birth year is: " + birthYear);
// } else {
//   // Display an error message if the user didn't enter a valid age
//   alert("Invalid input. Please enter a valid age.");
// }

// // // // Question 14 // // //

// function generateBill() {
//     const customerName = document.getElementById("customerName").value;
//     const currentMonth = document.getElementById("currentMonth").value;
//     const unitsConsumed = parseFloat(document.getElementById("unitsConsumed").value);
    
//     // Calculate bill amount (You can modify this calculation as per your requirements)
//     const ratePerUnit = 10.50; // Change this to your K-Electric rate per unit
//     const totalAmount = unitsConsumed * ratePerUnit;
    
//     // Round the totalAmount to 2 decimal places
//     const roundedTotalAmount = totalAmount.toFixed(2);
    
//     // Display bill details
//     document.getElementById("customerNameDisplay").textContent = `Customer Name: ${customerName}`;
//     document.getElementById("currentMonthDisplay").textContent = `Current Month: ${currentMonth}`;
//     document.getElementById("totalAmountDisplay").textContent = `Total Amount: $${roundedTotalAmount}`;
// }


