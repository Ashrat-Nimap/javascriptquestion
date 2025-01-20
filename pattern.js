function pattern(n){
    let a = 1,num = 5,pattern = "";

    for(let i = 1;i <=num;i++){
        for(let j = 1; j<=num && a <=n;j++){
            pattern += a+ " ";
            a++;
        }
        if(a > n) break;
        for(let j = 1; j<=num && a <=n;j++){
            pattern += "* ";
            a++;
        }
        pattern += "\n";
    }
    return pattern;
}

// console.log(pattern(23))