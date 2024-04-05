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
    on: {
        slideChange: function () {
            featuremImg.forEach(el => el.classList.remove('active'));
            featuremImg[this.realIndex].classList.add('active')
            currentIndex = this.realIndex + 1;
        },
    },
    allowTouchMove: false,
    mousewheel: false,
    breakpoints: {
        576: {
            allowTouchMove: true,
            mousewheel: true,
        },
    },
});



var swiperThree = new Swiper(".leftSwiper", {
    spaceBetween: 0,
    slidesPerView: 2.4,
    breakpoints: {
        400: {
            slidesPerView: 3.3,
        },
    },
});

// var swiperTwo = new Swiper(".worksSwiper", {
//     spaceBetween: 20,
//     navigation: {
//         nextEl: ".works__right-right",
//         prevEl: ".works__right-left",
//     },
// });


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
const clientListBtn = document.querySelectorAll('.client__left-el');
const clientAboutList = document.querySelectorAll('.client__right-about');
const clientInfoList = document.querySelectorAll('.client__right-info');
const clientTitle = document.querySelectorAll('.client__right-title h3');


const clientImgItem = document.querySelectorAll('.client__right-img img');

currentIndex = 0;

for (let i = 0; i < clientList.length; i++) {
    const el = clientList[i];
    const elSecond = clientListBtn[i];
    el.addEventListener('click', () => {
        clientList.forEach(el => el.classList.remove('active'));
        clientAboutList.forEach(el => el.classList.remove('active'));
        clientInfoList.forEach(el => el.classList.remove('active'));
        clientTitle.forEach(el => el.classList.remove('active'));
        clientImgItem.forEach(el => el.classList.remove('active'));
        el.classList.add('active')
        clientAboutList[i].classList.add('active');
        clientInfoList[i].classList.add('active');
        clientTitle[i].classList.add('active');
        clientImgItem[i].classList.add('active');
    })
    elSecond.addEventListener('click', () => {
        clientListBtn.forEach(el => el.classList.remove('active'));
        clientAboutList.forEach(el => el.classList.remove('active'));
        clientInfoList.forEach(el => el.classList.remove('active'));
        clientTitle.forEach(el => el.classList.remove('active'));
        clientImgItem.forEach(el => el.classList.remove('active'));
        elSecond.classList.add('active')
        clientAboutList[i].classList.add('active');
        clientInfoList[i].classList.add('active');
        clientTitle[i].classList.add('active');
        clientImgItem[i].classList.add('active');
    })
}

const worksBtnList = document.querySelectorAll('.works__left-item');
const worksList = document.querySelectorAll('.works__right-inner');

for (let i = 0; i < worksBtnList.length; i++) {
    const el = worksBtnList[i];

    el.addEventListener('click', () => {
        swiperTwo.forEach(el => el.slideTo(0))
        worksBtnList.forEach(el => el.classList.remove('active'));
        el.classList.add('active')
        worksList.forEach(el => el.classList.remove('active'));
        worksList[i].classList.add('active')
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