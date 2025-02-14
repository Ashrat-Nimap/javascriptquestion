function strrevarr(str){
    for(let i = str.length;i>=0;i--){
        str.reverse();
    }
    return str
}
const str = ["H","a","n","n","a","h"];
console.log(strrevarr(str));