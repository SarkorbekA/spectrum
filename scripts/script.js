console.log('Welcome');
console.log('Developed by Sarkor');


var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 6,
    loop: true,
    centeredSlides: true,
});


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
            }, 200);
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