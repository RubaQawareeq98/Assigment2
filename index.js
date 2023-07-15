
///////////////////////////////////////////////////////
function asyncCall() {
    var result=null;
let promise= new Promise(resolve => {{
    setTimeout(() => {
        result='data';
       resolve(result)
    }, 3000)
    }})


    return promise;
}

(function main() {
    asyncCall().then(data=>{
        console.log(data)
    })// alter asyncCall function in which the data returned be not null


})()



////////////////////////////////////////////////////


//
// function bar(a) {
//     this.a = a
// }
//
// function foo(a) {
//     bar(a);
//    /* bar.call(obj,a)
//    this.bar(a)
//    */
//
// }
//
// var obj = {
//     bar: bar,
//     foo: foo,
// }
//
// obj.foo(5);
//
// console.log(obj.a) // ?? what is the output, if it undefined (why) how can
// we make it to be 5
/*
the value of a is undefined, because when we call function bar from function foo with default binding, so
this in function bar refer to window(global) not to obj so a is undefined on window
to set the value of a to 5 we call function bar on function foo by obj (implicit binding)
or use explicit binding

function foo(a) {
     this.bar
}
so on function bar this refer to obj so obj.a is set to 5
 */


// function foo() {
//     function bar(a) {
//         this.a = a
//     }
//
//     var obj = new bar(2);
//    //obj= bar{a:2}
//     obj.bar = bar;
//   //  obj= bar{a:2, bar: function}
//     var obj2 = obj
//     //  obj2= bar{a:2, bar: function}
//     obj2.bar(5);
//     // call bar(a)
//     //set a to 5
//     console.log(obj2.a) //? what is the result and why
// }


//////////////////////



// function foo() {
//     setTimeout(()=>  {
//         console.log(this.a); // Output: 3
//     });
// }
//
// var obj = {
//     a: 3
// };
//
// foo.call(obj);
/*
this is refer to window(global)  so a is undefined on window
so we call a by using arrow function instead of function(), because in arrow function this refer to
first parent non arrow function so this in function foo() refer to obj // we use explicit binding
 */
//
//
