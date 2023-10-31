function isCuteNumberGreaterThanTen(num: number[]) {
    const evenNumbers: number[] = findAllEvenNumbers(num);
    const evenMax: number = findMax(evenNumbers);
    const result: boolean = isGreaterThanTen(evenMax);
    return result;
}

function findAllEvenNumbers(num: number[]): number[] {
    return num.filter(isEven);
}

function findMax(num: number[]): number {
    let max: number = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] > max) {
            max = num[i];
        }
    }
    return max;
}

function isGreaterThanTen(num: number): boolean {
    return num > 10;
}

function isEven(num: number): boolean {
    return num % 2 === 0;
}

function main() {
    const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const result: boolean = isCuteNumberGreaterThanTen(numbers);
    console.log(result);
}

main();


