// // Map 

// let map = new Map();
// map.set(1,"Ashrat");
// map.set(2,"prerna");
// map.set(3,"aman");
// map.set(4,"john");
// map.set(5,"shahid");

// map.delete(4);

// console.log(map.get(2));
// console.log(map.size);
// if(map.has(2)){
//     console.log(map.get(2));
// }
// for(let entry of map){
//     console.log(entry);
// }

// Set 

let set = new Set([]);

set.add(1);
set.add(2);
set.add(4);
set.add(6);
set.add(7);
set.add(8);
set.add(1);

set.delete(1);

console.log(set.size);


for(let entry of set){
    console.log(entry);
}
