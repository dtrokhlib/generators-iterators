function* numberGenerator() {
  for(let i = 48; i <= 57; i++ ) yield i;
}

function* uppercaseLatinGenerator() {
  for(let i = 65; i <= 90; i++ ) yield i;
}

function* lowercaseLatinGenerator() {
  for(let i = 97; i <= 122; i++ ) yield i;
}

function* charactersList() {
  yield* numberGenerator();
  yield* uppercaseLatinGenerator();
  yield* lowercaseLatinGenerator();
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function strongPasswordGenerator(length) {
  let characterList = [...charactersList()];
  let str = '';
  for(let i = 0; i < length; i++) {
    let randomIndex = getRandomNumber(characterList.length);
    let charCode = characterList[randomIndex];
    str += String.fromCharCode(charCode);
  }
  return str;
}

console.log(strongPasswordGenerator(5));
console.log(strongPasswordGenerator(10));
console.log(strongPasswordGenerator(15));
console.log(strongPasswordGenerator(20));
console.log(strongPasswordGenerator(25));