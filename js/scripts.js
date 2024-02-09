// Custom Scripts
let tween = gsap
    .to(".banner__wrapper", {
        xPercent: -100,
        repeat: -1,
        duration: 20,
        ease: "linear",
    })
    .totalProgress(0.5);

gsap.set(".banner__wrapper", { xPercent: 0 });

// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active')
            body.classList.add('locked')
        } else {
            menu.classList.remove('active')
            burger.classList.remove('active')
            body.classList.remove('locked')
        }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991.98) {
            menu.classList.remove('active')
            burger.classList.remove('active')
            body.classList.remove('locked')
        }
    })
}
burgerMenu()

const swiper = new Swiper(".swiper1", {
    // Optional parameters
    loop: true,
    spaceBetween: 25,
    // If we need pagination
    pagination: {
        el: ".swiper-pagination1",
        clickable: true,
    },

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    speed: 300,
});

const swiper2 = new Swiper(".swiper2", {
    loop: true,
    grabCursor: true,
    effect: "coverflow",
    // slideNextClass: "swiper2-next-slide",
    // slidePrevClass: "swiper2-prev-slide",
    loopAdditionalSlides: 1,
    centeredSlides: false,
    slidesPerView: 1,

    breakpoints: {
        0: {
            coverflowEffect: {
                rotate: 0,
                stretch: 140,
                depth: 120,
                modifier: 1,
                slideShadows: false,
            },
        },
        480: {
            coverflowEffect: {
                rotate: 0,
                stretch: 300,
                depth: 120,
                modifier: 1,
                slideShadows: false,
            },
        },
        560: {
            coverflowEffect: {
                rotate: 0,
                stretch: 400,
                depth: 120,
                modifier: 1,
                slideShadows: false,
            },
        },
    },
    pagination: {
        el: ".swiper-pagination2",
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    speed: 400,
});

// Аккордеон
function accordion() {
    const items = document.querySelectorAll('.accordion__item-trigger')
    items.forEach(item => {
        item.addEventListener('click', () => {
            const parent = item.parentNode
            if (parent.classList.contains('accordion__item-active')) {
                parent.classList.remove('accordion__item-active')
            } else {
                document
                    .querySelectorAll('.accordion__item')
                    .forEach(child => child.classList.remove('accordion__item-active'))   
                parent.classList.add('accordion__item-active')
            }
        })
    })
}
accordion() 
