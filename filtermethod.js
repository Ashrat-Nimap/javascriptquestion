//array map method

let arr = [1,4,5,2,5,6];
let a = arr.map((value) => {
    return value * 2;
})
console.log(a);
console.log(arr);

//array filter method
let arr1 = [2,5,6,2,7,8];
let b = arr1.filter((value)=>{
    return value % 2 ==0;
})
console.log(b);


//array reduce method
let arr2 = [2,6,3,8,5,3];
let c = arr2.reduce((value, value1)=>{
    return value * value1
})
console.log(c);
