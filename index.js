//answer 1
let a = 1;
let b = 2;
if (a < b){
console.log(b);
} else {
    console.log(a);
};

//answer 2
var c = "d";
if(c === "a"|| c === "e" ||c === "i"|| c === "o"|| c === "u") {
    console.log("vowel");
} else {
    console.log("consonant");
};

//answer 3
var d = "6";
if (d < 0) {
    console.log("negative");
} else if ( d > 0) {
    console.log("positive")
} else {
    console.log("zero")
};
//answer 4
var year = 2022;

if ( year % 4 === 0 && year % 4 !== 100 || year % 400 === 0) {
    console.log (" leap year");
} else {
    console.log (" not leap year");
}

//answer 5
var e = 70;
if (e <= 59) {
    console.log ("fail");
} else {
    console.log("pass");
};

//answer 6
var f = 21;
if (f % 2 === 0) {
    console.log ("even number");
} else {
    console.log ("odd number");
};

//answer 7
var g = 62
var h = 30

if (g>h) {
    let temp = g;
    g = h;
    h = temp;
}
console.log (g);

//answer 8
var j = 10;
if (j<0){
    console.log("negative");
} else if (j>0) {
    console.log("positive")
} else {
    console.log("zero");
}

if (j % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}