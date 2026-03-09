// Basics & Conditions
// PROBLEM 1

// let age = prompt("Enter your age:");
// age = Number(age);
// if (age >= 0 && age <= 12) {
//     document.write("You are a Child");
// }
// else if (age >= 13 && age <= 19) {
//     document.write("You are a Teenager");
// }
// else if (age >= 20 && age <= 59) {
//     document.write("You are an Adult");
// }
// else if (age >= 60) {
//     document.write("You are a Senior");
// }
// else {
//     document.write("Invalid age");
// }

// PROBLEM 2
// let num1 = prompt("Enter first number:");
// let num2 = prompt("Enter second number:");
// num1 = Number(num1);
// num2 = Number(num2);
// if (num1 > num2) {
//     document.write("The largest number is: " + num1);
// }
// else if (num2 > num1) {
//     document.write("The largest number is: " + num2);
// }
// else {
//     document.write("Both numbers are equal");
// }

// PROBLEM 3
// let num = prompt("Enter a number:");
// num = Number(num);
// if (num % 2 === 0) {
//     document.write("The number is Even");
// } 
// else {
//     document.write("The number is Odd");
// }

// PROBLEM 4
// let num = prompt("Enter a number:");
// num = Number(num);
// if (num > 0) {
//     document.write("The number is Positive");
// }
// else if (num < 0) {
//     document.write("The number is Negative");
// }
// else {
//     document.write("The number is Zero");
// }

// PROBLEM 5
// let ch = prompt("Enter a character:");
// ch = ch.toLowerCase();
// if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
//     document.write("The character is a Vowel");
// }
// else {
//     document.write("The character is a Consonant");
// }

// LOOPS
// PROBLEM 1
// for (let i = 1; i <= 50; i++) {
//     document.write(i + "<br>");
// }

// PROBLEM 2
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         document.write(i + "<br>");
//     }
// }

// PROBLEM 3
// let N = prompt("Enter a number (N):");
// N = Number(N);
// let sum = 0;
// for (let i = 1; i <= N; i++) {
//     sum += i;  // Add i to sum
// }
// document.write("The sum of the first " + N + " natural numbers is: " + sum);

// PROBLEM 4
// let num = prompt("Enter a number to print its multiplication table:");
// num = Number(num);
// for (let i = 1; i <= 10; i++) {
//     let result = num * i;
//     document.write(num + " × " + i + " = " + result + "<br>");
// }

// PROBLEM 5
// let num = prompt("Enter a number to find its factorial:");
// num = Number(num);
// if (num < 0) {
//     document.write("Factorial is not defined for negative numbers.");
// } else {
//     let factorial = 1;
//     for (let i = 1; i <= num; i++) {
//         factorial *= i; // Multiply factorial by i
//     }
//     document.write("Factorial of " + num + " is: " + factorial);
// }

// Combining Loops & Conditions
// PROBLEM 1
// let numbers = [3, 15, 7, 20, 8];
// let largest = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//         largest = numbers[i]; 
//     }
// }
// document.write("The largest number in the array [" + numbers + "] is: " + largest);

// PROBLEM 2
// for (let num = 2; num <= 100; num++) {
//     let isPrime = true;
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         document.write(num + "<br>");
//     }
// }

// PROBLEM 3
// let rows = 5;
// for (let i = 1; i <= rows; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write("*");
//     }
//     document.write("<br>");
// }

// PROBLEM 4
// let a = Math.random() * 10;
// a = Number.parseInt(a);  
// let inp;
// let score = 10;
// while (inp != a){
//     score = score - 1;
//     inp = prompt("Enter the number: ");
//     if(inp == a){
//         console.log("Congratulations! You guessed the correct number.");
//         console.log(`You guessed the actual number in ${10 - score} chances`);
//     }
//     else if(inp > a && inp < 10){
//         console.log("Your number is greater than the actual number");
//     }
//     else if(inp < a && inp > 0){
//         console.log("Your number is smaller than the actual number");
//     }
//     else{
//         console.log("Enter number between 1 to 10");
//     }
// }

// PROBLEM 5
// let num = prompt("Enter a number to reverse:");
// num = String(num);
// let reversed = "";
// for (let i = num.length - 1; i >= 0; i--) {
//     reversed += num[i];
// }
// document.write("The reverse of " + num + " is: " + reversed);
