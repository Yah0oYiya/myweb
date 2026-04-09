// --- 2. ALGORITMA SEARCHING: LINEAR SEARCH ---
// Mencari data satu per satu dari awal
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return `Linear Search: Angka ${target} ketemu di index ke-${i}`;
        }
    }
    return `Linear Search: Angka ${target} tidak ditemukan`;
}

let angkaAcak = [34, 10, 5, 67, 22];
console.log("Data Awal:", angkaAcak);

// 1. Jalankan Sorting
let angkaUrut = bubbleSort([...angkaAcak]); // Gunakan [...array] agar data asli tidak rusak
console.log("Hasil Bubble Sort:", angkaUrut);

console.log("------------------------------------");

// 2. Jalankan Searching
console.log(linearSearch(angkaUrut, 67));
console.log(binarySearch(angkaUrut, 67));