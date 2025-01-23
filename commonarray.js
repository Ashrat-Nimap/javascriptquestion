function commonarray(arr,arr1){
    let intersecarray = [];
    for(let i = 0;i< arr.length;i++){
        for(let j = 0; j < arr1.length - 1;j++){
            if(arr[i] === arr1[j] && arr[i + 1] === arr1[j + 1]){
                intersecarray.push([arr[i],arr[i + 1]]);
            }
        }
    }
    return intersecarray;
}
const arr = [1,3,3,6,4,3,9,5];
const arr1 = [8,9,2,8,1,3,4,3];
console.log(commonarray(arr,arr1))