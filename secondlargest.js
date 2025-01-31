function secondlargest(arr){
    let largest = 0;
    let secondlargest = 0;
    let thirdlargest = 0;

    for(let i = 0;i < arr.length;i++){
        if(arr[i] > largest){
            thirdlargest = secondlargest
            secondlargest = largest;
            largest = arr[i];
        }else if(arr[i] > secondlargest && arr[i] < largest){
            thirdlargest = secondlargest;
            secondlargest = arr[i];
        }
        else if(arr[i] > thirdlargest && arr[i] < secondlargest){
            thirdlargest = arr[i];
        }
    }
    if(!thirdlargest){
        return largest
    }else{
        return thirdlargest;
    }
}

const arr = [1,2,2,5,3,5];
console.log(secondlargest(arr));


//Time complexity will be O(n)