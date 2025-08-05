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

    const tippsAudio = document.getElementById("tippsAudio");
    const audioSection = document.getElementById("section-beginners-corner");
    const muteButton = document.querySelector(".mute-button");
    const togglePlay = document.getElementById('toggle-play');
    const togglePause = document.getElementById('toggle-pause');
    
    tippsAudio.volume = 0;
    tippsAudio.loop = true;

    let isAudioPlaying = false;

    // Mute button click handler
    muteButton.addEventListener('click', () => {
        togglePlay.classList.toggle('active')
        togglePause.classList.toggle('active')
        
        if (!isAudioPlaying) {
            tippsAudio.play().then(() => {
                fadeIn(tippsAudio, 2000);
                isAudioPlaying = true;
            }).catch(error => {
                console.log('Audio play failed:', error);
            });
        } else {
            // Stop playing audio
            fadeOut(tippsAudio, 2000);
            isAudioPlaying = false;
        }
    });

    const audioObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Show mute button when section is reached
                muteButton.classList.add("active");
            }
            // Removed the else block that was hiding the button when leaving section
        });
    }, {
        threshold: 0.1
    });

    function fadeIn(audio, duration) {
        const steps = 20;
        const stepDuration = duration / steps;
        const volumeStep = 1 / steps;
        
        let currentStep = 0;
        const fadeInterval = setInterval(() => {
            currentStep++;
            audio.volume = Math.min(currentStep * volumeStep, 1);
            
            if (currentStep >= steps) {
                clearInterval(fadeInterval);
            }
        }, stepDuration);
    }

    function fadeOut(audio, duration) {
        const steps = 20;
        const stepDuration = duration / steps;
        const volumeStep = audio.volume / steps;
        
        let currentStep = 0;
        const fadeInterval = setInterval(() => {
            currentStep++;
            audio.volume = Math.max(audio.volume - volumeStep, 0);
            
            if (currentStep >= steps || audio.volume <= 0) {
                clearInterval(fadeInterval);
                audio.pause();
            }
        }, stepDuration);
    }

    audioObserver.observe(audioSection);
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

//expertentipps

document.querySelectorAll('.content').forEach((el) => {
    el.addEventListener('click', () => {
      el.classList.toggle('active');
    });
});

// karte

document.addEventListener('DOMContentLoaded', function () {
    const weltkarteWrapper = document.querySelector('.weltkarte_wrapper');
    const markers = weltkarteWrapper.querySelectorAll('.marker');
    const descriptions = weltkarteWrapper.querySelectorAll('.description');

    markers.forEach((marker, index) => {
        marker.addEventListener('click', () => {
            descriptions.forEach(desc => desc.classList.remove('active'));

            descriptions[index].classList.add('active');
        });
    });
});

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


//mobile nav

const hamburgerOpenBtn = document.querySelector('.hamburger-btn-open')
const hamburgerCloseBtn = document.querySelector('.hamburger-btn-close')

const nav = document.querySelector('nav')

hamburgerCloseBtn.addEventListener('click', () =>{
    hamburgerCloseBtn.classList.toggle('active')
    hamburgerOpenBtn.classList.toggle('active')
    nav.classList.toggle('active')
})

hamburgerOpenBtn.addEventListener('click', () =>{
    hamburgerCloseBtn.classList.toggle('active')
    hamburgerOpenBtn.classList.toggle('active')
    nav.classList.toggle('active')
})

const navLinks = document.querySelectorAll('nav a')

navLinks.forEach(link =>{
    link.addEventListener('click', () =>{
        nav.classList.remove('active')
        hamburgerOpenBtn.classList.toggle('active')
        hamburgerCloseBtn.classList.toggle('active')
    })
})
