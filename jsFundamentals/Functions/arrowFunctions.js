/* 
            1           2
            let hi = () => {
                console.log('hi');
            }

            1: We need to set the fat arrow funcition to a variable.
            2:We use the 'fat arrow' to signify its a function.

            - arrow functions (fat arrow functions) introduced in E56.
            -a more concise way to write function expressions *not declartions
            -arrow function do NOT get hoisted.
            -2 tyoes if arrow functions:
                 - Concise body
                 - Block body
            */

//! Concise Body
let hi = () => console.log('hi');
// concise body arrow functions return by default.

//! Block Body
// let hi = () => {
    // console.log('hi');
// }
// block body arrow functions must have a return in the body of the function (between the ( ))


let apples = x => console.log(`There are ${x} apples.`);
apples(10)
apples('boooooo')

let bananas = x => {
    console.log(`There are ${x} bananas`);
}
bananas(10)

/* if no or multi parameters are needed
-use ()
-Do not need() if we are only passing 1 parameter. 
  */  