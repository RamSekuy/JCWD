function convertExcel(columnSheet) {
    const value = columnSheet.split("")
      .reduce((prev, next) => prev * 26 + parseInt(next, 36) - 9, 0);
    return value;
  }
  
  //ParseInt 36 huruf jadi angka
  /*
    0-9 = 0-9
    A-Z = 10 - 36
  */
const input = convertExcel("ACB");
const input2 = convertExcel("ABC");
console.log(input);
console.log(input2);

function findNotDuplicate(arr=[]){
    return arr.filter((value)=>arr.indexOf(value) === arr.lastIndexOf(value))
}

console.log(findNotDuplicate());
console.log(findNotDuplicate([1,2,1,5,6,6,7,7]));

function anagramCheck(text1="",text2=""){
    const val1 = text1.split("").reduce((prev,next) => prev+parseInt(next,36),0)
    const val2 = text2.split("").reduce((prev,next) => prev+parseInt(next,36),0)
    if(val1==val2){return true}
    return false
}
console.log(anagramCheck("Omen","Nemo"))

function step(num=0) {
    if(num<1)return 0;
    return fibonacci(num+1)
}
function fibonacci(n) {
    return n < 1 ? 0
         : n <= 2 ? 1
         : fibonacci(n - 1) + fibonacci(n - 2)
 }
console.log(step(7))