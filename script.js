function showSection(sectionId) {
    // Sembunyikan semua bagian dengan animasi fade-out
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0'; // Fade-out effect
        setTimeout(() => {
            section.style.display = 'none';
        }, 300); // Delay to allow fade-out animation
    });

    // Tampilkan bagian yang dipilih dengan animasi fade-in
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        setTimeout(() => {
            selectedSection.style.display = 'block';
            selectedSection.style.opacity = '1'; // Fade-in effect
        }, 300); // Delay to match fade-out timing
    }
}

// Tambahkan efek scroll halus untuk navigasi
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            // Gulir ke bagian yang dipilih
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Tampilkan bagian yang dipilih
            showSection(targetId);
        }
    });
});

// Tampilkan bagian pertama secara default
document.addEventListener('DOMContentLoaded', () => {
    showSection('tentang-saya');
});