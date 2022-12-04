// Add "async" keyword to generator function
// inside async iterator "await" keyword can be used as in any other async function
// value from generator.next() should be awaited with "await" keyword otherwise you will get the promise and not a value

// async range example
let range = {
  from: 1,
  to: 5,
  async* [Symbol.asyncIterator]() {
    for (let value = this.from; value <= this.to; value++) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      yield value;
    }
  }
};

(async () => {
  for await (let value of range) {
    console.log(value);
  }
})();