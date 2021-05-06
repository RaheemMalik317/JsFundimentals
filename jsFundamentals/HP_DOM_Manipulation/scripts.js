let listTitle = document.getElementById('listTitle');
console.log(listTitle);

listTitle.style.textAlign = 'center';

let listItem = document.querySelector('ul li');
console.log(listItem);
listItem.style.color = 'red';

/*
Accessing Multiple Elements
 -getElementsByClassName
 -getElementsByTagName
 -querySelectorAll
 */

 let grocery = document.getElementsByClassName('groceryItem');
 console.log(grocery);
 console.log(grocery instanceof Array);
 console.log(grocery[2]);
 console.log(grocery.item(1));

 let liTag = document.getElementsByTagName('li');
 console.log(liTag);

 let selectAll = document.querySelectorAll('ul li');
 console.log(selectAll);


 /*
 Differences between HTMLCollection & nodeList:
     -both are collections of DOM nodes.
     -node is used as a generic term for everything.
     -an HTMLCollection object is an array-like list of HTML elements. (collection)
 */

     console.log(document.body.childNodes);

    /* childNodes property returns a collection of a node's child nodes as a NodeList object.
    The nodes in the collection are sorted as they appear in the source code and can be accessed by index numbers (index starts at 0).

    List of properties:
    -firstChild = used to get the first child element of a node.
    lasChild= the last child element of a node.
    parentNode= access a parent node of an element.
    nextSibling = the element next to the element already accessed.
    previousSibling gets for us the element previous to the elemend already accessed. */

    console.log(document.body.children);
    /* 
        Why is thiis helpful? 
        -The whole thing is an object. We ca use dot notation to traverse through it and grab elements.
    
    */

        let listDiv = document.getElementById('list');
        console.log(listDiv.firstChild);

        console.log(listDiv.firstChild.nextSibling.nextSibling.nextSibling);

        //!Adding & Removing HTML content
        /* 
             We can change the text on the DOM through these methods: 
             -InnerText: Specifies the text content of an element
             *innerHTML removes the HTML content that is inside the element and adds the new one.
        */

//Note: liTag has been defined at top of file.

for(tag of liTag) {
    tag.style.fontFamily = 'cursive';
}
document.getElementsByClassName('listItem')[4].innerText = 'Buy a new cauldron';
document.getElementsByClassName('groceryItem')[0].innerHTML = 'Moondew Drops'
// document.getElementsByClassName('groceryItem')[2].innerHTML = `<ol><li>
// one
// </li</ol>`

//! ADDEVENTLISTENER ()// addEventListener()

document.getElementById('clickMe').addEventListener('click', (event) =>{
    console.log(event);console.log(event.target);
    event.target.style.backgroundColor = 'lightBlue';
})

document.getElementById('listInput').addEventListener
('keyup', showUp);

function showUp(e) {
    console.log(e.target.value);
}

//! createElement() & appendChild()
let newGrocery = document.createElement('li');
let groceryList = document.getElementById('groceryList'); 

newGrocery.innerText = 'Ginger Root';
newGrocery.className = 'groceryItem'

groceryList.appendChild(newGrocery);
/* 
   left side = parent node that we want to append to.

   right side = child node I want to append.
*/
// Did loop again to change the font of our created li tag.
for(tag of liTag) {
    tag.style.fontFamily = 'cursive';
}

let groceryTitle = document.createElement('h3');

let groceryDiv = document.getElementById('groceryDiv');

groceryTitle.innerText = 'Grocery List';

groceryDiv.appendChild(groceryTitle);

groceryDiv.insertBefore(groceryTitle.childNodes[0]);

/* 
    node, insertBefore (newnode, existingnode)

    newnode: The node object you want to insert (required) 

    existingnode: The child node you want to insert the NEW node before. 
    -If set to "null", the insertBefore method will insert the newnode at the end (required)

*/

//We create the node
//We give it value/attributes
//We reach out to a parent node (this could be the <body> or another node)
//We attach our created node

//Create Elements
// let x = document.createElement('p');
// let y = document.createElement('h2');
// let z = document.createElement('div');
// let a = document.createElement(img');

// Node Attributes :
// x.style.color = 'red';
//y.className = 'y';

//Append etc...