// JavaScript for animations (with hover effect)
const carCards = document.querySelectorAll('.car-card');

carCards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('hovered');
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('hovered');
    });
});
