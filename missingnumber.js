function findMissingNumbers(arr) {
    let min = arr[0];
    let max = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }
    
    let presence = {};
    for (let i = 0; i < arr.length; i++) {
        presence[arr[i]] = true;
    }

    let missingNumbers = [];
    for (let i = min; i <= max; i++) {
        if (!presence[i]) {
            missingNumbers.push(i);
        }
    }
    return missingNumbers;
}

console.log(findMissingNumbers([1, 3, 5, 6])); 