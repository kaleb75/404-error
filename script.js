// Efecto de destello en el título
document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.animated-title');
    const text = document.querySelector('.animated-text');

    // Cambiar el texto del subtítulo con efecto
    setInterval(() => {
        const messages = [
            '¿Perdiste algo? 🔍',
            'Los duendes se llevaron esta página. 🧙‍♂️',
            '¡Vamos, vuelve al inicio! 🚀'
        ];
        text.textContent = messages[Math.floor(Math.random() * messages.length)];
    }, 3000);

    // Efecto de parpadeo en el título
    setInterval(() => {
        title.style.opacity = title.style.opacity === '1' ? '0.5' : '1';
    }, 500);
});
