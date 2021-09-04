'use strict'
const numGuesser = (startValue = 0, endValue = 100) => {
    let start = startValue;
    let end = endValue;
    let middle = Math.round((start + end) / 2);
    while (true) {
        if (confirm(`Ваше число ${middle}?`)) {
            return middle;
        }
        if (confirm(`${middle} больше чем ваше число?`)) {
            end = middle;
            middle = Math.floor((start + end) / 2);
        } else {
            start = middle;
            middle = Math.ceil((start + end) / 2);
        }
    }
}
numGuesser()