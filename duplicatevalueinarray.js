function duplicate(arr) {
    let arr1 = [];
    let isPresent=false;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr1.push(arr[i]);
            }
            // if (arr1.includes(arr[j])) {
            //     num=false;
            //     break;
            // }
        }

    }
    return arr1;
}
const arr = [1, 2, 3, 2, 5, 7,2]
console.log(duplicate(arr));

