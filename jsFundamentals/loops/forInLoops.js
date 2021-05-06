/* *********************
! For In Loops
-great for iterating over values in a n object
-Properties in objects are what's called enumerable
-enumerable just means 'countable'

************************* */

let student = {
    name: 'Jake from state farm',
    awesome : true,
    degree: "Insurance sales",
    age: 98
};

for(item in student){
    console.log(item);
    console.log(student[item]);
};