/* Feature Request -> 4 :
    N-Queens Script:
        - Create a script that includes a function to solve the N-Queens problem and logs the distinct solutions.
*/

const solveNQueens = (n) => {
  const solutions = [];
  const board = Array.from({ length: n }, () => Array(n).fill("."));
  const cols = new Set();
  const diag1 = new Set();
  const diag2 = new Set();

  const backtrack = (row) => {
    if (row === n) {
      solutions.push(board.map((row) => row.join("")));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col))
        continue;

      board[row][col] = "Q";
      cols.add(col);
      diag1.add(row - col);
      diag2.add(row + col);

      backtrack(row + 1);

      board[row][col] = ".";
      cols.delete(col);
      diag1.delete(row - col);
      diag2.delete(row + col);
    }
  };

  backtrack(0);
  return solutions;
};

// Helper function to print the solutions in a readable format
const printSolutions = (solutions) => {
  solutions.forEach((solution, index) => {
    console.log(`Solution ${index + 1}:`);
    solution.forEach((row) => console.log(row));
    console.log("");
  });
};

// Test cases
const solutions4 = solveNQueens(4);
printSolutions(solutions4); // Output: 2 distinct solutions for 4-queens

const solutions8 = solveNQueens(8);
console.log(`Number of solutions for 8-queens: ${solutions8.length}`);

// Solution 1:
// .Q..
// ...Q
// Q...
// ..Q.

// Solution 2:
// ..Q.
// Q...
// ...Q
// .Q..

// Number of solutions for 8-queens: 92
