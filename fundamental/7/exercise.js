function equalObj(obj1={},...objs) {
    // Var penampung bool untuk di retrurn
    let bool = true

    // loop untuk param2 dan seterusnya
    objs.forEach((e)=>{
        if(Object.keys(obj1).length != Object.keys(e).length) return false
        //Loop obj1 sebanyak tiap key di obj1
        for (let [key, value] of Object.entries(obj1)) {
            // key = obj1 key
            // value = obj1 key

            //Check value di obj 2 sesuai dgn key di obj1
            if(value != e[key]) {
               bool = false;
               // Langsung loop untk check obj 1 dan 3 sama atau tidak;
               break;
            }
        }
    })
    return bool
}
const objA = new Object({name:"woe"});
console.log(equalObj({name:"name1"},{name:"name1"},{name:"name1"}))

//2

function equalKeyObj(obj1={},...objs) {
    // Var penampung bool untuk di retrurn
    let tempObj = {};

    // loop untuk param2 dan seterusnya
    objs.forEach((e)=>{
        //Loop obj1 sebanyak tiap key di obj1
        for (let [key, value] of Object.entries(obj1)) {
            // key = obj1 key
            // value = obj1 key

            //Check value di obj 2 sesuai dgn key di obj1
            if(value == e[key]) {
                //Memasukan 
                tempObj[key]=value;
            }
        }
    })
    return tempObj
}

console.log(equalKeyObj({a:1},{a:3 , b:2}))

//3

function fuseArr(arr1=[{}],arr2=[{}]) {
    const temp = [...arr1,...arr2]
    const arr = [];
    const uniqOb ={};
    let objName;
    for (let i in temp) {
        objName = temp[i]["name"];
        uniqOb[objName] = temp[i]
    }
    // console.log(uniqOb);
    console.log(uniqOb);
    console.log(Object.entries(uniqOb));
    for (const [key,value] of Object.entries(uniqOb)) {
        arr.push(value);
    }
    arr
    return arr
}

const arrStud1 = [
    { name: "Student 1", email : "student1@mail.com" },
    { name: "Student 2", email : "student2@mail.com" }
]

const arrStud2 = [
    { name: "Student 1", email : "student1@mail.com" },
    { name: "Student 3", email : "student3@mail.com" }
]
console.log(fuseArr(arrStud1,arrStud2));

//4
function keyValueSwitch(arr) {
    arr.forEach((e,i)=>{
        e
        const arrFromObj = Object.entries(e);
        arrFromObj
        const obj = {};
        arrFromObj.forEach((e2,i2)=>{
            obj[e2[1]] = e2[0];

        })
        console.log(obj)
        const result = []
        result.push(obj)
        result
    })
}


// console.log(
//     keyValueSwitch([
//        { name: "David", age: 20 }
//     ])
// )


//Triangle
function Triangle(h) {
    let text="";
    let num = 0;
        for (let i = 0; i < h; i++) {
        text ="";
            for(let j = h; j> num;j--){
                text+="*"
                
            }
        num++
        console.log(text)
        }

}

Triangle(5);

function factorial(n) {
    if(n==0)return 1
    return n*factorial(n-1)
}
console.log(factorial(5))

function triangle2(h) {
    let msg;
    let nanti = h-1;
    for (let i = 0; i < h; i++) {
        msg = "";
        for (let j = 0; j < h; j++) {
            if(j>=nanti){
                msg+="*"
            }else{
                console.log();
                msg+=" "
            }
        nanti--
        }
        console.log(msg)
    }
}
// triangle2(5);

Triangle(5);