function* gen() {
  let result = yield "2 + 2 = ?";
  console.log(result);
}

let generator = gen();
generator.next();
generator.next(4 as any);

let generator2 = gen();
generator2.next();
setTimeout(() => {
  generator2.next(4 as any);
}, 1000)