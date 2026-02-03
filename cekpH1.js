let pH = prompt("Masukkan nilai pH larutan (0-14):");

if (pH === null || pH === "") {
    alert("Kamu belum memasukkan nilai!");
} else {
    let nilai = parseFloat(pH);

    if (nilai < 7) {
        // Logika pH kurang dari 7 [cite: 48, 59]
        alert("Sifat Larutan: Asam"); 
    } 
    else if (nilai > 7) {
        // Logika pH lebih dari 7 [cite: 50, 64]
        alert("Sifat Larutan: Basa"); 
    } 
    else {
        // Logika pH netral [cite: 52]
        alert("Sifat Larutan: Netral"); 
    }
}