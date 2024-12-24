
function sumofpairs(arr) {
    let sumofp = [];
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 100) {
                sumofp[index] = ([arr[i], arr[j]]);
                index++;
            }
        }
    }
    return sumofp;
}

console.log(sumofpairs([80, 60, 10, 50, 30, 100, 50, 0]));

