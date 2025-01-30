function swap(a,b){
   [a,b] = [b,a];
   return{
    a,b
   }
}
const  a = 4;
const b = 6;
console.log(swap(a,b));