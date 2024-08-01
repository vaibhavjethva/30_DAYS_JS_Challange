/* Feature Request -> 1 :
    LocalStorage Script:
        - Write a script that saves, retrieves and removes items from 'localStorage' and displays the saved data on page load.
*/

document.addEventListener('DOMContentLoaded', () => {
    // Function to save data to localStorage
    const saveToLocalStorage = (key, value) => {
      localStorage.setItem(key, value);
      console.log(`Saved: ${key} = ${value}`);
    };
  
    // Function to retrieve data from localStorage
    const getFromLocalStorage = (key) => {
      return localStorage.getItem(key);
    };
  
    // Function to remove data from localStorage
    const removeFromLocalStorage = (key) => {
      localStorage.removeItem(key);
      console.log(`Removed: ${key}`);
    };
  
    // Function to display all localStorage data
    const displayLocalStorageContent = () => {
      console.log('Current localStorage content:');
      const content = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        content.push(`${key}: ${value}`);
      }
      document.getElementById('storageContent').textContent = content.length > 0 ? content.join(', ') : 'No data in localStorage';
    };
  
    // Example usage
    const key = 'exampleKey';
    const value = 'exampleValue';
  
    // Save data
    saveToLocalStorage(key, value);
  
    // Retrieve data
    const retrievedValue = getFromLocalStorage(key);
    console.log(`Retrieved value: ${retrievedValue}`);
  
    // Remove data
    removeFromLocalStorage(key);
  
    // Display data on page load
    displayLocalStorageContent();
  });
  