// Function Sequance
let result;
function greet(str="") {result = str}
function hello() {greet("hello")}
function arigatou() {greet("arigatou")}

//
const display = (something) => console.log(something);
//
const calculator = (a=0,b=0) => a+b;

let result2 = calculator(2,3);
display(result2);

//
const calculator2 = (a=0,b=0) => {
    let res = a+b;
    display(res);
}
calculator2(4,6);

//Async
console.log("task1");
setTimeout(() => {
    console.log("task2");
}, 100);
console.log("task3");

//Promise
let myPromise = new Promise(function(resolve, reject) {
    
    setTimeout(() => {
        let bool = true
        if(bool)resolve("success")
        else reject("error")
    }, 1000);
    });
    
myPromise
.finally(()=>console.log("Finally"))
.then((res)=>console.log(res))
.catch((err)=>console.log(err))

let bool = "a"==="A";
console.log(bool);

//fetch
fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json().then(user=>console.log(user)))