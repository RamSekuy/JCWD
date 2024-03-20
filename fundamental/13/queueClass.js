class QueueExecuter {
    #queue = []
    get queue(){return this.#queue}

    addOrder(order=""){
        this.#queue.push(order)
        // console.log(this.#queue);
    }

    #promise(){
        const promise = new Promise((resolve,reject)=>{
        if(this.#queue.length<1)reject("Queue kosong")
            const time = Math.ceil(Math.random()*10)
            setTimeout(() => {
                resolve({order:this.#queue[0],time})
                this.#queue.shift();
            }, time*1000);
        })
        return promise;
    }

    async process(){
        while (this.#queue.length) {
            console.log(`Processing...`)
            try{
                const prom = await this.#promise()
                console.log(`${prom.order} Done in ${prom.time} Minutes`);
            }
            catch(err){console.log(err)}
        }
    }
}

export default QueueExecuter