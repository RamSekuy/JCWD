class Nodes {
  element;
  next;
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  head;
  size;
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    const node = new Nodes(element); //buat instance node
    let current; // value saat ini

    if (this.head == null) {
      //apabila heda kosong, maka node akan menjadi value head
      this.head = node;
    } else {
      //apabila head tidak kosong, cari sampai current.
      // next = null
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      //   pada saat current.next == null ({false}), maka node akan diletakkan
      current.next = node;
    }
    this.size += 1;
  }

  printList(){
    let curr = this.head;
    while (curr) {
      console.log(curr.element);
      curr = curr.next;
    }
  }
  
  removeAt(i=0){
    if(i<0||isNaN(i)||i>this.size) return console.log("Enter valid index");

    let curr = this.head;
    let prev = curr;

    //Delete
    if(i==0)this.next = curr.next
    else{
      curr = this.next

      for (let idx = 0; idx < i; idx++) {
        prev = curr
        curr = curr.next;
      }

      prev.next = curr.next;

    }
    this.size -=1
    return curr.element

  }
}

const linklist1 = new LinkedList();
linklist1.add(1);
linklist1.add(2);
linklist1.add(3);
linklist1.add(4);
linklist1.add(5);
linklist1.printList()