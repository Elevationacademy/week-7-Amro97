class Queue{
    constructor(){
        this.queue = []
        this.length = 0
    }
    enqueue(x){
        this.queue.push(x)
        this.length++
    }
    isEmpty(){
        if(this.length)
        return false
        return true
    }
    peek(){
        return this.queue[0]
    }
    dequeue(){
        this.queue.unshift(0)
        this.length--
    }
}

let q = new Queue()
console.log(q.isEmpty())    //true
// q.print()                   //[]
q.enqueue(2)
console.log(q.isEmpty())    //false
q.enqueue(4)
// q.print()                   //[4,2]
console.log(q.peek())       //2
q.dequeue()
q.dequeue()
console.log(q.peek())       //null
console.log(q.isEmpty())    //true