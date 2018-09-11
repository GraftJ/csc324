console.log("Jenny Graft");
console.log("Chapter 3 Homework\n");

console.log("Minimum");

function min(x, y) {
    if (x < y) {
        return x;
    } else {
        return y;
    }
}

console.log(min(0, 10));
console.log(min(0, -10));

console.log("\nRecursion");

function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-2));

console.log("\nBean Counting");
console.log("Count only 'B's in a string.");

//Hint

// const myString = "BaraBBasButtb"
// let counter = 0;
// for (let i = 0; i < myString.length; i++) {
//     if (myString[i] == "B") {
//         counter++;
//     }
// }
// console.log(counter);

function countBs(string) {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == "B") {
            counter++;
        }
    }
    return counter;
}

console.log(countBs("BBC"));

console.log("\n Count any Character given.");

function countChar(string, chr) {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == chr) {
            counter++;
        }
    }
    return counter;
}

console.log(countChar("kakkerlak", "k"));