// function groupAnagram(arr){
//     let obj ={};
//     for(let word of arr){
//         let freq=[];
//         for(let char of word){
//             let c = char.charCodeAt();
//             freq[c]++;
//         }
//         obj[freq] = obj[freq] || [];
//         obj[freq].push(word);
//     }
//     return Object.values(obj);  
// }
// const arr = ['tea','ate','nat','bat','tab','eat'];
// console.log(groupAnagram(arr));

function groupanagram(arr){
    let obj = {};
    for(let word of arr){
        let freq = [];
        for(let char of word){
            let c = char.charCodeAt();
            freq[c]++;
        }
        obj[freq] = obj[freq] || [];
        obj[freq].push(word);
    }
    return Object.values(obj);
}
const arr = ['tea','ate','nat','bat','tab','eat'];
console.log(groupanagram(arr));
