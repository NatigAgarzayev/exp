// Custom Scripts
/* window.addEventListener("DOMContentLoaded", () => {
    const banner = document.querySelectorAll(".banner__wrapper");

    banner.forEach((item) => {
        item.classList.add("marquee");
    });
}); */

/* let currentScroll = 0;
let isScrollingDown = true; */

let tween = gsap
    .to(".banner__wrapper", {
        xPercent: -100,
        repeat: -1,
        duration: 20,
        ease: "linear",
    })
    .totalProgress(0.5);

gsap.set(".banner__wrapper", { xPercent: 0 });

/* const swiper = new Swiper(".swiper3", {
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    slidesPerView: 4,
    spaceBetween: 39,
    speed: 5000,
    grabCursor: false,
    breakpoints: {
        0: {
            speed: 1000,
        },
        600: {
            speed: 2000,
        },
    },
});
 */

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
    // Optional parameters
    loop: true,
    grabCursor: true,
    effect: "coverflow",
    initialSlide: 0,
    centeredSlides: false,
    coverflowEffect: {
        rotate: 0,
        depth: 0,
        modifier: 1,
        stretch: 0,
        slideShadows: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1.9,
        },
        480: {
            slidesPerView: 1.9,
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
    speed: 300,
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
