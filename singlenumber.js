function singlearr(nums){
    let singleNum = 0;
    for(let i = 0; i < nums.length; i++){
        singleNum ^= nums[i];
    }
    return singleNum;
}

const nums = [4,1,2,1,2];
console.log(singlearr(nums));