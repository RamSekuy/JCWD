let arr = ["isi array", "isi ke 2"];
let arr2 = new Array("isi array", "isi ke 2");

console.log(arr);
console.log(arr2);

console.log(arr[0]);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr[2] = "arr index ke 2";
arr.push("isi arr yg baru ditambahkan", "isi arr yang baru ditambahkan ke 2");
arr.push(...arr2);

console.log(arr);

// scope
let greating = "hey";
log(greating);
function log(item) {
    console.log(item);
    let woi = "woi";
}
// console.log(woi)
/**/
function perkalian(a,b=a) {
    return a*b;
}
console.log(perkalian(5))