function fibo(num){
    let fibo = [0,1];
    for(let i = 2;i< num; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

const num = 8;
console.log(fibo(num));