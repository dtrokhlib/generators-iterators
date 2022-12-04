// THEME: Iterables
// correct implementation
// Self-iterating example
// the downside that in this case this is not possible to have multiple parallel iterations

const range2: any = {
  from: 1,
  to: 3,
  [Symbol.iterator]: function () {
    this.current = this.from;
    this.last = this.to;

    return this;
  },
  next() {
    if (this.current <= this.last) {
      return { done: false, value: this.current++ }
    }
    return { done: true };
  }
}

for (let num of range2) {
  console.log(num);
}

