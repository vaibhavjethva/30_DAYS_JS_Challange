/* Feature Request -> 3 :
    Third-Party Module Script:
        - Write a script that installs, imports and uses functions from third-party modules like 'lodash' and 'axios'.
*/

import _ from 'lodash';
import axios from 'axios';

// Using lodash to manipulate an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const shuffledNumbers = _.shuffle(numbers);
console.log('Original array :', numbers);
console.log('Shuffled array :', shuffledNumbers);

//   Original array : [
//     1, 2, 3, 4,  5,
//     6, 7, 8, 9, 10
//   ]
//   Shuffled array : [
//     8, 6,  1, 3, 9,
//     4, 7, 10, 2, 5
//   ]

// Using axios to make an HTTP GET request
async function fetchData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        console.log('Data from API:', response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();

// Data from API: {
//     userId: 1,
//     id: 1,
//     title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//     body: 'quia et suscipit\n' +
//       'suscipit recusandae consequuntur expedita et cum\n' +
//       'reprehenderit molestiae ut ut quas totam\n' +
//       'nostrum rerum est autem sunt rem eveniet architecto'
//   }