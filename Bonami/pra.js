// const arrow = (...args) => {
//     for (const iterator of args) {
//         console.log(iterator); // return values
//     }
//     for (const iterator in args) {
//         console.log(iterator); // return keys 
//     }
// }
// let ar = ['1' , '2']
// arrow(...ar)

// function datashow(message , another) {
//     return this.a + ' ' + message + '   ' + another
// }

// let obj = {a:1}

// console.log(datashow.apply(obj , ['show message' , 'another']))
// console.log(datashow.call(obj , 'show message' , 'another'))

// let bindcall = datashow.bind(obj , 'show message' , 'another') 
// console.log(bindcall())


// let a = {
//     getdetails(){
//         return this.name
//     },
// }
// let b = {
//     name : 'sahil',
//     __proto__ : a
// }
// console.log(b.getdetails());


// let ar = [1,2,3,4,5]

// const [first , ...another] = ar
// console.log(first);
// console.log(another);


// const det = {
//     name: 'test'
// }

// det.add = 'new addr'

// console.log(det);


// const arr = [91,2,32,[82,32 , 65] ,89] 
// let newarr = arr.flat();

// let sorted = newarr.sort((a , b) => a - b)
// // let min  = sorted[0] ,max = sorted[sorted.length-1]

// let result = sorted.reduce((a,b) => maxmin(a,b))

// function maxmin(a,b){
//     console.log(a,b);
// }


// let count = false;
// let apro = new Promise(function(resolve , reject) {
//     if (count) {
//         resolve('ok')
//     }else{
//         reject('failed')
//     }
// })

// console.log(apro);

// let apro = new Promise(function(resolve , reject) {
//     if (count) {
//         resolve('ok')
//     }else{
//         reject('failed')
//     }
// })

// console.log(apro.then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// }).finally(()=> {
//     console.log('last')
// }));



// let obj = {
//     a : 1,
//     another : {
//         a : 12,
//         getname(){
//             console.log(this);
//         }
//     },
//     getname(){
//         console.log(this);
//     }
// }

// var asyncCall =  new Promise((resolve, reject) => {
//     // do something
//     reject('error message');
//  })

// asyncCall.then(()=> {   
//     console.log('DON!');
//  }).catch((err) => console.log(err))



// promise 

// 'https://rickandmortyapi.com/api/character/'
// let url = 'https://rickandmortyapi.com/api/character/s'

// const fetchapi = new Promise(async (resolve, reject) => {
//     try {
//         // fetch(url).then(res => res.json()).then(data => console.log(data))
//         await fetch(url).then(res => res.json()).then(data => console.log(data))
//     } catch (error) {
//         console.log(error);
//     }
// }) 


// let url = 'https://rickandmortyapi.com/api/character/s'

// const fetchapi = new Promise(async (resolve, reject) => {
//     try {
//         // fetch(url).then(res => res.json()).then(data => console.log(data))
//         // await fetch(url).then(res => res.json()).then(data => console.log(data))
        
//     } catch (error) {
//         console.log(error);
//     }
// }) 


// newFunction();

// function newFunction() {
//     const promise1 = Promise.resolve();
//     const promise2 = 0;
//     const promise3 = new Promise((resolve, _reject) => {
//         setTimeout(resolve, 100, 'foo');
//     });

//     Promise.all([promise1, promise2, promise3]).then((values) => {
//         console.log(values);
//     });
// }



// my name is sahil and For the past 2 years, I’ve been working as a web developer at bonamisoftware. 

// why you choose javascript 
// ->  you can create visual effect and other eyecatching features and js work on both side client and server side and its good for my web devlopment carrer.

// JavaScript is a popular web scripting language and is used for client-side and server-side development.


// varibale is a named container storage that holds data.
// Data types alows the what kind of data being working  
//  null , undefined , number , string , boolean , symbol
// console.log(+'s');   // NaN  + sign convert string inot number 


// === vs ==
//  double checks only value and triple checks value as well as  its type 



// functions is a block of statement that is used to perform a specific task 
// funcion  expression is basically to store a function into an varibale 
// arrow function is a good way to write a function expression  

// object is  collection o similiar data types 
// four way to write a object 
// -> functional constructor object 
// -> using simple curly brackets
// -> class and object using ooops concepts 
// -> Using object methods . assign 

let objassign = Object.assign({} , {a:'sahil' , getname(){this.a}})
console.log(objassign);
// console.log(typeof objassign);


// call , apply and bind are used to wrap additional feature of another object into 
// call , apply both are the but the only diifrence is to pass an argument 
// bind also do same thing but it will not call immediately it will return function 

// Use . call() or . apply() when you want to invoke the function immediately, and modify the context. 

// let newobj = {
//     a: 'sahil',
//     getname() {
//         return this.a 
//     }
// }

// let ansobj = {
//     a: 'testname',
//     // __proto__ : newobj
// }

// console.log(newobj.getname.apply(ansobj));
// console.log(newobj.getname.call(ansobj))
// let result = newobj.getname.bind(ansobj)
// console.log(result());

// this is refers to an current calling object

// In JavaScript, the this keyword refers to an object. Which object depends on how this is being invoked (used or called). The this keyword refers to different objects depending on how it is used: In an object method, this refers to the object. Alone, this refers to the global object.
