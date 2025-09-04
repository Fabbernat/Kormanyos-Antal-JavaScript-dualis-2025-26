const numbers = [2,13,3,7,17,5,11,19,9]
const names = ['Eva', 'Adel', 'Cedric', 'Dior', 'Frank', 'Bob']
const fruits = ['pineapple', 'kiwi', 'banana', 'pear', 'cherry']

/**
 *  - String tömböt a szavak hossza szerint rendezi és a rendezett tömböt adja vissza
 */
function sortByLength(strArray){
    return strArray.sort((a, b) => a.length - b.length);
}

/**
 *  - String tömböt a szavak hossza szerint rendezi ABC sorrendbe és a rendezett tömböt adja vissza
 */
function sortByLengthAsc(strArray){
    return strArray.sort();
}

/**
 * - számokat rendez a 15-től való távolság alapján és a rendezett tömböt adja vissza
 */
function sortFrom15(numberArray){
    return numberArray.sort((a, b) => Math.abs(a - 15) - Math.abs(b - 15));
}

/**
 *  - String tömb mindegy elemének az elejére és végére egy csillagot tesz és visszaadja a módosított tömböt
 */
function addAsterisk(strArray) {
    return fruits.map(fruit => `*${fruit}*`);
}

/**
 *  - számokat tartalmazó tömb 5 és 15 közötti elemeit adja vissza egy tömbben
 */
function between5And15(){
numbersBetween5And15 = numberArray.filter(number => number > 5 && number < 15);
    return numbersBetween5And15;
}

/**
 * - számokat tartalmazó tömb minden eleme páratlan-e. Visszatérési érték true vagy false
 * @returns boolean
 */
function isAllOdd(array){
    for (let i = 0; i < array.length; i++) {
        const num = array[i];
        if (num % 2 === 0) {
            return false;
        }
    }
    return true;
}

/**
 *  - számokat tartalmazó tömb tartalmaz-e páros elemet. Visszatérési érték true vagy false
 */
function hasEven(array){
    return !isAllOdd(array);
}

function sigma(array){
    let product = 1;
    for (let i = 0; i < array.length; i++) {
        product *= array[i];
        
    }
    return product;
}