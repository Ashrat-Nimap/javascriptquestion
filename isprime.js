function isprime(num){
    let isPrime=true;
    if(num <= 1) return false;
    for(i = 2;i <= parseInt(num**0.5);i++){
        if(num% i === 0){
            isPrime=false;
        }
    }
    return isPrime;
}
const num = 9;
console.log(isprime(num));