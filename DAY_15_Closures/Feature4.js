/* Feature Request -> 4 :
    Loop Closure Script:
        - Create a script that demonstrates closures in loops to ensure functions log the correct index.
*/

const createFunctions = () => {
  let functions = [];

  for (let i = 0; i < 5; i++) {
    functions.push(
      ((index) => {
        return () => {
          console.log(index);
        };
      })(i)
    );
  }

  return functions;
};

const functionsArray = createFunctions();

functionsArray[0](); // Logs: 0
functionsArray[1](); // Logs: 1
functionsArray[2](); // Logs: 2
functionsArray[3](); // Logs: 3
functionsArray[4](); // Logs: 4
