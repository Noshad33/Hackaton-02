function findMissingNumber(numbers) {
    const n = numbers.length + 1;
    const totalSum = (n * (n + 1)) / 2;
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return totalSum - sum;
}

// Test case
console.log(findMissingNumber([11, 12, 14, 15, 16, 18, 19, 20])); 