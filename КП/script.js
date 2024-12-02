
function checkVisibility() {
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        const rect = row.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
            row.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);