/**
Find missing number from the list

Input
[9, 6, 4, 2, 3, 5, 7, 0, 1]
Output
8
 */

const input = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function findMissingNumber(arr) {
  arr.sort((a, b) => a - b); // Mengurutkan array dalam urutan numerik

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i) {
      return i; // Mengembalikan angka yang hilang
    }
  }

  return arr.length; // Jika tidak ada angka yang hilang, maka angka yang hilang adalah yang terbesar
}

const missingNumber = findMissingNumber(input);
console.log(missingNumber); // Output: 8


