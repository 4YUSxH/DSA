let prompt = require("prompt-sync")();

// Factors of n given number *********************
// 1st Way
// let n = prompt("Enter Number: "); 
// for (let i = 1; i <=n ; i++) {
//     if(n%i === 0) console.log(i);
// } // Good but not efficient

// 2nd Way (More Efficient)
// for (let i = 1; i <= n / 2; i++) {
//   if (n % i === 0) console.log(i);
// }
// console.log(n);
// n ke factors n/2 ke baad direct itself hi hota hai, aur n/2 and uske pahele hi saare factors mil jaate hai
// n/2 times loop run hoga and it is far better than running a loop for n times

// Prime number *********************
// let n = prompt("Enter Number: ");
// let count = 0;
// 1st Way
// for(let i=1; i<=n; i++){
//     if(n%i === 0) count++
// }
// if(count === 2) console.log("Prime");
// else console.log("Not Prime");

// 2nd Way (More Efficient)
// if (n <= 1) console.log("Not Prime");
// else {
//   for (let i = 2; i <= n / 2; i++) {
//     if (n % i === 0) count++;
//   }
//   if (count === 0) console.log("Prime");
//   else console.log("Not Prime");
// }

// 3rd Way (Most Efficient)
// Mathmatical Fact : Agar kisi number ka factor uske sqrt(n) tak nahi milta to uske baad tak bhi nahi milega
// let flag = true;
// if(n <= 1) console.log("Not Prime"); // negative num removed
// if(n === 2) console.log("Prime"); // 2 is the only prime
// if(n%2 === 0) console.log("Not Prime"); // except 2 no prime
// else{
//     for(let i=3; i<=Math.floor(Math.sqrt(n)); i+=2){ // odd only completely divide by odd 
//         if(n%i === 0) flag=false // check more than 2 factors
//         break
//     }
//     console.log(flag ? "Prime" : "Not Prime"); // logging
// }