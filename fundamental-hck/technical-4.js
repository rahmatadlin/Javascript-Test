/**
Find prefix of the word from array of string
Input
['flower', 'flow', 'flight']
Output
fl
 */

const input = ['flower', 'flow', 'flight'];

function findPrefix(arr) {
    if (!arr.length) return ''; // Jika array kosong, kembalikan string kosong

    let prefix = arr[0]; // Ambil kata pertama sebagai awalan

    for (let i = 1; i < arr.length; i++) {
        // Ulangi array string dari indeks kedua
        const word = arr[i];
        let j = 0;
        // Bandingkan karakter-karakter di awalan dengan karakter-karakter di kata selanjutnya
        while (j < prefix.length && j < word.length && prefix[j] === word[j]) {
            j++;
        }
        prefix = prefix.slice(0, j); // Potong awalan hingga indeks ke-j
    }

    return prefix;
}

const prefix = findPrefix(input);
console.log(prefix); // Output: 'fl'
