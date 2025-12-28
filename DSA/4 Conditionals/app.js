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
let yourpurchaseamount = +(prompt("Enter your purchase amount : "));
let discount = null;

if(yourpurchaseamount >= 0 && yourpurchaseamount <= 5000){
    console.log("0% Discount" + 0);
    console.log("Your payable amount is " + yourpurchaseamount);
}
else if(yourpurchaseamount > 5000 && yourpurchaseamount <= 7000){
    discount = (5*yourpurchaseamount)/100;
    console.log("5% Discount" + discount);
    console.log("Your payable amount is " + (yourpurchaseamount - discount));
}
else if(yourpurchaseamount > 7000 && yourpurchaseamount <= 9000){
    discount = (10*yourpurchaseamount)/100;
    console.log("10% Discount" + discount);
    console.log("Your payable amount is " + (yourpurchaseamount - discount));
}
else{
    discount = (20*yourpurchaseamount)/100;
    console.log("20% Discount" + discount);
    console.log("Your payable amount is " + (yourpurchaseamount - discount));
}