console.log("Jenny Graft");
console.log("Chapter 2 Homework\n");

console.log("Looping a Triangle");

for (let i = 1; i <= 7; i++) {
    console.log("#".repeat(i));
}

console.log("\nFizzBuzz");
console.log("Just Fizz or Buzz.");

for (n = 1; n <= 100; n++) {
    if (n % 3 == 0) {
        console.log("Fizz")
    }
    if (n % 5 == 0 && n % 3 !== 0) {
        console.log("Buzz")
    }
    if (n % 3 !== 0 && n % 5 !== 0) {
        console.log(n)
    }
}

console.log("\nIncluding FizzBuzz as well.");

for (n = 1; n <= 100; n++) { 
    if (n % 15 === 0) {
        console.log("FizzBuzz")
    }
    else if (n % 3 === 0) {
        console.log("Fizz")
    }
    else if (n % 5 === 0) {
        console.log("Buzz")
    }
    else {
        console.log(n)
    }
}

console.log("\nThis code comes from Dr. Whites solution and allows what I was originally" +
    " trying to do work.\nHowever the book offers this solution:");

for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
}

console.log("\n This works because at the end of the loop it will eather print" +
    " out the output wich can be 'Fizz,' 'Buzz,' or 'FizzBuzz' becasue the output is" +
    " empty unless either or both 'Fizz' or 'Buzz' is added to the empty string." +
    " Otherwise if there is nothing in the output it will print out the number.");

console.log("\n Chessboard");

let size = 8;

let chessboard = "";

for (let i = 0; i < size; i++) {
    for (let x = 0; x < size; x++) {
        if ((i + x) % 2 == 0) {
            chessboard += " ";
        } else {
            chessboard += "#";
        }
    }
    chessboard += "\n";
}

console.log(chessboard);