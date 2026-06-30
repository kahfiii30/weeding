const XLSX = require('xlsx');

const workbook = XLSX.utils.book_new();

// Sheet: Mempelai
const mempelaiData = [
  { Peran: "Pria", Nama: "Adrian Mahendra", Panggilan: "Adrian", OrangTua: "Putra dari Bapak Budi Mahendra & Ibu Lestari", Foto: "/groom.png" },
  { Peran: "Wanita", Nama: "Natasha Eleonora", Panggilan: "Natasha", OrangTua: "Putri dari Bapak Gunawan & Ibu Sarah", Foto: "/bride.png" }
];
const wsMempelai = XLSX.utils.json_to_sheet(mempelaiData);
XLSX.utils.book_append_sheet(workbook, wsMempelai, "Mempelai");

// Sheet: Acara
const acaraData = [
  { Acara: "Akad Nikah", Tanggal: "Minggu, 14 September 2026", Waktu: "08.00 WITA - Selesai", Lokasi: "Islamic Center Samarinda", MapLink: "https://maps.google.com" },
  { Acara: "Resepsi", Tanggal: "Minggu, 14 September 2026", Waktu: "11.00 - 15.00 WITA", Lokasi: "Gedung Serbaguna Samarinda", MapLink: "https://maps.google.com" }
];
const wsAcara = XLSX.utils.json_to_sheet(acaraData);
XLSX.utils.book_append_sheet(workbook, wsAcara, "Acara");

// Sheet: CeritaCinta
const ceritaData = [
  { Tahun: "2021", Judul: "Awal Bertemu", Cerita: "Kami pertama kali bertemu dalam sebuah acara keluarga. Dari obrolan sederhana, tumbuh rasa nyaman yang tidak pernah kami duga." },
  { Tahun: "2023", Judul: "Lamaran", Cerita: "Setelah saling mengenal lebih dalam, kami memutuskan untuk membawa hubungan ini ke tahap yang lebih serius." },
  { Tahun: "2026", Judul: "Pernikahan", Cerita: "Dengan penuh rasa syukur, kami siap memulai perjalanan baru sebagai pasangan suami istri." }
];
const wsCerita = XLSX.utils.json_to_sheet(ceritaData);
XLSX.utils.book_append_sheet(workbook, wsCerita, "CeritaCinta");

// Sheet: Galeri
const galeriData = [
  { Foto: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800" },
  { Foto: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800" },
  { Foto: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800" },
  { Foto: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=800" },
  { Foto: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800" },
  { Foto: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=800" }
];
const wsGaleri = XLSX.utils.json_to_sheet(galeriData);
XLSX.utils.book_append_sheet(workbook, wsGaleri, "Galeri");

// Sheet: Pengaturan
const pengaturanData = [
  { Kunci: "TanggalUtama", Nilai: "Minggu, 14 September 2026" },
  { Kunci: "TanggalCountdown", Nilai: "2026-09-14T08:00:00+08:00" },
  { Kunci: "Bank", Nilai: "Bank BCA" },
  { Kunci: "NoRekening", Nilai: "1234567890" },
  { Kunci: "AtasNama", Nilai: "Natasha Eleonora" },
  { Kunci: "PesanShare", Nilai: "Assalamu’alaikum, dengan penuh rasa syukur kami mengundang Bapak/Ibu/Saudara/i untuk hadir di acara pernikahan Adrian & Natasha pada Minggu, 14 September 2026. Berikut undangan digital kami: " }
];
const wsPengaturan = XLSX.utils.json_to_sheet(pengaturanData);
XLSX.utils.book_append_sheet(workbook, wsPengaturan, "Pengaturan");

XLSX.writeFile(workbook, "public/data.xlsx");
console.log("data.xlsx created in public folder.");
