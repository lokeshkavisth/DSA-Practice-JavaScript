class Queue {
  constructor() {
    this.items = [];
  }

  queue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();
console.log(queue.isEmpty());

queue.queue(20);
queue.queue(30);
queue.queue(10);
queue.print();

queue.dequeue();
queue.print();

queue.peek();
queue.print();

queue.size();
queue.print();
