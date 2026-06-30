// ============================================================================
// PUSAT DATA UNDANGAN NIKAHLINK
// ============================================================================
// Anda hanya perlu mengubah teks di dalam file ini untuk mengubah isi website!
// Tidak perlu mengedit kode rumit di file lain. Semua data terpusat di sini.
// ============================================================================

export const invitationData = {
  couple: {
    groom: {
      name: "Adrian Mahendra",
      nickname: "Adrian",
      parents: "Putra dari Bapak Budi Mahendra & Ibu Lestari",
      // Cara ganti foto: Taruh foto Anda di folder "public" lalu ubah nama filenya di sini
      photo: "/groom.png" 
    },
    bride: {
      name: "Natasha Eleonora",
      nickname: "Natasha",
      parents: "Putri dari Bapak Gunawan & Ibu Sarah",
      // Cara ganti foto: Taruh foto Anda di folder "public" lalu ubah nama filenya di sini
      photo: "/bride.png"
    },
  },
  date: {
    // Tanggal yang akan tampil di halaman depan
    full: "Minggu, 14 September 2026",
    // Tanggal untuk fitur Hitung Mundur (Countdown). 
    // Format: YYYY-MM-DDTHH:MM:SS+08:00 (Sesuaikan +08:00 untuk WITA, +07:00 WIB, +09:00 WIT)
    countdownTarget: "2026-09-14T08:00:00+08:00", 
  },
  events: [
    {
      title: "Akad Nikah",
      date: "Minggu, 14 September 2026",
      time: "08.00 WITA - Selesai",
      location: "Islamic Center Samarinda",
      mapLink: "https://maps.google.com", // Ganti dengan link Google Maps asli
    },
    {
      title: "Resepsi",
      date: "Minggu, 14 September 2026",
      time: "11.00 - 15.00 WITA",
      location: "Gedung Serbaguna Samarinda",
      mapLink: "https://maps.google.com", // Ganti dengan link Google Maps asli
    },
  ],
  loveStory: [
    {
      year: "2021",
      title: "Awal Bertemu",
      story: "Kami pertama kali bertemu dalam sebuah acara keluarga. Dari obrolan sederhana, tumbuh rasa nyaman yang tidak pernah kami duga.",
    },
    {
      year: "2023",
      title: "Lamaran",
      story: "Setelah saling mengenal lebih dalam, kami memutuskan untuk membawa hubungan ini ke tahap yang lebih serius.",
    },
    {
      year: "2026",
      title: "Pernikahan",
      story: "Dengan penuh rasa syukur, kami siap memulai perjalanan baru sebagai pasangan suami istri.",
    },
  ],
  gallery: [
    // Untuk ganti foto galeri, ubah link gambar di bawah ini.
    // Bisa menggunakan link dari internet, atau taruh foto di folder "public" dan tulis "/nama-foto.jpg"
    { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800" },
    { id: 2, src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800" },
    { id: 3, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800" },
    { id: 4, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=800" },
    { id: 5, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800" },
    { id: 6, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=800" },
  ],
  gift: {
    // Data rekening untuk fitur Amplop Digital
    bank: "Bank BCA",
    accountNumber: "1234567890",
    accountName: "Natasha Eleonora",
  },
  // Pesan bawaan yang muncul saat tombol "Bagikan" ditekan
  shareMessage: "Assalamu’alaikum, dengan penuh rasa syukur kami mengundang Bapak/Ibu/Saudara/i untuk hadir di acara pernikahan Adrian & Natasha pada Minggu, 14 September 2026. Berikut undangan digital kami: "
};
