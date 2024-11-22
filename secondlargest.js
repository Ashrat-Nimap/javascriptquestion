function secondlargest(arr){
    let largest = 0;
    let secondlargest = 0;

    for(let i = 0;i<arr.length;i++){
        if(arr[i] > largest){
            secondlargest = largest;
            largest = arr[i];
        }else if(arr[i] > secondlargest && arr[i] < largest){
            secondlargest = arr[i];
        }
    }
    return secondlargest;
}

const arr = [23,56,1,4,89,26];
console.log(secondlargest(arr));


//Time complexity will be O(n)