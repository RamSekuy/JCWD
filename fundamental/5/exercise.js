function arrStat(arr) {
    const obj ={};
    arr.sort((a,b)=>a-b)
    obj.lowest = arr[0];
    obj.heighest = arr[arr.length-1];
    obj.avarage = (arr.reduce((sum,num)=>sum+num))/arr.length
    return obj;
}
const exampleArr = [1,2,3,4,5,6,7,8,9,10]
console.log(arrStat(exampleArr));

const arrP = ["apple", "banana", "cherry", "date"]
function arrToText(arr) {
    let text ="";
    arr.forEach((value,index) => {
        if(index==arr.length-1){
            text += ` and ${value}`
        } else {
            text+= value+",";
        }
    });
    return text
}
console.log(arrToText(arrP))

//4
function arrPlus(arr1,arr2) {
    const result = [];
    arr1.forEach((value,index)=>{
        result.push(arr1[index]+arr2[index]);
    })
    return result
}

console.log(arrPlus([1,5,3],[3,2,1]));

//5
function pushConfirm(arr,newValue) {
    if(arr.indexof(newValue)==-1){
        return [...arr,newValue];
    } else {
        return arr;
    }
}

//7
