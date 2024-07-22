/* Activity -> 1 : Basic Event Handling */

// Task_1 - Add a click event listener to a button that changes the text content of a paragraph.

// Select the button and paragraph elements
const button = document.getElementById("changeTextButton");
const paragraph = document.getElementById("textParagraph");

// Add the event listener to the button using an arrow function
button.addEventListener("click", () => {
  paragraph.textContent = "The text has been changed!";
});

// Task_2 - Add a double-click event listener to an image that toggles its visibility.

const image = document.getElementById("toggleImage");

// Add the double-click event listener to the image using an arrow function
image.addEventListener("dblclick", () => {
  if (image.style.display === "none") {
    image.style.display = "block";
  } else {
    image.style.display = "none";
  }
});

/* Activity -> 2 : Mouse Events */

// Task_3 - Add a mousehover event listener to an element that changes its background color.
const hoverElement = document.getElementById("hoverElement");

// Add the mouseover event listener to the element using an arrow function
hoverElement.addEventListener("mouseover", () => {
  hoverElement.style.backgroundColor = "lightgreen";
});

// Add the mouseout event listener to revert the background color when not hovering
hoverElement.addEventListener("mouseout", () => {
  hoverElement.style.backgroundColor = "lightblue";
});

// Task_4 - Add a mouseout event listener to an element that resets its background color.

const resetElement = document.getElementById("resetElement");

// Add the mouseout event listener to the element using an arrow function
resetElement.addEventListener("mouseout", () => {
  resetElement.style.backgroundColor = "lightcoral";
});

// Add the mouseover event listener to the element using an arrow function
resetElement.addEventListener("mouseover", () => {
  resetElement.style.backgroundColor = "lightgreen";
});

/* Activity -> 3 : Keyboard Events */

// Task_5 - Add a keydown event listener to an input field that logs the key pressed to the console.

const inputField = document.getElementById("inputField");

// Add the keydown event listener to the input field using an arrow function
inputField.addEventListener("keydown", (event) => {
  console.log(`Key pressed: ${event.key}`);
});

// Task_6 - Add a keyup event listener to an input field that displays the current value in a paragraph.

// Select the input field and paragraph elements
const inputField1 = document.getElementById("inputField1");
const displayParagraph = document.getElementById("displayParagraph");

// Add the keyup event listener to the input field using an arrow function
inputField1.addEventListener("keyup", () => {
  displayParagraph.textContent = `Current value: ${inputField1.value}`;
});

/* Activity -> 4 : Form Events */

// Task_7 - Add a submit event listener to a form that prevents the difault submission and logs the form data to the console.

const form = document.getElementById("myForm");

// Add the submit event listener to the form using an arrow function
form.addEventListener("submit", (event) => {
  // Prevent the default form submission
  event.preventDefault();

  // Create a FormData object to capture the form data
  const formData = new FormData(form);

  // Log the form data to the console
  for (const [name, value] of formData) {
    console.log(`${name}: ${value}`);
  }
});

// Task_8 - Add a change event listener to a select dropdown that displays the selected value in a paragraph.

const selectDropdown = document.getElementById("mySelect");
const displayParagraph1 = document.getElementById("displayParagraph1");

// Add the change event listener to the select dropdown using an arrow function
selectDropdown.addEventListener("change", () => {
  displayParagraph1.textContent = `Selected value: ${selectDropdown.value}`;
});

/* Activity -> 5 : Event Delegation */

// Task_9 - Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

const list = document.getElementById("myList");

// Add the click event listener to the parent element using event delegation
list.addEventListener("click", (event) => {
  // Check if the clicked element is an <li> item
  if (event.target && event.target.tagName === "LI") {
    console.log(`Clicked item: ${event.target.textContent}`);
  }
});

// Task_10 - Add an event listener to a parent element that listens for events from dynamically added child elements.

const parent = document.getElementById("parent");
const addButton = document.getElementById("addButton");

// Function to handle clicks on dynamically added buttons
function handleButtonClick(event) {
  if (event.target && event.target.classList.contains("dynamic-button")) {
    console.log(`Clicked button: ${event.target.textContent}`);
  }
}

// Add the event listener to the parent element using event delegation
parent.addEventListener("click", handleButtonClick);

// Add an event listener to the button to add new child elements
addButton.addEventListener("click", () => {
  const newButton = document.createElement("button");
  newButton.className = "dynamic-button";
  newButton.textContent = "New Button";
  parent.appendChild(newButton);
});
