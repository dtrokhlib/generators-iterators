// BASIC USAGE
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generateSequence();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

// USAGE AS ITERATOR
function* generateSequence2() {
  yield 1;
  yield 2;
  yield 3;
}

let generator2 = generateSequence2();
for(let val of generator2) {
  console.log(val);
}