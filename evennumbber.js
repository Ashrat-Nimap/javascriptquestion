function evennumber(arr){
    let arr1 = []
    for(let i = 0;i <= arr.length;i++){
        if(arr[i] % 2 == 0){
            arr1.push(arr[i]);
        }
    }
    return arr1
}
const arr = [2,4,6,7,81,5,9,3,8];
console.log(evennumber(arr));