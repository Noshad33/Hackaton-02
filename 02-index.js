function findMinMax(numbers) {
    let min = numbers[0];
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return { min, max };
}

// Test cases
console.log(findMinMax([1, 3, 5, 7, 9]));      
console.log(findMinMax([-1, 0, 10, 100, 50])); 
console.log(findMinMax([5, 2, 8, 4]));        
console.log(findMinMax([100]));               
