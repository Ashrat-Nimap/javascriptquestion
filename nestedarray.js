function nestedarray(arr){
    let arr1 = [];
    for(let i = 0; i< arr.length;i++){
       if(Array.isArray(arr[i])){
           arr1 = arr1.concat(nestedarray(arr[i]));   
       }else{
        arr1.push(arr[i]);
       }
    }
    return arr1;
}

const arr = [[[[1],[2,3],[[4],5,6]]]];
console.log(nestedarray(arr));


