console.log("Jenny Graft");
console.log("Chapter 2 Homework\n");

console.log("Looping a Triangle");

for (let i = 1; i <= 7; i++){
    console.log("#".repeat(i));
}

console.log("\nFizzBuzz");
console.log("Just Fizz or Buzz.")

for (n = 1; n <= 100; n++){
    if (n % 3 == 0){
        console.log("Fizz")
    }
    else if (n % 5 == 0){
        console.log("Buzz")
    }
    else
    console.log(n)
}

console.log("Including FizzBuzz as well.")

for (n = 1; n <= 100; n++){
    if (n % 3 == 0){
        console.log("Fizz")
    }
    if (n % 5 == 0){
        console.log("Buzz")
    }
    if (n % 3 == 0 && n % 5 == 0){
        console.log("FizzBuzz")
    }
    else
    console.log(n)
}

console.log("\nUnsure how to get the output to include FizzBuzz as an answer, code not correct right now.")