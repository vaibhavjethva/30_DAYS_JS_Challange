/* Feature Request -> 3 :
    Storage Comparison Script:
        - Write a script that saves data to both 'localStorage' and 'sessionStorage', retrieves the data and compares the results.
*/

document.addEventListener('DOMContentLoaded', () => {
    // Function to save data to localStorage and sessionStorage
    const saveData = (key, value) => {
      localStorage.setItem(key, value);
      sessionStorage.setItem(key, value);
      console.log(`Saved data: ${key} = ${value}`);
    };
  
    // Function to retrieve data from localStorage and sessionStorage
    const getData = (key) => {
      return {
        localStorageValue: localStorage.getItem(key),
        sessionStorageValue: sessionStorage.getItem(key),
      };
    };
  
    // Function to compare data from localStorage and sessionStorage
    const compareData = (key) => {
      const { localStorageValue, sessionStorageValue } = getData(key);
  
      console.log(`Retrieved from localStorage: ${localStorageValue}`);
      console.log(`Retrieved from sessionStorage: ${sessionStorageValue}`);
  
      if (localStorageValue === sessionStorageValue) {
        console.log(`The data in localStorage and sessionStorage match.`);
      } else {
        console.log(`The data in localStorage and sessionStorage do not match.`);
      }
    };
  
    // Example usage
    const key = 'exampleKey';
    const value = 'exampleValue';
  
    // Save data to both storages
    saveData(key, value);
  
    // Compare data from both storages
    compareData(key);
  });
  