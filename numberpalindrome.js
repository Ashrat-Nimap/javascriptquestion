function numpalindrome(x) {
    let r, sum = 0,temp;
    temp = x;
    while(x > 0){
        r = x % 10;
        sum = (sum * 10) + r;
        x = x/10 | 0;
    }
    if(temp === sum) return true
    else return false;
};

const x = 131;
console.log(numpalindrome(x));