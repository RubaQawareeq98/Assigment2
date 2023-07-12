
import{utility} from "./Utils.js";

let users= await utility();

function userFormat(users){
    let names=[];
    users.map(user=>{
        names.push(Object.values(user).join(" "))

    })


    return names
}
function alterUsers(users){
    let alteredUsers=users;
    for (let user of alteredUsers){
        user[user.dob.age]=user.dob.date;
        delete user.dob;
    }
    return alteredUsers;
}
let ageSum=(users)=>{
    let sum=0;
    users.forEach(user=>sum+=user.dob.age);
    return sum;
}

console.log(userFormat(users))
console.log("**************************************")
console.log(alterUsers(users))
console.log("**************************************")
users=await utility()
console.log(ageSum(users))

////////////////////
