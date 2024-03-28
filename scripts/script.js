console.log('Welcome');
console.log('Developed by Sarkor');

var currentIndex = 0;
const featuremImg = document.querySelectorAll('.features__image-item')

var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 6,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    mousewheel: true,
    on: {
        slideChange: function () {
            featuremImg.forEach(el => el.classList.remove('active'));
            featuremImg[this.realIndex].classList.add('active')
            // currentIndex = this.realIndex + 1;
        },
    },
});

// var swiperIcon = new Swiper(".mySwiperIcon", {
//     loop: true,
//     allowTouchMove: false,
//     effect: "fade",
// });



// swiperIcon.controller.control = swiper;
// swiper.controller.control = swiperIcon;


const burgerOpen = document.querySelector('.nav__open');
const burgerClose = document.querySelector('.nav__exit-btn');
const burgerMenu = document.querySelector('.header__box');
const body = document.querySelector('body');
const filter = document.querySelector('.filter');

burgerOpen.addEventListener('click', () => {
    burgerMenu.classList.add('active')
    body.classList.add('active')
    filter.classList.add('active')
})

burgerClose.addEventListener('click', () => {
    burgerMenu.classList.remove('active')
    body.classList.remove('active')
    filter.classList.remove('active')
})

filter.addEventListener('click', () => {
    burgerMenu.classList.remove('active')
    body.classList.remove('active')
    filter.classList.remove('active')
})


const clientList = document.querySelectorAll('.client__left-item');
const clientAboutList = document.querySelectorAll('.client__right-about');
const clientInfoList = document.querySelectorAll('.client__right-info');


const clientImgItem = document.querySelector('.client__right-img img');
const clientImgList = [
    './images/product.png',
    'http://3.bp.blogspot.com/_E5z0Iw_Z9kQ/Sr2PgjWNiGI/AAAAAAAADxA/tybe11kmnIM/s320/P1030159.JPG',
    './images/product.png',
    './images/product.png',
    './images/product.png',
    './images/product.png',
]

currentIndex = 0;

for (let i = 0; i < clientList.length; i++) {
    const el = clientList[i];
    el.addEventListener('click', () => {
        clientList.forEach(el => el.classList.remove('active'));
        clientAboutList.forEach(el => el.classList.remove('active'));
        clientInfoList.forEach(el => el.classList.remove('active'));
        el.classList.add('active')
        clientAboutList[i].classList.add('active');
        clientInfoList[i].classList.add('active');
        if (currentIndex != i) {
            clientImgItem.classList.add('active');
            clientImgItem.setAttribute('src', clientImgList[i]);
            setTimeout(function () {
                clientImgItem.classList.remove('active');
            }, 50);
        }
        currentIndex = i;
    })
}


const navList = document.querySelectorAll('.header .nav__list-link');

for (let i = 0; i < navList.length; i++) {
    const el = navList[i];
    el.addEventListener('click', () => {
        burgerMenu.classList.remove('active')
        body.classList.remove('active')
        filter.classList.remove('active')
    })
}


let lastScrollTop = 0;
let delta = 50;

window.addEventListener('scroll', function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (Math.abs(lastScrollTop - currentScroll) <= delta) {
        return;
    }

    if (currentScroll > lastScrollTop) {
        document.querySelector('.header-box').classList.add('active');
    } else {
        document.querySelector('.header-box').classList.remove('active');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// const langBtn = document.querySelector('.header__lang-title');
// const langList = document.querySelector('.header__lang-list');

// langBtn.addEventListener('click', () => {
//     langList.classList.toggle('active');
// })


// const langFooterBtn = document.querySelector('.footer__lang-title');
// const langFooterList = document.querySelector('.footer__lang-list');

// langFooterBtn.addEventListener('click', () => {
//     langFooterList.classList.toggle('active');
// })


// var options = {
//     rootMargin: '120px',
//     threshold: [0, .25, .50, .75, 1]
// }

// var optionsTwo = {
//     rootMargin: '10px',
//     threshold: [0, .25, .50, .75, 1]
// }

// var callback = function (entries, observer) {
//     entries.forEach((el, index) => {
//         if (el.isIntersecting && el.intersectionRatio > .53) {
//             setTimeout(() => {
//                 el.target.classList.add('reveal-after');
//             }, index * 100);
//         } else {
//             el.target.classList.remove('reveal-after');
//         }
//     })
// };

// var callbackTwo = function (entries, observer) {
//     entries.forEach((el, index) => {
//         if (el.isIntersecting && el.intersectionRatio > .5) {
//             setTimeout(() => {
//                 el.target.classList.add('reveal-after');
//             }, index * 100);
//         } else {
//             el.target.classList.remove('reveal-after');
//         }
//     })
// };

// var observer = new IntersectionObserver(callback, options);
// var observerSecond = new IntersectionObserver(callbackTwo, options);

// document.querySelectorAll('.card').forEach(el => {
//     observer.observe(el);
// })

// document.querySelectorAll('.reveal-left').forEach(el => {
//     observerSecond.observe(el);
// })

// document.querySelectorAll('.reveal-right').forEach(el => {
//     observerSecond.observe(el);
// })

// document.querySelectorAll('.reveal-top').forEach(el => {
//     observer.observe(el);
// })
// document.querySelectorAll('.reveal-bottom').forEach(el => {
//     observer.observe(el);
// })