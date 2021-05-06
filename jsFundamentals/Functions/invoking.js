function hi() {
    console.log('Hi');
}

hi();//will run
hi; //will not run
console.log(hi);
console.log(hi());

//Create a function that, when invoked, lists out the numbers 1-10

function counting(){
    //let (num <= 10)
    for(let i = 1; i <= 10; i++) {console.log(i);}
}

counting();