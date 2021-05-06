/* **************
! For OF Loops
- iterate over the values or an iterable object(strings and arrays included)
-iterable means to be able to parse through with numbers
************** */
//This doesn't work because the properties are not 'iterable'
let student = {
    name: 'Jake from state farm',
    awesome : true,
    degree: "Insurance sales",
    age: 98
};

//for(item of student){
  //  console.log(item);
//}

let soupArray = ['potato', 'broccoli', 'carrots', 'chicken noodle', 'chili'];

for(soup of soupArray){
    console.log(soup);
}