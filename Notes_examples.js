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

console.log("\n")

console.log("'a' repeating string.")

for (i = 4; i >= 1; i--) {
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
console.log("\n")

console.log("Incomplete")

for (i = 6; i >= 2; i = i - 2) {
    console.log("a".repeat(i));
}

console.log("\n")

console.log("Completed")

const lineLengths = [6, 4, 2, 4, 6]

for (let i = 0; i < lineLengths.length; i++) {
    console.log("a".repeat(lineLengths[i]));
}

/****************************************************** 
 
Chapter 4

*******************************************************/
/******************************************************

Objects

******************************************************/

console.log("\n")

const car = {
    price: 55000,
    model: "tesla",
    makeNoise: function (noise) {
        console.log(`The ${this.model} goes ${noise}.`);
    }
};

//car.makeNoise("shhhhh");

car.price = 40000;

//console.log(car);

let car2 = car;
car.price = 50000;

//console.log(car2.price);

let x = 7;
let y = x;
x += 3;
console.log(y);
console.log(x);

/****************************************************

Arrays

*****************************************************/

console.log("\n")

const beans = [15, 3, 7, 8];
console.log(beans[2]);

console.log("\n")

for (elem in beans) {
    console.log(elem);
}

console.log("\n")

console.log(beans.length);
console.log(beans.hasOwnProperty("length"));
//beans.math = -3;

console.log(beans);

console.log(beans[0 + 2]);

console.log(car["price"]);

console.log("\n")

const cars = [
    {
        price: 55000,
        model: "lexus",
        made: "2018-09-04"
    },
    {
        price: 95000,
        model: "corvette",
        made: "2020-01-01"
    },
    {
        price: 150000,
        model: "tesla",
        made: "2017-10-01"
    }
];

console.log(cars[2].price);
//cars[0].fans = ["Jenny", "Homer"];

//console.log(cars[0].fans);

console.log("\n")

function beanSort(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
}

console.log(beans.sort(beanSort));

console.log("\n")

function byPrice(a, b) {
    if (a.price > b.price) return 1;
    if (a.price < b.price) return -1;
    return 0;
}

console.log(cars.sort(byPrice));

console.log("\n")

function byDate(a, b) {
    const aDate = new Date(a.made),
        bDate = new Date(b.made);
    if (aDate > bDate) return 1;
    if (aDate < bDate) return -1;
    return 0;
}

console.log(cars.sort(byDate));

console.log("\n");

myArray = [4, 5, 6, 7];
myArray.push(22);
console.log(myArray);

let myNumber = myArray.pop();
console.log(myNumber);
console.log(myArray);
console.log(myArray.shift());

myArray2 = [4, 5, 6, 7];
arr2 = [6, 7, 8, 9];
console.log(myArray2.concat(arr2));

console.log(myArray2
    .concat(arr2)
    .sort(
        (a, b) => { return a < b ? 1 : -1; }
    ));

console.log("\n");

const cars2 = [
    {
        price: 55000,
        model: "lexus",
        made: "2018-09-04"
    },
    {
        price: 95000,
        model: "corvette",
        made: "2020-01-01"
    },
    {
        price: 150000,
        model: "tesla",
        made: "2017-10-01"
    }
];

let myRandom = cars2.length * Math.random();
let car1 = cars2[Math.floor(myRandom)];

console.log(car1.model);

console.log(Math.floor(myRandom));

