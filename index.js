function isCuteNumberGreaterThanTen(num) {
    var evenNumbers = findAllEvenNumbers(num);
    var evenMax = findMax(evenNumbers);
    var result = isGreaterThanTen(evenMax);
    return result;
}
function findAllEvenNumbers(num) {
    var result = [];
    for (var i = 0; i < num.length; i++) {
        if (isEven(num[i])) {
            result.push(num[i]);
        }
    }
    return result;
}
function findMax(num) {
    var max = 0;
    for (var i = 0; i < num.length; i++) {
        if (num[i] > max) {
            max = num[i];
        }
    }
    return max;
}
function isGreaterThanTen(num) {
    return num > 10;
}
function isEven(num) {
    return num % 2 === 0;
}
function main() {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    var result = isCuteNumberGreaterThanTen(numbers);
    console.log(result);
}
main();
