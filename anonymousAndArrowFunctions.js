const numbers = [2, 13, 3, 7, 17, 5, 11, 19, 9];
const names = ["Eva", "Adel", "Cedric", "Dior", "Frank", "Bob"];
const fruits = ["pineapple", "kiwi", "banana", "pear", "cherry"];

/**
 *  - String tömböt a szavak hossza szerint rendezi és a rendezett tömböt adja vissza
 */
function sortByLength(strArray) {
  return strArray.sort((a, b) => a.length - b.length);
}

console.log(sortByLength(names));
console.log(sortByLength(fruits));

/**
 *  - String tömböt a szavak hossza szerint rendezi ABC sorrendbe és a rendezett tömböt adja vissza
 */
function sortByLengthAsc(strArray) {
  return strArray.sort();
}

console.log(sortByLengthAsc(names));
console.log(sortByLengthAsc(fruits));

/**
 * - számokat rendez a 15-től való távolság alapján és a rendezett tömböt adja vissza
 */
function sortFrom15(numberArray) {
  return numberArray.sort((a, b) => Math.abs(a - 15) - Math.abs(b - 15));
}

console.log(sortFrom15(numbers));

/**
 *  - String tömb mindegy elemének az elejére és végére egy csillagot tesz és visszaadja a módosított tömböt
 */
function addAsterisk(strArray) {
  return fruits.map((fruit) => `*${fruit}*`);
}

console.log(addAsterisk(names));
console.log(addAsterisk(fruits));

/**
 *  - számokat tartalmazó tömb 5 és 15 közötti elemeit adja vissza egy tömbben
 */
function between5And15(numberArray) {
  numbersBetween5And15 = numberArray.filter(
    (number) => number > 5 && number < 15
  );
  return numbersBetween5And15;
}

console.log(between5And15(numbers));

/**
 * - számokat tartalmazó tömb minden eleme páratlan-e. Visszatérési érték true vagy false
 * @returns boolean
 */
function isAllOdd(numberArray) {
  for (let i = 0; i < numberArray.length; i++) {
    const num = numberArray[i];
    if (num % 2 === 0) {
      return false;
    }
  }
  return true;
}

console.log(isAllOdd(numbers));

/**
 *  - számokat tartalmazó tömb tartalmaz-e páros elemet. Visszatérési érték true vagy false
 */
function hasEven(numberArray) {
  return !isAllOdd(numberArray);
}

console.log(hasEven(numbers));

/**
 * - számokat tartalmazó tömb elemeit összeszorozza és a szorzatot adja vissza
 */
function sigma(numberArray) {
  let product = 1;
  for (let i = 0; i < numberArray.length; i++) {
    product *= numberArray[i];
  }
  return product;
}

console.log(sigma(numbers));
