// console.log((0.1 * 3 === 0.3));
// for (let i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }
function outer() {
    let b = 2
    function inner() {
        // let b = 3;
        console.log(b);
        b++;
    } 
    inner();
} 
outer();
// (function () {
//     try {
//         throw new Error(); 
//     }
//     catch (x) {
//         let x = 1, y = 2;
//         console.log(x);
//     }
//     console.log(y);
// })();
// console.log(true + 1);
// Promise.resolve(3)
//     .then((res) => {
//         console.log(res);
//         return res;
//     })
//     .then((res) => {
//         console.log(res)
//     })
// function test() {
//     console.log([2] == [2]);
//     return true;
// }
// test();