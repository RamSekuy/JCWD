const objProduk1 = {
    nama:"Sepeda",
    warna:"biru",
    harga:"20000",
    greet() { return "hai"}
}

const objProduk2 = {
    nama:"raket",
    warna:"hitam",
    harga:"30000"
}

//object = multi value
//class = template object

// console.log(objProduk1.nama);
// console.log(objProduk1.greet());

//class declaration
class User {
    greeting(){
        console.log("hello world");
    }
}
//class expression
const User2 = class{
    name = "";
    greeting(){
        console.log("hello world");
    }
    #email = "";// Private
}

const user1 = new User();
user1.greeting();

//
class DB {
    static #connection = "";

    static #initializeConnection(){
        const randomNum = Math.ceil(Math.random()*100);
        DB.#connection = `New Database Connection ${randomNum}`
    }

    static getConnection(){
        if(!DB.#connection) DB.#initializeConnection();
        return DB.#connection;
    }
}
console.log(DB.getConnection()); 

//Get Set

const obj01 = {
    fName: "",
    lName: "",

    get fullname(){
        return this.fName + " " + this.lName
    },
    set fullname(value){
        const splited = value.split(" ");
        this.fName = splited[0];
        this.lName = splited[1];

    }
}

obj01.fullname = "Naruto Uzumaki"
console.log(obj01.fullname)
console.log(obj01)

// Encapsulation

class Employee {
    #name;
    constructor(name){
        this.#name = name;
    }

    get employeeName(){
        return this.#name;
    }
    set employeeName(value){
        console.log(typeof value,typeof value !== "string")
        if(typeof value !== "string") {
            console.log("woe")
            throw new Error("Bukan String")
        }
        this.#name = value;
    }
}

const employee1 = new Employee("Naruto")
console.log(employee1.employeeName)

employee1.name = "1";
console.log(employee1.employeeName)
