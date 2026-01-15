let prompt = require("prompt-sync")();

// For Loop
let n = 5
for (let i = 0; i <= n; i++) {
    console.log("Hi...");
}

// Intialize/Declare, Coniditon, Chnage all are optional in syntax
for (let i = 0; i <= n;) { // Infinite Loop
    console.log("Hi...");
}
for (let i = 0;;) { // Infinite Loop
    console.log("Hi...");
}
for ( ;;) { // Infinite Loop
    console.log("Hi...");
}

n=5
for(let i=n; i<n; i--){
    console.log(i);
}

