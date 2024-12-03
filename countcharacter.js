function count(str){
    let upercase = 0;
    let lowercase = 0;

    for(let char of str){
        if(char >= 'A' && char <='Z'){
            upercase++;
        }else if(char >= 'a' && char <='z'){
            lowercase++;
        }
    }

    return{
        upercase,
        lowercase
    }
}

const str = "Hello WoRld";
console.log(count(str));