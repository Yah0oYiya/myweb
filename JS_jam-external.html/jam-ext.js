function update() {
            let now = new Date();
            let days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
            let pasaran = ["Wage", "Kliwon", "Legi", "Pahing", "Pon"];
            
            // 1. Menggunakan Let & Switch
            let dayName;
            switch (now.getDay()) {
                case 0: dayName = days[0]; break;
                case 1: dayName = days[1]; break;
                case 2: dayName = days[2]; break;
                case 3: dayName = days[3]; break;
                case 4: dayName = days[4]; break;
                case 5: dayName = days[5]; break;
                case 6: dayName = days[6]; break;
            }

            // 2. Hitung Weton dalam 1 baris let
            let weton = pasaran[Math.floor(now.getTime() / 86400000) % 5];

            // 3. Update Tampilan (Langsung ke element ID)
            document.getElementById('clock').innerText = now.toLocaleTimeString('id-ID');
            document.getElementById('date').innerText = `${dayName} ${weton}, ${now.toLocaleDateString('id-ID', {dateStyle:'long'})}`;
        }

        setInterval(update, 1000);
        update();