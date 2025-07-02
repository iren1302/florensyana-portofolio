window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled'); // Menambah class saat scroll
    } else {
        header.classList.remove('scrolled'); // Menghapus class saat scroll ke atas
    }
});