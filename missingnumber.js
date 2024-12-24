function findMissingNumbers(arr) {
    let min = 0;
    let max = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }
    
    let presence = {};
    for (let i = 0; i < arr.length; i++) {
        presence[arr[i]] = true;
    }

    let missingNumbers = [];
    let index = 0
    for (let i = min; i <= max; i++) {
        if (!presence[i]) {
            missingNumbers[index] = i;
            index++;
        }
    }
    return missingNumbers;
}

console.log(findMissingNumbers([3, 5, 6])); 


// function missingn(arr){
//     let min = arr[0];
//     let max = arr[0];


//     for(let i = 0;i < arr.length;i++){
//         if(arr[i] < min) min = arr[i];
//         if(arr[i] > max) max = arr[i];

//     }


//     let presence = {};
//     for(i = 0;i < arr.length;i++){
//         presence[arr[i]] = true; 
//     }

//     let missingn = [];
//     let index = 0;
//     for(i = min; i <= max;i++){
//         if(!presence[i]){
//             missingn[index] = i;
//             index++;
//         }
//     }
//     return missingn;
// }

// const arr = [2,4,5,7];
// console.log(missingn(arr));