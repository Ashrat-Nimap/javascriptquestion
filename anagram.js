function anagram(str1,str2){
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    if(str1.length !== str2.length){
        return false;
    }

    let charCount = {};
    for(const char of str1){
        if(charCount[char]){
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    for(const char of str2){
        if(!charCount[char]){
            return false;
        } else {
            charCount[char]--;
        }
    }
    return true;
}

const str1 = "hello";
const str2 = "world";
console.log(anagram(str1,str2));

// Time complexity is O(n)



