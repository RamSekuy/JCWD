class Queue{
    #container = [];

    enqueue(e){
        return this.#container.push(e)
    }

    dequeue(){
        return this.#container.shift()
    }

    getElements(){
        return this.#container;
    }
}

const queue = new Queue()
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.getElements());
queue.dequeue()
console.log(queue.getElements());
queue.dequeue()
queue.dequeue() // gk error meskipun [] kosong
console.log(queue.getElements());
