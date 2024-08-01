/* Feature Request -> 2 :
    SessionStorage Script:
        - Create a script that saves, retrieves and removes items from 'sessionStorage' and displays the saved data on page load.
*/

document.addEventListener('DOMContentLoaded', () => {
    // Function to save data to sessionStorage
    const saveToSessionStorage = (key, value) => {
      sessionStorage.setItem(key, value);
      console.log(`Saved: ${key} = ${value}`);
    };
  
    // Function to retrieve data from sessionStorage
    const getFromSessionStorage = (key) => {
      return sessionStorage.getItem(key);
    };
  
    // Function to remove data from sessionStorage
    const removeFromSessionStorage = (key) => {
      sessionStorage.removeItem(key);
      console.log(`Removed: ${key}`);
    };
  
    // Function to display all sessionStorage data
    const displaySessionStorageContent = () => {
      console.log('Current sessionStorage content:');
      const content = [];
      for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        const value = sessionStorage.getItem(key);
        content.push(`${key}: ${value}`);
      }
      document.getElementById('storageContent').textContent = content.length > 0 ? content.join(', ') : 'No data in sessionStorage';
    };
  
    // Example usage
    const key = 'exampleKey';
    const value = 'exampleValue';
  
    // Save data
    saveToSessionStorage(key, value);
  
    // Retrieve data
    const retrievedValue = getFromSessionStorage(key);
    console.log(`Retrieved value: ${retrievedValue}`);
  
    // Remove data
    removeFromSessionStorage(key);
  
    // Display data on page load
    displaySessionStorageContent();
  });
  