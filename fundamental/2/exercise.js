//Celcius to Farenheit
function celciusToFarenheit(temperature) {
    return temperature*9/5+32
}

//Check even or odd number
function evenOrOdd(number) {
    if(number%2==0){
        console.log(`${number} is even number`)
    }   else    {
        console.log(`${number} is even number`)
    }
}
// Check prime number or not
function primeOrNot(number) {
let i = 2;
let isPrime = true;
    while (i<number) {
        if(number % i ==0){
            isPrime = false
            break;
        }
        i++
    }
    if(isPrime){
        console.log("prime")
    } else {
        console.log("not prime")
    }
}
primeOrNot(4);

// Sum 1 to N
function oneToN(N) {
    let hasil = 0;
    for (let i = 1; i <=N; i++) {
        hasil = hasil+i
    }
    console.log(hasil)
}
oneToN(4);