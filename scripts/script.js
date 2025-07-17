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


//shop kaffee content

const coffeeSets = {
    item1: {
        img0: "./media/shop/Gesamt_1.webp",
        img1: "./media/shop/Kaffee_1.webp",
        img2: "./media/shop/Bohnen_1.webp"
    },
    item2: {
        img0: "./media/shop/Gesamt_2.webp",
        img1: "./media/shop/Kaffee_2.webp",
        img2: "./media/shop/Bohnen_2.webp"
    },
    item3: {
        img0: "./media/shop/Gesamt_3.webp",
        img1: "./media/shop/Kaffee_3.webp",
        img2: "./media/shop/Bohnen_3.webp"
    },
    item4: {
        img0: "./media/shop/Gesamt_4.webp",
        img1: "./media/shop/Kaffee_4.webp",
        img2: "./media/shop/Bohnen_4.webp"
    },
    item5: {
        img0: "./media/shop/Gesamt_5.webp",
        img1: "./media/shop/Kaffee_5.webp",
        img2: "./media/shop/Bohnen_5.webp"
    },
    item6: {
        img0: "./media/shop/Gesamt_6.webp",
        img1: "./media/shop/Kaffee_6.webp",
        img2: "./media/shop/Bohnen_6.webp"
    },
    item7: {
        img0: "./media/shop/Gesamt_7.webp",
        img1: "./media/shop/Kaffee_7.webp",
        img2: "./media/shop/Bohnen_7.webp"
    }
};

document.querySelectorAll('.shop__card').forEach(shopCard =>{
    const cardId = shopCard.id
    const itemDisplayImg = shopCard.querySelector('.item__display img')
    let currIndex = 0

    if(coffeeSets[cardId]){
        itemDisplayImg.src = coffeeSets[cardId][`img${currIndex}`];
        console.log(currIndex)

        const nextBtn = shopCard.querySelector('.next_item__btn')
        nextBtn.addEventListener('click', () =>{
            currIndex++
            if(currIndex > 2){
                currIndex = 0
            }
            itemDisplayImg.src = coffeeSets[cardId][`img${currIndex}`];
        })

        const prevBtn = shopCard.querySelector('.prev_item__btn')
        prevBtn.addEventListener('click', () =>{
            currIndex--
            if(currIndex < 0){
                currIndex = 2
            } 
            itemDisplayImg.src = coffeeSets[cardId][`img${currIndex}`];
        })
    }
})

//faq

const faqItems = document.querySelectorAll('.faq__item')

faqItems.forEach(item => {
    const question = item.querySelector('.faq__question')
    const answer = item.querySelector('.faq__answer')
    const icon = item.querySelector('img')

    question.addEventListener('click', () => {
        const isActive = answer.classList.contains('active')

        faqItems.forEach(otherItem => {
            const otherAnswer = otherItem.querySelector('.faq__answer')
            const otherIcon = otherItem.querySelector('img')
            if (otherAnswer) otherAnswer.classList.remove('active')
            if (otherIcon) otherIcon.src = './media/support/arrow-circle-down.svg'
        });

        if (!isActive) {
            answer.classList.add('active')
            if (icon) icon.src = './media/support/arrow-circle-up.svg'
        } else {
            if (icon) icon.src = './media/support/arrow-circle-down.svg'
        }
    })
});
