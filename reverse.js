function stringreverse(str){
    let rev = "";
    for(let i= str.length - 1;i>=0;i--){
        rev += str[i];
    }
    return rev;
}
const str = "Ashrat";
console.log("The reverse of string" + stringreverse(str));