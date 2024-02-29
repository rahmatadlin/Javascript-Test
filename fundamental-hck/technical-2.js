/**
Remove duplicated data from array

Input
[1, 4, 2, 3, 5, 3, 2, 4]
Output
[1, 2, 3, 4, 5]
 */


const arr = [1, 4, 2, 3, 5, 3, 2, 4];
const uniqueArr = [...new Set(arr)];

uniqueArr.sort((a, b) => a - b);

console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]

