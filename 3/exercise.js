// Multiplication
function Multiplication(Num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${Num} x ${i}`);
    }
}

//Palindrome
function Palindrome(text) {
    text = text.trim()
    text = text.toLowerCase();
    text = text.split("");

    let temp = text.join()
    let temp2 = text.reverse().join()

    if(temp == temp2){
        console.log("Palindrome")
    } else {
        console.log("Not Palindrome")
    }
}
Palindrome("miam")

// cm to km
function cmToKm(cm){console.log(cm/100000);}
cmToKm(100000);

//String Search

//autoCapital
function autoCapital(text) {
    text.trim()
    let textArr = text.split("");
    console.log(textArr)
    textArr.forEach(e => {
        let tempArr = e.split("");
        tempArr[0].toUpperCase();
        tempArr.join()
    });
    textArr
}
autoCapital("woe woe")