// THEME: Iterables
// correct implementation

const range: any = {
  from: 1,
  to: 5,
  [Symbol.iterator]: function () {
    return {
      current: this.from,
      last: this.to,
      next() {
        if(this.current <= this.last) {
          return { done: false, value: this.current++}
        }
        return { done: true };
      }
    }
  }
}

for(let num of range) {
  console.log(num);
}

