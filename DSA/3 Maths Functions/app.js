console.log(Math.abs(-10)); // |-10| negativ value ko positive mai convert karta hai, imp : positive ko negative mai nahi karta, abs stands for absolute
console.log(Math.ceil(10.7)); // Only acceot float and upper ceiling mai leke jayega here 11 
console.log(Math.ceil(10.1)); 
console.log(Math.floor(10.1)); // Ceil ka opposite, floor par layega 
console.log(Math.floor(10.9)); // Ceil ka opposite, floor par layega 
console.log(Math.round(10.9)); // .5 ya .5 se jyaega par ceil ki tarah act karega
console.log(Math.round(10.3)); // .4 ya .4 se kam par floor ki tarah act karega
console.log(Math.trunc(15.4856)); // It will remove the decimal part
console.log(Math.pow(10, 3)); // Power chadata hai
console.log(Math.max(500, 30, 56, 78,56)); // Max values return karta hai and multiple arguements accepts karta hai
console.log(Math.min(500, 30, 56, 78,56)); // Min value return karta
console.log(Math.random()); // Generate 0 to 1 randoms values
console.log((5.4545).toFixed(2)); // Decimal ke baad kitne digits chaiye
console.log(Math.sqrt(25)); // Square Root
console.log(Math.cbrt(27)); // Cube Root
console.log(Math.PI); // Pi is a value not a function




console.log("OTP Generator");
let a = (Math.floor(Math.random()*5000))+1000; // 1000 To 5000
console.log(a);