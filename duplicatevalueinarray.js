function duplicate(arr) {
    let arr1 = [];
    let newset = new Set()

    for (let i = 0; i < arr.length; i++) {
        newset.add(arr[i]);
    }
    for(let val of newset){
        arr1.push(val);
    }
    return arr1;
}
const arr = [0,0,1,1,1,2,2,3,3,4]
console.log(duplicate(arr));