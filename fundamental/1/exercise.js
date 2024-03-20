// Area of rectangle
function rectangleArea(p,l) {
 console.log(p*l);
}

// Perimeter of rectangle
function rectanglePerimeter(p,l) {
    console.log(2*(p+l));
}

//find diameter, circumference and area of circle
function circle(radius) {
    const circleDiameter = radius*2
    const circleCircumference = Math.PI *circleDiameter
    const circleArea = Math.PI * radius**2
    console.log(`Diameter = ${circleDiameter}`)
    console.log(`Circumference = ${circleCircumference}`)
    console.log(`Area = ${circleArea}`);
}

//find angle of triangle
function angleOfTriangle(angle1,angle2) {
    console.log(180-angle1-angle2);
}

// Difference between date
function DifferenceBetweenTime(time1,time2) {
    let hasil = (time1-time2)
    if(hasil<0){hasil*=-1}
    hasil = hasil / (3600 * 24 *1000)
    console.log(hasil)
}

// Convert days to years months and days
function daysConverter(days) {
let years;
let months;
if(days/365 >=1){
    years = Math.floor(days/365);
    days = days%365
} else {years = 0}
if(days/30 >=1){
    months = Math.floor(days/30);
    days = days%30
} else {months=0}
console.log(`${years} year, ${months} month, ${days}day`)
}

rectangleArea(5,3);
rectanglePerimeter(5,3);
circle(5);
angleOfTriangle(80,65);
let t1 = new Date("1-22-2022")
let t2 = new Date("1-20-2022")
DifferenceBetweenTime(t1,t2)
daysConverter(800);
let a=1