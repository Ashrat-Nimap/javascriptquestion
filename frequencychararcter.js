function countletter(str) {
    let frequeny = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        (frequeny[char]) ? frequeny[char]++ : frequeny[char] = 1;
    }
    return frequeny;
}
console.log(countletter("Engineer"));