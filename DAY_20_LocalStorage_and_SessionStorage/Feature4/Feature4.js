/* Feature Request -> 4 :
    Clear Storage Script:
        - Create a script that clears all data from both 'localStorage' and 'sessionStorage', and verifies the operation.
*/

document.addEventListener('DOMContentLoaded', () => {
    // Function to clear all data from localStorage and sessionStorage
    const clearAllStorage = () => {
      localStorage.clear();
      sessionStorage.clear();
      console.log('Cleared all data from localStorage and sessionStorage.');
    };
  
    // Function to display all data from localStorage and sessionStorage
    const displayStorageContent = () => {
      console.log('Checking localStorage content:');
      if (localStorage.length === 0) {
        console.log('localStorage is empty.');
      } else {
        console.log('localStorage is not empty:');
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          const value = localStorage.getItem(key);
          console.log(`${key}: ${value}`);
        }
      }
  
      console.log('Checking sessionStorage content:');
      if (sessionStorage.length === 0) {
        console.log('sessionStorage is empty.');
      } else {
        console.log('sessionStorage is not empty:');
        for (let i = 0; i < sessionStorage.length; i++) {
          const key = sessionStorage.key(i);
          const value = sessionStorage.getItem(key);
          console.log(`${key}: ${value}`);
        }
      }
    };
  
    // Clear all storage and display content to verify
    clearAllStorage();
    displayStorageContent();
  });
  