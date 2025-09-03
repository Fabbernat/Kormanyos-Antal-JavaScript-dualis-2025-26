/* Hozz létre egy js fájlt, mely megoldja a az alábbi feladatokat.
Mindegyik feladatot függvénnyel old meg!

1. getOtosLotteryNumbers - Ötöslottó számokat generál le véletlenszerűen, melyeket egy tömbben ad vissza.
2. getSortedLotteryNumbers - paraméterként kapott tömböt növekvő sorrendbe rendezi, a rendezett tömböt visszaadja
3. getNumberOfHits - két paramétert kap, egy tömböt lottószámokkal és egy tömböt a tippekkel. Visszaadja, hogy a tippekből ány egyezett meg a lottószámokkal
4. getMonthlyLotteryArrayNumbers - négy hét lottószámait adja vissza egy tömbben, mely a heti lottószámok tömbjét tartalmazza (meghívja a getOtosLotteryNumbers függvényt)
5. getMonthlyLotteryArrayNumbers - paraméterként kapja a négy hét lottószámainak tömbjét és visszaadja, hogy a hónapban mely számokat húzták ki. A viszatérő listában, minden szám csak egyszer szerepelhet.
6. monthlyStatistics - paraméterként kapha a havi lottószámok tömbjét. Egy tömböt ad vissza, melynek elemei tömbök, melyben az első elem a lottószám, a második eleme, hogy a hónapban a számot hányszor húzták ki.*/

function getOtosLotteryNumbers() {
  const numbers = [];
  for (let i = 0; i < 5; i++) {

    const randomNumber = Math.floor(Math.random() * 90) + 10;
    numbers.push(randomNumber);
  }
  return numbers;
}

function getSortedLotteryNumbers(numbers) {
  return numbers.sort((a, b) => a - b);
}

function getNumberOfHits(lottoszamok, tippek) {
    let hits = 0;
    lottoszamok.forEach(lottoszam => {
        tippek.forEach(tipp => {
        if(lottoszam == tipp) {
            ++hits;
            lottoszamok.pop(lottoszam);
            tippek.pop(tipp);
        }
        })
    });

    return hits;
}

function getMonthlyLotteryArrayNumbers() {
    let monthlyLotteryArrayNumbers = [];
    for (let i = 0; i < 4; i++) {
        monthlyLotteryArrayNumbers.push(getOtosLotteryNumbers());
    }

    return monthlyLotteryArrayNumbers;
}

function getMonthlyLotteryArrayUniqueNumbers() {
    return [...new Set(getMonthlyLotteryArrayNumbers().flat())];
}

function monthlyStatistics(monthlyLotteryArrayNumbers) {
    let statistics = [];
    for (let i = 10; i < 100; i++) {
        let count = 0;
        monthlyLotteryArrayNumbers.flat().forEach(number => {
            if(number == i) {
                ++count;
            }
        });
        if(count > 0) {
            statistics.push([i, count]);
        }
    }
    return statistics;
}