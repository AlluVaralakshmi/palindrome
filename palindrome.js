const readlineSync = require('readline-sync');

const string = readlineSync.question("Enter a string: ");
let string1 = "";

for (let i = string.length - 1; i >= 0; i--) {
    string1 += string[i];
}

if (string === string1) {
    console.log("It's a palindrome");
} else {
    console.log("It's not a palindrome");
}
