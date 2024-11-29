function fibo(n) {
    if (n <= 1) {
        return n;
    }
    return fibo(n - 1) + fibo(n - 2);
}

function printFiboSeries(count) {
    for (let i = 0; i < count; i++) {
        console.log(fibo(i));
    }
}

printFiboSeries(10);
