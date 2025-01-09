
function user(obj){
    debugger
    for(let key in obj){
        if(typeof obj[key] === "object"){
            arr.push(key);
            user(obj[key]);
        }
        else{
            arr.push(key);
        }
    }
}
let arr = [];
const users = {
    name:"",
    address:{
        state:"",
        city:"",
        street:{
            no:""
        }
    }
}
user(users)
console.log(arr);
