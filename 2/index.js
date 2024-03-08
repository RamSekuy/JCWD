let age = 21;
// if (age == 17) {
//     // Block of code milik if
//     console.log("Kamu bisa buat KTP");
// } else if(age > 17){
//     // Block of code milik else if
//     console.log("Kamu sudah punya KTP");
// } else {
//     // Block of code milik else
//     console.log("Kamu belum bisa buat KTP");
// }

// // and &&
// // or ||

// if (age >=17 && age <= 20) {
//     console.log("Kamu bisa buat KTP");
// } else if(age >=21 && age <= 28){
//     console.log("Kamu sudah punya KTP");
// } else if (age >=29){
//     console.log("Penggantian KTP");
// } else {
//     console.log("Kamu belum bisa buat KTP");
// }

// Switch case
let name = "Budi";

switch (name) {
    case "Budo":
        console.log("Nama kamu Budo")
        break;
    case "Budi":
        console.log("Nama kamu Budi")
        break;
    default:
        console.log("Nama kamu Budi")
        break;
}

// logical operator negation
let bool = true;
const reverseBool = !bool;
console.log(reverseBool)

// tenary operator
bool? console.log("betul"):console.log("salah");
//condition ? block of code (If condition true) : block of code (else) ; 

// looping
for (let i = 0; i < 3; i++) {
    console.log(i);
}

//while
let i = 0;
while(i<3){
    console.log(i);
    i++
}

// do while
i=1
do{
    console.log(i);
    i++
}while(i<3)

//
for (let i = 1; i < 10; i++) {
    if (i%5===0) {
        break;
    }
    console.log(i)
}

for (let i = 1; i < 10; i++) {
    if (i%2===0) {
        continue;
    }
    console.log(i)
}

// faktorial
let input = 6;
let temp = 1;

for (let i = 1; i <= input; i++) {
    temp *= i;
    console.log(temp);
}   console.log(temp)