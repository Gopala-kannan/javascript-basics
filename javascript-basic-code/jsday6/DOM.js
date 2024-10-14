// Selecting Elements

const elementid =  document.getElementById("idname"); //ID
const elementclass =  document.getElementsByClassName("classname"); //class
const paragraphs = document.getElementsByTagName("p or <tag>"); //tag
const element = document.querySelector(".class");
const elements = document.querySelectorAll(".myClass");

// Modifying Elements

element.textContent = "Hello World!"; // textContent
element.innerHtml = "<h1>Hello World!</h1>"; // innnerHTML

//changing Attributes

element.setAttribute('src','image.jpg');
const srcValue = element.getAttribute('src');
element.removeAttribute('alt');

// Modifying Styles
//style
element.style.color = 'blue';
element.style.fontSize ='20px';

//adding and removing classes
element.classList.add('newClass');
element.classList.remove("oldClass");

// Creating and Removing Elements

const newElement = document.createElement('div');
newElement.textContent ='New Element';
document.body.appendChild(newElement); // creating new elements to the body
element.remove(); // removing elements

// Event Listeners
element.addEventListener('click',function(){
    alert("Element clicked")
});

// Traversing the Dom 

const parent = element.parentNode;
const childElement = element.children;
const next = element.nextElementSibling;
const prev = element.previousElementSibling;