// USE GENERATOR (yield as iterator)
const range = {
  from: 1,
  to: 5,
  *[Symbol.iterator]() {
    for(let value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
};
let str = '';
for (let num of range) {
  str += num;
}
console.log(str, [...range]);