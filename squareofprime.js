function sumofsquareprime(n){
    let sum = 0;
    let num = 2;
    let count = 0;

    while(count < n){
        let isprime = true;
        for(let i = 2;i * i <= num;i++){
            if(num % i === 0){
                isprime = false;
                break;
            }

        }
        
        if(isprime){
            sum += num * num;
            count++;
        }
        num++;
       }
       return sum;
}

let n = 4;
let result = sumofsquareprime(n);
console.log(`The sum of squares of the first ${n} prime numbers is: ${result}`);
