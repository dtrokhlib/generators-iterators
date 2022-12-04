// string has character iterator
let str = 'this is my string';
for(let character of str) {
  console.log(character);
}

// iterator can be called explicitly
let explicit = '!POP!';
let iterator = explicit[Symbol.iterator]();

while(true) {
  let iteration = iterator.next();
  console.log(iteration);
  if(iteration.done) {
    break;
  }
}