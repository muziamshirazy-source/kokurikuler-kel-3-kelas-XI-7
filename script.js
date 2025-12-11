// Fungsi untuk toggle (buka/tutup) konten akordeon
function toggleAccordion(id) {
    const content = document.getElementById(id);

    if (content.style.maxHeight) {
        // Jika sedang terbuka, tutup
        content.style.maxHeight = null;
    } else {
        // Jika tertutup, buka
        content.style.maxHeight = content.scrollHeight + "px";
    }
}

// Anda juga bisa menambahkan fitur lain di sini,
// seperti animasi saat scroll atau validasi formulir (jika ada).

// Contoh fitur: Menyorot navigasi saat di bagian yang relevan (Scroll Spy - fitur lanjutan)
// Anda bisa implementasikannya di masa depan jika ingin memperdalam JS.