// Conditionals : if-else, else if

// Ques : 1
let prompt = require("prompt-sync")();
// let num1 = +(prompt("Enter first number : "));
// let num2 = +(prompt("Enter second number : "));

// if(num1 > num2) console.log(num1 + " is greater");

// Ques : 1
// let number = +(prompt("Enter a number : "));
// if((number % 2) === 0) console.log(number + " is even");
// else console.log(number + " is odd");

// Ques : 2
// let num1 = +(prompt("Enter first number : "));
// let num2 = +(prompt("Enter second number : "));
// let num3 = +(prompt("Enter second number : "));

// if(num1 > num2 && num1 > num3) console.log(num1 + " is greater");
// else if(num2 > num1 && num2 > num3) console.log(num2 + " is greater");
// else console.log(num3 + " is greater");

// Ques : 3
// let year = +(prompt("Enter year : "));

// if(year % 400 === 0) console.log(year + " is a leap year");
// else if(year % 4 === 0 && year % 100 !== 0) console.log(year + " is a leap year");
// else console.log(year + " is not a leap year");

// Ques : 4
// let yourpurchaseamount = +(prompt("Enter your purchase amount : "));
// let discount = null;

// if(yourpurchaseamount >= 0 && yourpurchaseamount <= 5000){
//     console.log("0% Discount" + 0);
//     console.log("Your payable amount is " + yourpurchaseamount);
// }
// else if(yourpurchaseamount > 5000 && yourpurchaseamount <= 7000){
//     discount = (5*yourpurchaseamount)/100;
//     console.log("5% Discount" + discount);
//     console.log("Your payable amount is " + (yourpurchaseamount - discount));
// }
// else if(yourpurchaseamount > 7000 && yourpurchaseamount <= 9000){
//     discount = (10*yourpurchaseamount)/100;
//     console.log("10% Discount" + discount);
//     console.log("Your payable amount is " + (yourpurchaseamount - discount));
// }
// else{
//     discount = (20*yourpurchaseamount)/100;
//     console.log("20% Discount" + discount);
//     console.log("Your payable amount is " + (yourpurchaseamount - discount));
// }

// Ques : 5
// let units = +(prompt("Enter your Units : "));
// let amount = 0;
// let usedunits = units;
// if(units > 400){
//     amount = (units-400)*13;
//     units = units-(units-400);
// }
// if(units > 200 && units <= 400){
//     amount = amount + (units-200)*8;
//     units = units-200;
// }
// if(units > 100 && units <= 200){
//     amount = amount + (units-100)*6;
//     units = units-100;
// }
// if(units > 0 && units <= 100){
//     amount = amount + (units*4.2);
//     units = units;
// }
// console.log(`Total Payable Amount: ${amount} and Units Consumed: ${usedunits}`);

// Ques : 6
// let month = +(prompt("Enter Month : "));
// let year = +(prompt("Enter Year : "));
// let days = 0;

// if (month === 2) {
//     if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//         console.log("Year is a leap year and February has 29 days.");
//         days = 29;
//     } else {
//         days = 28;
//     }
// }

// else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
//     days = 31;
// }

// else if (month === 4 || month === 6 || month === 9 || month === 11) {
//     days = 30;
// } else {
//     console.log("Invalid month entered.");
// }

// console.log(`The number of days in the month is: ${days}`);

// Conditionals : Swtich-Case

// let day = +(prompt("Enter Day : "));
// switch(day){
//     case 1 : {
//         console.log("Monday");
//         break;
//     }
//     case 2 : {
//         console.log("Tuesday");
//         break;
//     }
//     case 3 : {
//         console.log("Wednesday");
//         break;
//     }
//     case 4 : {
//         console.log("Thursday");
//         break;
//     }
//     case 5 : {
//         console.log("Friday");
//         break;
//     }
//     case 6 : {
//         console.log("Saturday");
//         break;
//     }
//     case 7 : {
//         console.log("Sunday");
//         break;
//     }
//     default : {
//         console.log("Enter valid Day");
//     }
// }

// Two condition with same execution code
// let num = +(prompt("Enter Number : "));
// switch(num){
//     case 1 :
//     case -1 : {
//         console.log("Number is One");
//         break;
//     }
//     case 2 : {
//         console.log("Number = 2");
//         break;
//     }
//     case 3 : {
//         console.log("Number = 3");
//         break;
//     }
// }

// Ques : 1
// let str = (prompt("Enter String : "));
// let vowels = 0;
// consonents = 0;

// for (let i = 0; i < str.length; i++) {
//     let char = str.charAt(i);

//     switch (char) {
//         case "a":
//         case "A":{
//             vowels++;
//             break;
//         }
//         case "e":
//         case "E":{
//             vowels++;
//             break;
//         }
//         case "i":
//         case "I":{
//             vowels++;
//             break;
//         }
//         case "o":
//         case "O":{
//             vowels++;
//             break;
//         }
//         case "u":
//         case "U":{
//             vowels++;
//             break;
//         }

//         default:
//             consonents++
//             break;
//     }
// }
// console.log(`Vowels -> ${vowels} Consonents -> ${consonents}`);

// Ques : 2
// let num1 = +prompt("Enter Number1 : ");
// let num2 = +prompt("Enter Number2 : ");
// let num3 = +prompt("Enter Number3 : ");

// switch (true) {
//   case num1 > num2 && num1 > num3:
//     console.log(`${num1} is Greater`);
//     break;
//   case num2 > num1 && num2 > num3:
//     console.log(`${num2} is Greater`);
//     break;
//   case num3 > num1 && num3 > num2:
//     console.log(`${num3} is Greater`);
//     break;
//   default:
//     console.log("Unknown");
// }

// Ques : 3
// function findGreatest(a, b, c) {
//   switch (true) {
//     case a > b && a > c:
//       return a;
//     case b > a && b > c:
//       return b;
//     case c > a && c > b:
//       return c;

//     case a === b && c > a:
//       return c;
//     case c === a && b > a:
//       return b;
//     case c === a && a === b:
//       return a;
//     default:
//       return a;
//   }
// }
// let ans = findGreatest(5, 78, 98);
// console.log(ans);

