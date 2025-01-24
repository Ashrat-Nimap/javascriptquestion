function nextpalindrom(num){
    num++
    while(true){
        let original = num;
        let rev = 0;
        while(original > 0){
            const digit = original % 10;
            rev = rev * 10 + digit;
            original = original/10 | 0 ;
        }
        if(num === rev){
            console.log(`the next palindrome is ${num}`);
            break;
        }
        num++
    }
    return num
}

nextpalindrom(123);