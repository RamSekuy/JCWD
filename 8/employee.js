class Employee {    
name
umur
alamat
#sale1
#sale2
#workHour
#workHourEachDay = [];

    constructor(name="",umur=0,alamat="",workHour=0){
        this.name = name;
        this.umur = umur;
        this.alamat = alamat;
        this.#workHour = workHour;
        if(workHour!=0)
        this.#workHourEachDay.push(workHour)
    }
    get name(){return this.name}
    addWorkHour(hour=0){
        if(isNaN(hour)) return;
        this.#workHour += hour;
        this.#workHourEachDay.push(hour);
        return this.#workHour
    }

    #tampil(num){
        console.log(num)
    }

    salary(){
        this.#workHourEachDay.forEach((e,i)=>{
        let wh = e-6
        let total = 0;
        if(wh<0){
            wh=0;
            const salary = this.#sale1*6+ this.#sale2 *wh
            this.#tampil(salary);
            total += salary
        }
        else {
            const salary = this.#sale1*wh
            this.#tampil(salary)
            total += salary
        }})}

    saleSet(a=0,b=0){
        this.#sale1 = a
        this.#sale2 = b
        delete this.saleSet;
    }

    salaryEachDay(){
        this.#workHourEachDay.forEach((e,i)=>{
            console.log(e)
        })
    }
}

class PartTime extends Employee{
    constructor(name="",umur=0,alamat="",workHour=0){
        super(name,workHour);
        this.saleSet(50000,30000)
    }
}

class FullTime extends Employee{
    constructor(name="",umur=0,alamat="",workHour=0){
        super(name,umur,alamat,workHour);
        this.saleSet(50000,75000);
    }
}

const partEmp1 = new PartTime("Naruto",50,"",5)
const fullEmp1 = new FullTime("Saske",50,"",1)
partEmp1.addWorkHour(1);
partEmp1.addWorkHour(1);
partEmp1.addWorkHour(1);
partEmp1.salary();
fullEmp1.salary();