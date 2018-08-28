/**************************************************
 
 Chapter 2 notes and examples

***************************************************/

/**************************************************

CONSTANT (const) is used when the binding will not change.
LET (let) is used when the binding might change.

***************************************************/

let square = 10;

function myFun(a) {
    let square = a * a;
    return square;
}

console.log(myFun(5));

console.log(`The square of 5 is ${myFun(5)} and square is ${square}.`);

/**************************************************

repeating string:

aaaa
aaa
aa
a

***************************************************/

console.log("'a' repeating string.")

for (i = 4; i >= 1; i--){
    console.log("a".repeat(i));
}

/**************************************************

want:

aaaaaa
aaaa
aa
aaaa
aaaaaa

***************************************************/
console.log("Incomplete")

for (i = 6; i >= 2; i = i - 2){
    console.log("a".repeat(i));
}

console.log("Completed")

const lineLengths = [6, 4, 2, 4, 6]

for (let i = 0; i < lineLengths.length; i++){
    console.log("a".repeat(lineLengths[i]));
}

