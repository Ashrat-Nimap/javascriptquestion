function anagram(str1,str2){
    if(str1.length !== str2.length) return false;
    let charCount = {};
    for(const char of str1){
       (charCount[char]) ? charCount[char]++  : charCount[char] = 1;
    }

    for(const char of str2){
        if(charCount[char]) charCount[char]--;
        else return false;
    }
    return true;
}

const str1 = "bat";
const str2 = "tab";
console.log(anagram(str1,str2));

// Time complexity is O(n)