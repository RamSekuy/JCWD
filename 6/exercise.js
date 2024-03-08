const calculateStudent = (arr=[{}])=> {
    let temp1 =[];
    let temp2 =[];
    arr.forEach((e,i)=>{
        temp1.push(e.score)
        temp2.push(e.age)
    })
    temp1.sort((a,b)=>a-b)
    temp2.sort((a,b)=>a-b)

    const result = {};

    result.score ={
        highest: temp1[temp1.length-1],
        lowest: temp1[0],
        avarage: temp1.reduce((sum,num)=>sum+num)/temp1.length
    }

    result.age ={
        highest: temp2[temp2.length-1],
        lowest: temp2[0],
        avarage: temp2.reduce((sum,num)=>sum+num)/temp2.length
    }
    return result;
}

//2
class Product{
    name ="";
    price= 0;

    constructor(name,price){
        this.name = name
        this.price = price
    }
}

class Transaction{
    total = 0;
    product={
        allPrductData:[],
        quantity: 0
    };
    addToCart(prod){
        this.product.push = prod
        this.quantity +=1;
    };
    checkout(){return this};
    showTotal(){
        this.total = 0;
        this.product.allPrductData.forEach((e)=>{
            this.total += e.price;
        })
        return this.total;
    }


    constructor(arrayOfProduct=[]){
        this.product.allPrductData = arrayOfProduct
        this.product.quantity = arrayOfProduct.length
        arrayOfProduct.map((value)=>{
            this.total+= value.price
        })
    }
}

const transaction1 = new Transaction([new Product("keyboard",80000),new Product("mouse",90000)]);
console.log(transaction1.checkout())

const studentGroup = new Array();
class Student {
    constructor(name,email,age,score){
        this.name = name
        this.email = email
        this.age = age 
        this.score = score
    }
}

function generateStudent(maxStudent) {
    let temp = [];
    const random = ()=>Math.ceil(Math.random()*9);
    for (let i = 0; i < maxStudent; i++) {
        let tempNum = random();
        const student = new Student(tempNum,`${tempNum}@gmail.com`,random()+""+random(),random()*random());
        temp.push.student
    }
    return temp;
}

console.log(generateStudent(1))
