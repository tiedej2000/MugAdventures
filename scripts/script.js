// observer for tiles // loading adds animation

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1
    });

    const tiles = document.querySelectorAll(".big__tile");
    tiles.forEach(tile => observer.observe(tile));
});