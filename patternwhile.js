function whilepattern(input){
    let a = 1,n = 5,pattern = "";
    while(a<=input){
       let i=1;
        while(i<=n && a <= input){
            pattern += a + " ";
            a++;
            i++;
        }
        if (a > input) break;
        let j=1;
        while(j<=n && a <= input) {
            pattern += "* ";
            a++;
            j++;
        }
        pattern += "\n";
    }
    return pattern
}

console.log(whilepattern(17))

//[1,7,4,7,4,9,8,4,2]
//target no = 4
//output:[2,7];