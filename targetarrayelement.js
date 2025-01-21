//[1,7,4,7,4,9,8,4,2]
//target no = 4
//output:[2,7];

function targetelement(arr,target){
    let arr1 = [],first,last;

    for(let i = 0;i < arr.length;i++){
        if(arr[i] === target){
            first = arr.indexOf(arr[i]);
            last = arr.lastIndexOf(arr[i]);
        } 
    }
    arr1.push(first,last);
    return arr1;
}
const arr = [1,7,4,7,4,9,8,4,2,7,4];
const target = 4;
console.log(targetelement(arr,target));