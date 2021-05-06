/* 
       -First Pass: Stores our variables declarations (essentially says, "hey, I know a variable of x is defined, so let me store that in my memory so I know it's there"), but doesn't assign them their values.
         -Anything that needs to be hoisted, is hoisted.

        -Second Pass: Assigns the values to our variables and executes any hoisted sorce code.
*/


//console.log(myName);
let myName = 'Eric';
// console.log(randomVariable);

let b= () => console.log('Hoisted?');
 b()
 
/* function b() {
    console.log("I have been hoisted");
}

console.log('Here'); */