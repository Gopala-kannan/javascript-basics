// Event Types

/* 
Mouse Events = click, dblclick, mousedown, mouseup, mouseover, mouseout, mousemove
Keyboard Events = keydown, keyup, keypress
Form Events = submit, change, input, focus, blur
Window Events = load, resize, scroll 
**/

// Attaching Event Listeners
//  element.addEventlistener("event", function, useCapture);

// Event Object 

document.addEventListener('click', function(){
    console.log("Mouse X:", event.clientX, "Mouse Y:", event.clientY); // coordinates of the mouse click
    console.log("Target:", event.target); // The element that was clicked
});

// Removing Event Listeners 

function handleClick(){
    alert("button clicked!");
}

const button = document.getElementById("myButton");
button.addEventListener("click", handleClick);

// Remove the event listener later

button.removeEventListener("click", handleClick);