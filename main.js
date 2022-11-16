// 'use strict';


// // const obj1 = {
// //     data : true
// // }

// // const obj2 = {
// //     datas : true
// // }

// // const obj3 = {
// //     datanew : true,
// //     __proto__ : obj2,
// //     // __proto__ : obj1,
// // }

// // // proto

// // // console.log(obj2.datas);
// // // obj2.__proto__ = obj1;
// // // obj1.__proto__ = obj2;
// // // console.log(obj2.data);

// // // Object.setPrototypeOf(obj2 , obj1);
// // // Object.setPrototypeOf(obj2 , obj3);

// // // console.log(Object.getPrototypeOf(obj2));
// // // console.log(obj3.data);
// // // console.log(obj2.datas);

// // // Duplicate __proto__ fields are not allowed in object literals 

// // // object constructor

// // function Animal(species) {
// //     this.species = species;
// //     this.eats = true;
// // }

// // Animal.prototype.walk = () => {
// //     return `${this.species} is walk. ${this.eats}`;
// // }

// // const cat = new Animal('cat');

// // console.log(cat.species);
// // console.log(cat.walk());

// // const args1 = [1,2,3,4,5]

// // let sum_arr = (...args) =>{
// //     // console.log(args);
// //     return [...args].reduce((cu , pr) => cu + pr );
// // }

// // const calculatefunc = (fn) =>{
// //     let count = 0;

// //     return (...args) =>{
// //         console.log('function called' , count+=1);
// //         return fn(...args)
// //     }
// // }

// // let sum_arr_n = calculatefunc(sum_arr);

// // console.log(sum_arr_n(1,2,3,4));

// // const all = (...args) =>{
// //     [...args].forEach(element => {
// //         console.log(element);
// //     });
// // }

// // const wrapper = (fn) =>{
// //     let count = 0;
// //     return (...args) =>{
// //         // console.log(...args);
// //         console.log(++count);
// //         fn(...args)
// //     }
// // }
// // const result = wrapper(all);
// // result('tomato' , 'onion' ,'cabbage');




// // currying function takes a function that recieves than one parameter and breaks it into a series of unary (one parameter) functions 

// const sandwhich = (in1) =>{
//     return (in2) => {
//         return (in3) =>{
//             return `${in1} , ${in2} , ${in3}`;
//         }
//     }
// }



// const result_value = sandwhich('tomato')('onion')('cabbage');
// // const result_value = sandwhich('tomato' , 'onion' ,'cabbage');

// console.log(result_value);


let str = 'abcdefgh';
let a = str.length;
let counter = 0;
while (a > 0) {
    // console.log(a[counter]);
    let strn = str[counter] + str[counter + ++counter];
    console.log(strn); 
    console.log(counter+1);
    a-=2;
}
