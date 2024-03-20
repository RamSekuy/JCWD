var join = function(arr1=[], arr2=[]) {
    arr2.forEach(element => {
        let bool = arr1.findIndex((o)=>o.id==element.id);
        if(bool!=-1){
            for (const [key,value] of Object.entries(element)) {
                arr1[bool][key]=value;
            }
        } else {
            arr1.push(element)
        }
    });
    return arr1.sort((a, b) => order[a.id] - order[b.id])
}