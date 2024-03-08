const obj = {}
const mobil = {
    //Property // menyimpan value
    merek:"Toyota",
    warna:"Hitam",

    // Method // menjalankan instruksi
    hello(){console.log("Hello")},
    world() {console.log("world")},
}

//return
function penjumlahan(a,b) {return a+b};
console.log(penjumlahan(1+1));

// perbedaan method property // ()
console.log(mobil.hello());
console.log(mobil.merek);

//arr
const arr = ["red","yellow","blue"];
arr.push("green"); // menambahkan value ke index terakhir
arr.unshift("pink"); // menambahkan value ke index pertama
arr.pop() // menghapus element index terakhir
arr.shift() // menghapus element index pertama

arr.splice(1,0,"putih");
//param1 = lokasi index
//param1 = banyak value yang ingin dihapus
//param1 = value baru yang ingin ditambahkan

arr.fill("hitam",1,2);
//param 1 = value yang me-replace
//param1 = lokasi index
//param1 = banyaknya yang di replace -1

console.log(arr);

//fillter & map
console.log(
arr.filter((value)=>value=="red"), // loop return [] berisi value yang dicari
arr.map((value)=>value=="red"?"merah":value)) // loop if kondisi terpenuhi return sesuatu(merah) else value(value) // lalu kembailkan [return dari kondisi sebelumnya]

//sort
const num = [2,4,6,7,8,10,12,12,16];
console.log(num.sort())
console.log(num.sort((a,b)=> b-a )) //desc
console.log(num.sort((a,b)=> a-b )) //asc

//foreach
num.forEach((valueOfArray,idx,thisArray) =>{
    //loop something use paramett
    console.log(valueOfArray);
    console.log(idx);
    if(idx==0) console.log(thisArray);
});
console.log(num)
console.log(num.findIndex((value)=>value==12))

//foreach return findIndex value yang dicari lebih dari 1
function findAllIndex(array,...comparator) {
    let temp = [];
    comparator.forEach((comparatorValue)=>{
        array.forEach((v,i)=>{
            if(v==comparatorValue)temp.push(i)
        })})
    return temp.sort((a,b)=>a-b)
}

console.log(findAllIndex(num,12,2))

//reduce
console.log(num.reduce((valueOfIndexPlus0, valueOfIndexPlus1)=>{
    return valueOfIndexPlus0+valueOfIndexPlus1;
}))

//closure
function closureGreeting(name) {
    const defaultMsg = "hello ";
    return () => defaultMsg + name ;
}
const greetDavid = closureGreeting("David");
console.log(greetDavid()); // Manggil greetDavid dgn ()

//currying
function multiplier(factor) {
    return (num) => factor*num
}
const multiplier5 =multiplier(5);
console.log(multiplier5(4));

//recursive
const countdown = (fromNum) => {
    console.log(fromNum);
    let nextNum = fromNum-1
    if(nextNum>0)countdown(nextNum);
}
countdown(9);

//Faktorial
function factorial(num) {
    if(num==1)return 1
    else return num*factorial(num-1)
}
console.log(factorial(3));