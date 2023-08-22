const Locomotive = require('./objects');
// const locomotive = new Locomotive()

// console.log('this is locomotive', locomotive.customSort([1, 2, 4, 3, 1, 0, -1, -10, -2, -3]));
class MyClass {
  constructor() {
    this.locomotive = new Locomotive();
  }

  logMessage(message) {
    console.log('this is message:', message);
  }
}

class SecondClass {
  constructor() { // this is the first thing ran whenever an instance of this class(any) is created.
    this.myClass = new MyClass();
  }

  write(message) {
    this.myClass.logMessage(message);
  }
}

const secondClass = new SecondClass();

secondClass.write('here i am')