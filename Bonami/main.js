// 'use strict';




// javascript data types 

// boolean 
// number
// null
// undefined
// string 
// object


// How do you create an object in JavaScript?
// const obj = {
    // key : 'value'
// }

// How do you create an array in JavaScript?
// let arr = [1,2,3]

// some built in methods in js 
// let date = new Date();


// what is this keyword 
// this keyword refer to the current calling object. 


// callback function 
// callback function is fucntion that passed to another function as an argument 

// lexical scope 
// A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration.


// arrow function vs regular function 

// arrow function can not be treated as a constructor 
// 2. Arguments binding 
// 3. Use of this keyword
// let obj = {
//     a : 1,
//     getdataArrow : () => {
//         console.log(this.a);
//     },
//     getdataRegular () {
//         console.log(this.a);
//     }
// }

// obj.getdataArrow()
// obj.getdataRegular()


// function funobj(a) {
//     this.a = a
// }
// const funobj = (a) => {
//     this.a = a
// }
// const dataofa = new funobj(1)
// console.log(dataofa);


// call apply and bind 
// https://medium.com/@omergoldberg/javascript-call-apply-and-bind-e5c27301f7bb



// sinple declare a function is function declaration and store it into variable is a function expression

// Hoisting does not occur in let.	Hoisting occurs in var.
// var a = 10 
// function show() {
//     console.log(a);
//     var a = 20 
// }
// show()
// console.log(a);


// Closures provide a better, and concise way of writing JavaScript code for the developers and programmers. Closures are created whenever a variable that is defined outside the current scope is accessed within the current scope.



// Imports and exports help in writing modular code for our JavaScript applications. With the help of imports and exports, we can split a JavaScript code into multiple files in a project. This greatly simplifies the application source code and encourages code readability.

// Hoisting ina javascript is the default process behavior of moving declaration of all the variables and functions on top of the scope where scope can be either local or global. 
// hoisting allows you to use functions and variables before they're declared. 


// The logical OR assignment (x ||= y) operator only assigns y to x if x is falsy.
// The logical AND assignment (x &&= y) operator only assigns y to x if x is truthy.
// The nullish coalescing assignment (x ??= y) operator only assigns y to x if x is nullish.


// currying :  In JavaScript, when a function of an argument is transformed into functions of one or more arguments is called Currying.

// constructor function are used to create single object or multiple object with similar properties and methods


// BOM is the Browser Object Model where users can interact with browsers that is a window, an initial object of the browser. The window object consists of a document, history, screen, navigator, location, and other attributes. Nevertheless, the window’s function can be called directly as well as by referencing the window.

// objects in JavaScript may be defined as an unordered collection of related data, of primitive or reference types


// Rest parameter is used to declare the function with improved handling of parameters. 

// In a function call, we use the spread operator. 

// A JavaScript class is a blueprint for creating objects. A class encapsulates data and functions that manipulate data. 


// recursive : function calling itself 












