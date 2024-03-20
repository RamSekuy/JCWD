class Stack{
    #maxSize
    #container = []
    
    constructor(max=10){
        this.#maxSize = max
    }

    #isFull(){
        return this.container.length >= this.#maxSize;
    }
    #isEmpty(){
        return this.container.length == 0;
    }

    get container(){
        return this.#container;
    }

    push(e){
        if(this.#isFull()){
            console.log("Stack Overflow");
            return
        }
        this.#container.push(e)
    }

    pop(){
        if (this.#isEmpty()) {
            console.log("Stack Underflow");
            return
        }
        this.#container.pop();
    }
}

const stack = new Stack(3);
console.log(stack.container);

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.container);

stack.push(4); // Stack Overflow

stack.pop()
stack.pop()
stack.pop()

console.log(stack.container);

stack.pop() // Stack Underflow