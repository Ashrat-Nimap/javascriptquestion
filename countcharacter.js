function count(str){
    let upercase = 0;
    let lowercase = 0;

    for(let i = 0; i < str.length; i++){
        let char = str[i];
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