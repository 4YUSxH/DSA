// Operators

// Atihmatic Operators ********************
console.log("Atihmatic Operators");
console.log(10 / 2);
console.log(10 / 3); // int/int should be equals to int in DS
console.log(Math.floor(10 / 3)); // int/int should be equals to int, Math.floor() for making it correct
console.log(10 % 3); // Mod hamesha int mai hi result(remainder) deta hai
console.log(2 % 10); // Agar Dividend<Divisor to ans Dividend hi hoga
console.log(46857 % 10); // Last ka ek digit rahega
console.log(46857 % 100); // Last ke two digit rahega
console.log(46857 % 1000); // Last ke three digit rahega and so on...
console.log(Math.floor(69849 / 10)); // Last ka ek digit hat jayega
console.log(Math.floor(69849 / 100)); // Last ke two digit hat jayenga
console.log(Math.floor(46859 / 1000)); // Last ke three digit hat jaynge and so on...

// Relation Operators ********************
console.log("Realtion Operators");
console.log(10 < 9);
console.log(10 > 9);
console.log(10 <= 9);
console.log(10 >= 9);
console.log(9 >= 9);
console.log(9 == 9);
console.log("9" == 9);
console.log("9" === 9);
console.log(9 != 9); // Kya 9 == 9 ke false nahi hai, Puch rahe hai bata nahi rahe
console.log(9 != 10); // Kya 9 == 10 ke true hai, Nahi == hoga to true else false

console.log("Logical Operators");
console.log(12 < 7 && 8 > 55); // Ek bhi condition false hui to ruk jayega aur aage ki concitions check nahi hogi
console.log(12 > 7 || 8 >55); // Ek bhi condition true hui to ruk jayega aur aage ki concitions check nahi hogi
console.log(!true);
console.log(!false);

console.log("Unary Operators");
let a = 0;
console.log(a++); // Pahele use karo fir update karna
console.log(++a); // Pahele update karo fir use karna
console.log(a--); 
console.log(--a); 

// console.log(10++); // Error : Constant par unary operator apply nahi hote 
// console.log(++(a++)); // Error : Constant par unary operator apply nahi hote and a++ = 0 jo ki const hai wo aa jayega, Hence nested unary operators nahi apply kar sakte 

let b = true; // true -> 1, false -> 0 
console.log(++b); 
console.log(++b); 
console.log(--b);  
console.log(--b);  