
console.log('Hi there!');

let fruits = ['apple', 'orange', 'mango'];

fruits.forEach( function printTheFruit( fruit ) {
    console.log(fruit);

    let fruitArticle = document.createElement('article');
    let fruitHeading = document.createElement('h2');
    fruitHeading.innerText = fruit;
    fruitArticle.appendChild(fruitHeading);
    fruitArticle.setAttribute('id', fruit);

    document.getElementById('posts').appendChild(fruitArticle);
} );

console.log( document.getElementById('posts').tagName.toLowerCase() );
let mainTag = document.getElementById('posts');
let theTagName = mainTag.tagName;
let lowerCaseTag = theTagName.toLowerCase();
console.log(lowerCaseTag);

let articles = document.getElementById('posts').childNodes;
let articleArray = Array.from( articles );
console.log(document.getElementById('posts').parentNode);

// document.querySelector('#posts h2'); // only finds the FIRST match
let allMainHeadings = document.querySelectorAll('#posts h2'); // finds ALL matches
Array.from(allMainHeadings).forEach(function addClassToHeading(heading, index) {
    console.log(heading);
    console.log(heading.classList[0]);
    heading.classList.add('foobar');
    console.log(heading.classList[0]);

    heading.setAttribute('id', 'hello'+index);
});
