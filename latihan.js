function selectionSort(arr) {
  // 1. Loop pertama: Berjalan dari awal sampai akhir array
  for (let i = 0; i < arr.length; i++) {
    
    // 2. Variabel bantu: Kita asumsikan angka di posisi 'i' adalah yang terkecil
    let minIndex = i; 

    // 3. Loop kedua: Mencari ke sisa angka di sebelah kanan
    for (let j = i + 1; j < arr.length; j++) {
      // 4. Perbandingan: "Eh, ada yang lebih kecil dari minIndex nggak?"
      if (arr[j] < arr[minIndex]) {
        minIndex = j; // Kalau ada, catat posisi barunya
      }
    }

    // 5. Eksekusi: Setelah ketemu yang paling kecil, tukar ke posisi depan (i)
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  
  // 6. Output: Kembalikan array yang sudah rapi
  return arr;
}
