// Add parallax effect
window.addEventListener('scroll', function() {
    const parallax = document.querySelectorAll('.parallax');
    parallax.forEach(function(element) {
        let scrolled = window.pageYOffset;
        let coords = element.offsetTop;
        let speed = element.dataset.speed;

        if (coords < window.innerHeight) {
            element.style.backgroundPositionY = (scrolled - coords) * speed + 'px';
        }
    });
});
