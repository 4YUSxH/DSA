// 1. Variable : const(Cannot change value), var(Hoisied), let(Not hoisted) ********************

// 2. Relation b/w integar and string ********************
console.log("String" + 10); // String(Concetenation)
console.log("String" + "String2"); // String(Concetenation)
console.log(10+40); // Int(Arithmatic Operation)

let a = 10;
let b = 30;
console.log("The sum of " + a + " and " + b + " is " + a+b); // The sum of 10 and 30 is 1030
// 2 operand aur 1 oprator par ruk jao aur calculate karo
// (((((("The sum of " + a) + "and ") + b) + "is") + a)+b)
//    1st Calulation     2nd Cal    3rd     4th    5th  6th 
// 1st Cal -> "The sum of "(str) + 10(int) = "The sum of 10"(str)
// 2nd Cal -> "The sum of 10"(str) + "and"(str) = "The sum of 10 and"(str)
// 3rd Cal -> "The sum of 10 and"(str) + 30(int) = "The sum of 10 and 30"(str)
// 4th Cal -> "The sum of 10 and 30"(str) + "is"(str) = "The sum of 10 and 30 is"(str)
// 5th Cal -> "The sum of 10 and 30 is"(str) + 10(int) = "The sum of 10 and 30 is 10"(str)
// 6th Cal -> "The sum of 10 and 30 is 10"(str) + 30(int) = "The sum of 10 and 30 is 1030"(str)

console.log("The sum of " + a + " and " + b + " is " + (a+b)); // The sum of 10 and 30 is 40
console.log(a+b + " Is the sum of " + a + " and " + b); // 40 Is the sum of 10 and 20

// 3. Type coercion ********************
console.log("1" + 1); // + -> Concate & Addition 
console.log("1" - 1); // - -> Substracton

// 3. Acceptinf Value(Input) ********************
let prompt = require("prompt-sync")();

let age = +(prompt("Enter you age : "))
console.log(`Age is : ${age}`);
console.log(typeof(age)); // Prompt will convert data into string, typecast it using + or Number()

// 4. Swapping 2 variables ********************
// 1st Way : With a temp var
let c = 10;
let d = 20;
console.log(`Before Swapping ${c}, ${d}`);
let temp = c;
c = d;
d = temp; 
console.log(`After Swapping ${c}, ${d}`);

// 2nd Way : With a extra var
let e = 10;
let f = 20;
console.log(`Before Swapping ${e}, ${f}`);
e = e + f;
f = e - f;
e = e - f;
console.log(`After Swapping ${e}, ${f}`);

// 3rd Way : Using destructuring array
let g = 10;
let h = 20;
console.log(`Before Swapping ${g}, ${h}`);
[g, h] = [h, g]
console.log(`After Swapping ${g}, ${h}`);
