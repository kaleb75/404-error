// Efecto de parpadeo en el título
document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('h1');
    setInterval(() => {
        title.style.opacity = title.style.opacity === '1' ? '0.5' : '1';
    }, 500);
});
