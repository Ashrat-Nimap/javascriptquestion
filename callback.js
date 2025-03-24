const a = [1,2,3];

const b = a.map(async each=>each);
console.log(b)

//b=[Promise{1},Promise{2}]
const c = b.forEach(x=>console.log(x));