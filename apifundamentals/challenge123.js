// Challenge 1

function fullName(fName, lName) {
    return console.log(fName + lName);
}
fullName("Bob", " Johnson")

//Challenge 2

for(x = 0; x <= 100; x++) {
     //console.log(x)

 if  (x % 6 === 0 && x % 8 === 0) {
     console.log('Fizz Buzz');

 } else if(x % 6 === 0)  {
    console.log('Fizz');
 } 
 else if (x % 8 === 0) {
     console.log('Buzz');
 }else {console.log(x);}

}

// Challenge 3

function findPerimeter (length, width) {
    let Perimeter = (length + width) * 2;
    if (Perimeter <20) {
        console.log(`False. The perimeter is ${Perimeter}`);
    } else {
        console.log(`True. The perimeter is ${Perimeter}`);
    }
 
    return true 
} 
findPerimeter (10 , 7)

// Challenge 4
 
let library = {
    name: 'James Bond',
    address: '3131 W. Lannister Way',
    sections: {
        collections: [{
            classification: 'scifi',
            count: 55,
            aisle: 'seven'
        },
        { 
            classification

        }
        ]
    }
    
}
