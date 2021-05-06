//! Var vs Let
/* 

     Introduced in E56, we have 3 keywords for variables:
            -var
            -let
            -const
    
    var & let: operate the same but behave differently const: cannot be re-expressed.


*/

// !Var 
// You can use 'let' inside the problem
var x = 12;

 function varTest() {
     //you can put 'let' instead of 'var'
    // Ex. let x = 33
    var x = 33;
    if(1 == 1) {
        var x = 45;
         console.log(x);
    }
    console.log(x);
}

varTest();
console.log(x);

// !Let
let z = 5;

function letTest() {
    var z = 75;
    if(1 == 1) {
        var z = 75;
        console.log(z);
    }
}
 letTest()
 console.log(z);

 //* Const

 function constTest() {
     const scope = 1;

     if(true) {
         const scope = 2;
         console.log(scope);
     }
 }
 constTest();