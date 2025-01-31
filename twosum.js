function twosum(nums, target){
    for(let i = 0;i < nums.length;i++){
        for(let j = i+1;j<nums.length;j++){
            if(nums[i]+nums[j] == target){
                return [i,j]
            }
        }
    }
}

const nums = [2,3,4,4,5];
const target = 6
console.log(twosum(nums,target));