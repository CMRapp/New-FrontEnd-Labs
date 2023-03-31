/*
  Copyright (c) 2023 Promineo Tech
  Author:  Promineo Tech Academic Team
  Subject:  Variables and Operations Lab
  FE 01 Lab  
*/

/** Key Terms:
 *  JavaScript
 *  GUI (Graphic User Interface)
 *  CLI (Command Line Interface)
 *  Variable
 *  Data Types:
 *   - String
 *   - Number
 *   - Boolean
 *   - Array
 *   - Undefined
 *   - Object
 *   - BigInt
 *   - Null
 *   - Symbol
 *  Method
 *  Git
 *  Source Control
 *  Operators
 *  console.log()
 * 
*/

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so. 
// Read the comments and add your code where it is specified for each question. 
/* ----------------------------------------------------- */

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 1. Creating & 'console.log()'ing variables \n`);

/**
 * Instruction: Create a variable for each step, then print that variable 
 *              to the console in the correct section.
 *
 * Step 1: Create a variable to hold the quantity of available seats left on a flight.
 * Step 2: Create a variable to hold the cost of groceries at checkout
 * Step 3: Create a variable to hold a person's middle initial
 * Step 4: Is it Hot Outside?
 *         Create a variable to hold a boolean, true if it's hot outside, false if it's not hot outside.
 * Step 5: Create a variable to hold a customer's first name.
 * Step 6: Create a variable to hold a street address.
 * ↓ YOUR CODE HERE ↓ */

console.log("Step 1:  Number of Seats on a Plane");
var availableSeats = 7;
console.log("the number of seats left on this plane are: " + availableSeats);

console.log("Step 2:  Cost of Groceries");
var totalCost = 50.23;
console.log("The total cost of your groceries is: $" + totalCost);

console.log("Step 3:  Middle Initial");
var middleInit = 'N';
console.log("Your middle inital is " + middleInit);

console.log("Step 4:  Is it Hot Outside?");
var isHotOutside = true;
console.log("Is it hot outside? " + isHotOutside);

console.log("Step 5:  First Name");
var firstName = "Christian";
console.log("Your First Name: " + firstName);

console.log("Step 6:  Street Address");
var address = "215 Greenwood Ave | Lehigh Acres, FL 33936";
console.log("Your address: " + address);


/*-------------------------------------------------------*/

console.log(`--------------------------
Question 2. Creating & 'console.log()'ing variables \n`);
 

/** 
 * Instruction: Use the variables we just created to solve the problems below.
 *              Print your answers to the console.
 * 
 *
 * */

    console.log('Remove Plane Seats:')
//	A customer booked 2 plane seats. Remove 2 seats from the available seats variable
//  ↓ YOUR CODE HERE ↓
    console.log("Remaining seats left: " + (availableSeats - 2));

    console.log('Buy a Candy Bar:')
//	Impulse candy bar purchase! Add 2.15 to the grocery total
//  ↓ YOUR CODE HERE ↓
    let totalPurchase = (totalCost + 2.15);
    console.log("You've purchased a candy bar for $2.15. Your new cart total is :" + (totalCost + 2.15));

    console.log('Fix a Birth Certificate:')
//	A birth certificate was printed incorrectly, change the middle initial to something else
//  ↓ YOUR CODE HERE ↓
    middleInit = "M";
    console.log("Your middle initial has been changed to: " + middleInit);

    console.log('Changing Seasons:')
//	The season has changed, update the hot outside variable	to be opposite of what it was
//  ↓ YOUR CODE HERE ↓
    isHotOutside = !isHotOutside;
    console.log("Seasons have changed. Is it hot outside? "+ isHotOutside);
    
    console.log('Full Name:')
//	Create a new variable called full name using the customer's
//  first name, the middle initial, and a last name of your choice
//  ↓ YOUR CODE HERE ↓
    var fullName = firstName + " " + middleInit + " Rapp";
    console.log("Your full name is: " + fullName);

    console.log('Introduce a Customer:')
//	Print a line to the console that introduces the customer 
//	including the name, and saying that they live at the address variable
//  ↓ YOUR CODE HERE ↓
    console.log("Customer Name: " + fullName);
    console.log("Customer Address: " + address);


    console.log('-----------Finished------------')