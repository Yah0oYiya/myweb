let pH = prompt("Masukkan nilai pH larutan (0-14):");

if (pH === null || pH === "") {
    alert("Kamu belum memasukkan nilai!");
} else {
    let nilai = parseFloat(pH);

    if (nilai < 7) {
        alert("Sifat Larutan: Asam"); [cite: 49, 61]
    } 
    else if (nilai > 7) {
        alert("Sifat Larutan: Basa"); [cite: 51, 63]
    } 
    else {
        alert("Sifat Larutan: Netral"); [cite: 53, 67]
    }
}