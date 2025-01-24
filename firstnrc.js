    //Input : swiss
    //output : w

    function firstNrc(str){
        let frequency = {}
        for(let i = 0;i < str.length;i++){
            let char = str[i].toLowerCase();
            if(frequency[char]){
                frequency[char]++;
            }
            else{
                frequency[char] = 1;
            }
        }
        for(let i = 0;i<str.length;i++){
            let char = str[i].toLowerCase();
            if(frequency[char] === 1){
                return char

            }
        }
        return null
    }

    const str = "swiss";
    console.log(firstNrc(str));