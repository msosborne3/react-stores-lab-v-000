const Store = require('./Store');

class CounterStore extends Store {
  // Your implementation here.
  // Hint: extend the Store class!
  constructor() {
    super(0);
  }

  increment() {
    const nextState = this.getState() + 1;
    this.setState(nextState);
  }

  decrement() {
    const nextState = this.getState() - 1;
    this.setState(nextState);
  }
}

module.exports = new CounterStore();
