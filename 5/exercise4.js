function triangle(height) {
    height+=1
    let max = 1;
    let tempNum = 1;
    for(let heightNow = tempNum; heightNow<height; heightNow++){
        let tempText ="";
        for(let word = 1; word <= max; word++){
            if(tempNum<10){
                tempText += "0"+tempNum+" "
                // console.log(tempNum)
            } else {
                tempText +=tempNum+  " "
            }
            tempNum++
        }
        max++
        console.log(tempText);
        tempText = "";
    }
}
triangle(4)

//5
function stringtSplit(text) {
    return text.split(" ")
}
