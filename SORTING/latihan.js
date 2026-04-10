<!DOCTYPE html>
<html>
<body>
    <h1>Program Bubble Sort</h1>
    <p>Masukkan angka acak dipisahkan dengan koma (Contoh: 34,10,5,20)</p>
    
    <button type="button" onclick="jalankanSort()">Input & Urutkan</button>

    <h3 id="hasil"></h3>

    <script>
        function jalankanSort() {
            // 1. MENGAMBIL INPUT
            let input = prompt("Masukkan angka-angka (pisahkan dengan koma):");

            if (input === null || input === "") {
                alert("Input tidak boleh kosong!");
                return;
            }

            // 2. KONVERSI TEKS MENJADI ARRAY ANGKA
            // split(",") memotong teks jadi array, map(Number) mengubah teks jadi angka
            let data = input.split(",").map(Number);

            // 3. PROSES BUBBLE SORT (Inti Algoritma)
            let n = data.length;
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n - 1 - i; j++) {
                    // Jika angka kiri > angka kanan, kita tukar
                    if (data[j] > data[j + 1]) {
                        let temp = data[j];
                        data[j] = data[j + 1];
                        data[j + 1] = temp;
                    }
                }
            }

            // 4. MENAMPILKAN HASIL
            document.getElementById("hasil").innerHTML = "Hasil Urut: " + data.join(" - ");
            alert("Selesai! Hasilnya: " + data.join(", "));
        }
    </script>
</body>
</html>