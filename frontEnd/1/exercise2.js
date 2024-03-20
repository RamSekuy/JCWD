console.log("p");
const table = document.getElementById("mainTable");

class TableContent{
    constructor(name,img,food,group=""){
        this.name = name.split(" ");
        this.food = food.split(" ");
        this.img = img;
        this.group = group.toLowerCase();
    }
}

const run = async()=>{
const tableContent = [];
let data = await fetch('https://jsonplaceholder.typicode.com/photos')
data = await data.json()
data.forEach((e,i)=>{
    let isVertebrate
    if(e.id%2==0) isVertebrate = "vertebrate";
    else isVertebrate = "inVertebrate"
    tableContent.push( new TableContent(
        e.title,
        e.url,
        e.title.split(" ").reverse().join(" "),
        isVertebrate
    ))
})
isiTabel(tableContent)
}
function isiTabel(arrContent){   
for(let i=0; i<arrContent.length-1; i++){
    let e = arrContent[i]
    console.log(e.group);
    let group=``;
    if(e.group=="vertebrate") group+=`
    <input disabled type="radio" name="vertebrate${i}" id="vertebrate${i}" checked> <label for="vertebrate">Vertebrate</label>
    <input disabled type="radio" name="vertebrate${i}" id="invertebrate${i}"> <label for="invertebrate">Invertebrate</label>
    `
    else if(e.group=="invertebrate") group+=`
    <input disabled type="radio" name="vertebrate${i}" id="vertebrate${i}"> <label for="vertebrate${i}">Vertebrate</label>
    <input disabled type="radio" name="vertebrate${i}" id="invertebrate${i}" checked> <label for="invertebrate${i}">Invertebrate</label>
    `

    const content =
    `
    <tr>
    <td>${i+1}</td>
    <td><img src="${e.img}" alt="Gambar"></td>
    <td><h4>${e.name[0]} <sub>${e.name[1]}</sub></h4></td>
    <td><h4>${e.food[0]} <sup>${e.food[1]}</sup></h4></td>
    <td>
        ${group}
    </td>
    </tr>
    `
    table.querySelector("tbody").innerHTML+=content;
}}
run()