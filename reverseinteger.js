function reversenumber(num) {
    let reversed = 0;
    while (num) {
        reversed = reversed * 10 + num % 10;
        num = num / 10 | 0;
    }
    return reversed;
}
console.log(reversenumber(-21));