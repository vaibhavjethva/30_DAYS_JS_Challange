/* Activity -> 1 : Understanding Promises */

// Task_1 - Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This is the resolved message after 2 seconds");
    }, 2000);
  });
  
  myPromise.then(message => {
    console.log(message);
  });
  
// Task_2 - Create a promise that rejects with an error message after a 2-second timeout and handle the error using '.catch()'.

  const myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("This is the error message after 2 seconds"));
    }, 2000);
  });
  
  myPromise1.catch(error => {
    console.error(error.message);
  });
  
/* Activity -> 2 : Chaining Promises */

// Task_3 - Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

// Function to simulate a server request
const fetchData = (step) => 
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Data from step ${step}`);
      }, 1000 * step); // Delay increases with each step
    });
  
  // Chain the promises
  fetchData(1)
    .then(data1 => {
      console.log(data1); // Log data from step 1
      return fetchData(2); // Fetch data for the next step
    })
    .then(data2 => {
      console.log(data2); // Log data from step 2
      return fetchData(3); // Fetch data for the next step
    })
    .then(data3 => {
      console.log(data3); // Log data from step 3
    })
    .catch(error => {
      console.error('Error:', error);
    });

/* Activity -> 3 : Using Async/Await */

// Task_4 - Write an async function that waits for a promise to resolve and then logs the resolved value.

// Function to simulate a server request
const fetchData1 = () => 
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("Fetched data");
      }, 2000); // 2-second delay
    });
  
  // Async function to wait for the promise and log the value
  const fetchAndLogData = async () => {
    try {
      const data = await fetchData1(); // Wait for the promise to resolve
      console.log(data); // Log the resolved value
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  // Call the async function
  fetchAndLogData();
  
// Task_5 - Write an async function that handles a rejected promise using try-catch and logs the error message.

// Function to simulate a server request that rejects
const fetchData2 = () => 
    new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("Failed to fetch data"));
      }, 2000); // 2-second delay
    });
  
  // Async function to handle the rejected promise and log the error
  const fetchAndHandleError = async () => {
    try {
      const data = await fetchData2(); // Wait for the promise to resolve
      console.log(data); // This won't be executed if the promise rejects
    } catch (error) {
      console.error('Error:', error.message); // Log the error message
    }
  };
  
  // Call the async function
  fetchAndHandleError();
  
/* Activity -> 4 : Fetching data from an API */

// Task_6 - Use the 'fetch' API to get data from a public API and log the response data to the console using promises.

  // URL of the public API
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// Fetch data from the API and log the response
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return response.json(); // Parse the JSON from the response
  })
  .then(data => {
    console.log(data); // Log the response data
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });

//   {
//     userId: 1,
//     id: 1,
//     title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//     body: 'quia et suscipit\n' +
//       'suscipit recusandae consequuntur expedita et cum\n' +
//       'reprehenderit molestiae ut ut quas totam\n' +
//       'nostrum rerum est autem sunt rem eveniet architecto'
//   }

// Task_7 - Use the 'fetch' API to get data from a public API and log the response data to the console using async/await.

// URL of the public API
const apiUrl1 = 'https://jsonplaceholder.typicode.com/posts/1';

// Async function to fetch and log data
const fetchAndLogData1 = async () => {
  try {
    const response = await fetch(apiUrl1); // Await the fetch call
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data = await response.json(); // Await the JSON parsing
    console.log(data); // Log the response data
  } catch (error) {
    console.error('Fetch error:', error);
  }
};

// Call the async function
fetchAndLogData1();

//   {
//     userId: 1,
//     id: 1,
//     title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//     body: 'quia et suscipit\n' +
//       'suscipit recusandae consequuntur expedita et cum\n' +
//       'reprehenderit molestiae ut ut quas totam\n' +
//       'nostrum rerum est autem sunt rem eveniet architecto'
//   }

/* Activity -> 5 : Concurrent Promises */

// Task_8 - Use the 'Promise.all' to wait for multiple promises to resolve and then log all their values.

// URLs of the public APIs
const apiUrls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
  ];
  
  // Function to fetch data from a given URL
  const fetchData3 = (url) => fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return response.json();
  });
  
  // Use Promise.all to wait for multiple fetch promises
  Promise.all(apiUrls.map(url => fetchData3(url)))
    .then(results => {
      results.forEach((data, index) => {
        console.log(`Data from URL ${index + 1}:`, data);
      });
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });

    // Data from URL 1: {
    //     userId: 1,
    //     id: 1,
    //     title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    //     body: 'quia et suscipit\n' +
    //       'suscipit recusandae consequuntur expedita et cum\n' +
    //       'reprehenderit molestiae ut ut quas totam\n' +
    //       'nostrum rerum est autem sunt rem eveniet architecto'
    //   }
    //   Data from URL 2: {
    //     userId: 1,
    //     id: 2,
    //     title: 'qui est esse',
    //     body: 'est rerum tempore vitae\n' +
    //       'sequi sint nihil reprehenderit dolor beatae ea dolores neque\n' +
    //       'fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\n' +
    //       'qui aperiam non debitis possimus qui neque nisi nulla'
    //   }
    //   Data from URL 3: {
    //     userId: 1,
    //     id: 3,
    //     title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    //     body: 'et iusto sed quo iure\n' +
    //       'voluptatem occaecati omnis eligendi aut ad\n' +
    //       'voluptatem doloribus vel accusantium quis pariatur\n' +
    //       'molestiae porro eius odio et labore et velit aut'
    //   }

// Task_9 - Use the 'Promise.race' to log the value of the first promise that resolves among multiple promises.

// URLs of the public APIs
const apiUrls1 = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
  ];
  
  // Function to fetch data from a given URL
  const fetchData4 = (url) => fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return response.json();
  });
  
  // Use Promise.race to log the first resolved promise
  Promise.race(apiUrls1.map(url => fetchData4(url)))
    .then(result => {
      console.log('First resolved data:', result);
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
  
    // First resolved data: {
    //     userId: 1,
    //     id: 1,
    //     title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    //     body: 'quia et suscipit\n' +
    //       'suscipit recusandae consequuntur expedita et cum\n' +
    //       'reprehenderit molestiae ut ut quas totam\n' +
    //       'nostrum rerum est autem sunt rem eveniet architecto'
    //   }