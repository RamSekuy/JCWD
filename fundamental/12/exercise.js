function pascal(h) {
    let result = []; 
    let arr = [];
    for (let i = 0; i < h; i++) {
        if(i==0){
            arr.unshift(1);
            result.push(arr);
            continue;
        }
        let tempArr = [];
        arr.forEach((e,i,s)=>{
            if(!arr[i-1]) {
                tempArr[i]=e
            } else {
                tempArr[i]=e+s[i-1]
            }
        })
        tempArr.push(1);
        arr = tempArr;
        result.push(arr)
    }
    return result
}
console.log(pascal(5));

function profit(prices) {
    const profit = [];
    prices.forEach((e,i,s)=>{
    let dayBuy = i+1;
        s.forEach((e2,i2)=>{
            let daySell = i2+1
            if(i2>i){
                if(e<e2){
                    profit.push({
                        dayBuy,
                        daySell,
                        buy:e,
                        sell:e2,
                        profit: e2-e
                    })
                }
            }
        })
    })
    console.log(profit);
    let high = {profit:0};
    profit.forEach((e)=>{
        if(high.profit<e.profit)high = e;
    })
    if (high.profit==0) {
        return 0
    }
    console.log(`Buy on day ${high.dayBuy} (Price: ${high.buy})`);
    console.log(`Buy on day ${high.daySell} (Price: ${high.sell})`);
    console.log(`Profit: ${high.profit}`);
    return high.profit
}
const ex = [7,1,5,3,6,4]
profit(ex);

function romanToNum(s) {

    const sym = { 
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let result = 0;

    for (i=0; i < s.length; i++){
        const cur = sym[s[i]];
        const next = sym[s[i+1]];

        if (cur < next){
            result += next - cur // IV -> 5 - 1 = 4
            i++
        } else {
            result += cur
        }
    }

    return result; 
};

console.log(romanToNum("V"));

function majorityArr(arr=[]) {
    const uniq = new Set(arr)
    let high = [];
    uniq.forEach((e)=>{
        const long = arr.filter(el=>el==e)
        if(high.length<long.length) high = long;
    })
    return high[0];
}
console.log( majorityArr([2,2,1,1,1,2,2]));