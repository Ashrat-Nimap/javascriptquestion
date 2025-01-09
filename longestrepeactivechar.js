function repeatchar(str) {
    let count = 1;
    let result = "";
    let maxcount = 0;
    let maxChar = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        }
        else{
            result += str[i] + count;
            count = 1;
        } 
        if(count > maxcount){
            maxcount = count;
            maxChar = str[i];
        }
    }
    return maxChar;
}

const str = "ababbbaab";
console.log(repeatchar(str));