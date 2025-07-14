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

 new rive.Rive({
    src: '../media/mocca_coffee_pot.riv',
    canvas: document.getElementById('rive-canvas'),
    autoplay: true,
  });

//shop kaffee content

const coffeeSets = {
    item1:{
        img1: "../media/shop/Bohne_1.png", img2: "media/Bohne_1b.png" 
    }
}
//

const shopCard1 = document.querySelector('.shop__card #item1')
const nextBtn = document.querySelector('.next_item__btn')

shopCard1.style.backgroundImage = `url('${coffeeSets.item1.img1}')`;



//rive
new rive.Rive({
    src: 'mocca_coffee_pot (500x500).riv',
    canvas: document.getElementById('rive-canvas'),
});
