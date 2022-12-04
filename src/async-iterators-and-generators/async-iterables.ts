// User [Symbol.asyncIterator] instead of [Symbol.Iterator]
// next() function should return a promise, can be achieved with adding "async" keyword to the next() function
// SPREAD SYNTAX (...arr) does not work for asyncIterator

let rangeAsync = {
  from: 1,
  to: 5,
  [Symbol.asyncIterator]() {
    return {
      current: this.from,
      last: this.to,
      async next() {
        if(this.current <= this.last) {
          return { done: false, value: this.current++};
        }
        return { done: true };
      }
    }
  }
};

(async () => {
  for await (let value of rangeAsync) {
    console.log(value);
  }
})();