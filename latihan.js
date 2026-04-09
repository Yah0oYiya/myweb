/**
 * TUGAS MANDIRI INFORMATIKA: ALGORITMA
 * File ini berisi contoh Sorting dan Searching
 */

// --- 1. ALGORITMA SORTING: BUBBLE SORT ---
// Fungsi ini mengurutkan angka dari terkecil ke terbesar
function bubbleSort(data) {
    let n = data.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            // Jika angka kiri lebih besar dari angka kanan, tukar!
            if (data[j] > data[j + 1]) {
                let temp = data[j];
                data[j] = data[j + 1];
                data[j + 1] = temp;
            }
        }
    }
    return data;
}

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

// --- 3. ALGORITMA SEARCHING: BINARY SEARCH ---
// Mencari dengan membagi dua (Syarat: Data harus urut)
function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        
        if (arr[mid] === target) {
            return `Binary Search: Angka ${target} ketemu di index ke-${mid}`;
        } else if (arr[mid] < target) {
            low = mid + 1; // Cari ke kanan
        } else {
            high = mid - 1; // Cari ke kiri
        }
    }
    return "Binary Search: Data tidak ditemukan";
}

// --- CARA MENJALANKAN & TESTING ---

let angkaAcak = [34, 10, 5, 67, 22];
console.log("Data Awal:", angkaAcak);

// 1. Jalankan Sorting
let angkaUrut = bubbleSort([...angkaAcak]); // Gunakan [...array] agar data asli tidak rusak
console.log("Hasil Bubble Sort:", angkaUrut);

console.log("------------------------------------");

// 2. Jalankan Searching
console.log(linearSearch(angkaUrut, 67));
console.log(binarySearch(angkaUrut, 67));