/* Activity -> 1 : Selecting and Manipulating Elements */

// Task_1 - Select an HTML element by its ID and change its next content.

const changeContent = () => {
    // Select the element by its ID
    const titleElement = document.getElementById('title');
    const descriptionElement = document.getElementById('description');

    // Change the content of the selected elements
    titleElement.textContent = 'New Title';
    descriptionElement.textContent = 'This is the new description.';
};

// Task_2 - Select an HTML element by its class and change its background color.

const changeBackgroundColor = () => {
    // Select elements by their class
    const boxes = document.querySelectorAll('.box');
    
    // Change the background color of each selected element
    boxes.forEach(box => {
        box.style.backgroundColor = 'lightblue';
    });
};

/* Activity -> 2 : Creating and Appending Elements */

// Task_3 - Create a new 'div' element with some text content and append it to the body.

// Create a new 'div' element
const newDiv = document.createElement('div');

// Add text content to the new 'div'
newDiv.textContent = 'This is a new div element added to the body.';

// Optionally, you can add some styles to the new 'div'
newDiv.style.backgroundColor = 'lightyellow';
newDiv.style.padding = '10px';
newDiv.style.margin = '10px';
newDiv.style.border = '1px solid #ccc';

// Append the new 'div' to the body
document.body.appendChild(newDiv);

// Task_4 - Create a new 'li' element and add it to an existing 'ul' list.

const addListItem = () => {
    // Create a new 'li' element
    const newListItem = document.createElement('li');
    
    // Add text content to the new 'li'
    newListItem.textContent = 'New List Item';
    
    // Select the existing 'ul' element
    const ulElement = document.querySelector('#myList');
    
    // Append the new 'li' to the 'ul'
    if (ulElement) {
        ulElement.appendChild(newListItem);
    } else {
        console.log('No <ul> element found in the document.');
    }
};

// Call the function to add the new 'li' element
addListItem();

/* Activity -> 3 : Removing Elements */

// Task_5 - Select an HTML element and remove it from the DOM.

const removeElement = () => {
    const elementToRemove = document.querySelector('.box'); // Select the first element with class 'box'
    if (elementToRemove) {
        elementToRemove.remove(); // Remove the selected element
    } else {
        console.log('No element with class "box" found.');
    }
};

// Task_6 - Remove the last child of a specific HTML element.

const removeLastChild = () => {
    // Select the parent element
    const parentElement = document.querySelector('#myList');

    // Check if the parent element exists
    if (parentElement) {
        // Select the last child of the parent element
        const lastChild = parentElement.lastElementChild;

        // Check if there is a last child
        if (lastChild) {
            // Remove the last child
            lastChild.remove();
        } else {
            console.log('No children to remove.');
        }
    } else {
        console.log('No parent element found.');
    }
};

/* Activity -> 4 : Modifying Attributes and Classes */

// Task_7 - Select an HTML element and change one of it's attributes (e.g., 'src' of an 'img' tag).

const changeImageSrc = () => {
    // Select the image element by its ID
    const imageElement = document.getElementById('myImage');

    // Check if the image element exists
    if (imageElement) {
        // Change the 'src' attribute to a new value
        imageElement.src = 'new-image.jpg'; // Provide the path to the new image
    } else {
        console.log('No image element found.');
    }
}; // Inspect img src in browser

// Task_8 - Add and remove a CSS class to/from an HTML element.

// Function to add the 'highlight' class
const addClass = () => {
    const divElement = document.getElementById('myDiv');
    if (divElement) {
        divElement.classList.add('highlight');
    } else {
        console.log('No div element found.');
    }
};

// Function to remove the 'highlight' class
const removeClass = () => {
    const divElement = document.getElementById('myDiv');
    if (divElement) {
        divElement.classList.remove('highlight');
    } else {
        console.log('No div element found.');
    }
};

/* Activity -> 5 : Event Handling */

// Task_9 - Add a click event listener to a button that changes the text content of a paragraph.

// Function to change the text content of the paragraph
const changeParagraphText = () => {
    // Select the paragraph element by its ID
    const paragraphElement = document.getElementById('myParagraph');
    
    // Check if the paragraph element exists
    if (paragraphElement) {
        // Update the text content of the paragraph
        paragraphElement.textContent = 'The text has been changed!';
    } else {
        console.log('No paragraph element found.');
    }
};

// Function to set up the event listener
const setupEventListener = () => {
    // Select the button element by its ID
    const buttonElement = document.getElementById('changeTextButton');
    
    // Check if the button element exists
    if (buttonElement) {
        // Add a click event listener to the button
        buttonElement.addEventListener('click', changeParagraphText);
    } else {
        console.log('No button element found.');
    }
};

// Call the function to set up the event listener
setupEventListener();

// Task_10 - Add a mousehover event listener to an element that changes its border color.

// Function to change the border color on mouse over
const handleMouseOver = (event) => {
    event.target.style.borderColor = 'red';
};

// Function to reset the border color on mouse out
const handleMouseOut = (event) => {
    event.target.style.borderColor = 'black';
};

// Function to set up the event listeners
const setupHoverEffects = () => {
    // Select the div element by its ID
    const divElement = document.getElementById('hoverDiv');
    
    // Check if the div element exists
    if (divElement) {
        // Add mouseover and mouseout event listeners
        divElement.addEventListener('mouseover', handleMouseOver);
        divElement.addEventListener('mouseout', handleMouseOut);
    } else {
        console.log('No div element found.');
    }
};

// Call the function to set up the event listeners
setupHoverEffects();
