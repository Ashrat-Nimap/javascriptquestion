var fizzBuzz = function(n) {
    let str = [];
    for(let i = 1;i<=n;i++){
        if(i % 3 ==0 && i % 5 == 0){
            str.push("FizzBuzz");
        }
        else if(i % 3 == 0){
           str.push("Fizz");
        }
        else if(i % 5 == 0){
           str.push("Buzz");
        }
        else{
            i = i.toString();
            str.push(i);
        }
    }
    return str;
};

const n = 3;
console.log(fizzBuzz(n));