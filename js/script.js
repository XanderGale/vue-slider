// Descrizione:
// Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
// Se volete potete partire dalla mia repo dell'esercizio slider: https://github.com/AlessandroSCPse/js-array-carousel
// Bonus:
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

Vue.config.devtools = true;

const slider = new Vue(
    {
        el: '#img-slider',
        data: {
            activeIndex: 0,
            slides: [
                {
                    imgPath: 'img/01.jpg',
                    imgTitle: 'Svezia',
                    imgText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                },
                {
                    imgPath: 'img/02.jpg',
                    imgTitle: 'Svizzera',
                    imgText: 'Lorem Ipsum.'
                },
                {
                    imgPath: 'img/03.jpg',
                    imgTitle: 'Gran Bretagna',
                    imgText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                },
                {
                    imgPath: 'img/04.jpg',
                    imgTitle: 'Germania',
                    imgText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.'
                },
                {
                    imgPath: 'img/05.jpg',
                    imgTitle: 'Paradise',
                    imgText: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.'
                },
            ],
        },
        methods: {
            nextSlide: function() {
                if ( this.activeIndex < this.slides.length - 1){
                    this.activeIndex ++;
                } else {
                    this.activeIndex = 0;
                }
            },
            prevSlide: function() {
                if ( this.activeIndex > 0 ){
                    this.activeIndex --;
                } else {
                    this.activeIndex = this.slides.length -1;
                }
            },
            showThis: function(index) {
                this.activeIndex = index;
            }
        },
    }
);









// const leftContainer = document.querySelector('.left-image');
// const rightSlider = document.querySelector('.right-slider');

// // console.log(leftContainer);
// // console.log(rightSlider);

// // Popolo i contenitori
// for( let i = 0; i < items.length; i++ ) {
//     const itemPath = items[i];
//     const itemTitle = title[i];
//     const itemText = text[i];
    
    // // Popolare il contenitore di immagini a destra
    // const sliderImage = `
    // <div class="slider-img-container">
    //     <img src="${itemPath}" alt="Image ${i}">
    // </div>
    // `;

//     // Popolare il contenitore di immagini a sinistra
//     const leftImage = `
    // <div class="left-image-container">
    //     <img src="${itemPath}" alt="Image ${i}">

    //     <div class="left-image-text">
    //         <h2>${itemTitle}</h2>
    //         <p>${itemText}</p>
    //     </div>
    // </div>
//     `;

//     rightSlider.innerHTML += sliderImage;
//     leftContainer.innerHTML += leftImage;
// }

// // Rendo active un elemento
// let activeImage = 0;
// const sliderImages = document.getElementsByClassName('slider-img-container');
// const leftImage = document.getElementsByClassName('left-image-container');
// sliderImages[activeImage].classList.add('active');
// leftImage[activeImage].classList.add('active');

// // Al click di prev e next, sposto le classi active all'immagine e al cerchietto
// const downArrow = document.querySelector('.down');
// // console.log(downArrow);
// downArrow.addEventListener('click',
//     function() {
//     // Rimuovere active all'immagine corrente
//     sliderImages[activeImage].classList.remove('active');
//     leftImage[activeImage].classList.remove('active');

//     // incrementare activeImage di 1 solo se non è l'ultima foto
//     // se l'immagine è l'ultima ricomincio da zero
//     if( activeImage < items.length - 1 ) {
//         activeImage++;
//     } else {
//         activeImage = 0;
//     }

//     // assegnare all'immagine la classe active
//     sliderImages[activeImage].classList.add('active');
//     leftImage[activeImage].classList.add('active');
// });

// const upArrow = document.querySelector('.up');
// console.log(upArrow);
// upArrow.addEventListener('click',
//     function() {
//     // Rimuovere active all'immagine corrente
//     sliderImages[activeImage].classList.remove('active');
//     leftImage[activeImage].classList.remove('active');

//     // decrementare activeImage di 1 solo se non è l'ultima foto
//     // se l'immagine è l'ultima ricomincio da zero
//     if ( activeImage > 0 ) {
//         activeImage--;
//     } else {
//         activeImage = items.length - 1;
//     }

//     // assegnare all'immagine la classe active
//     sliderImages[activeImage].classList.add('active');
//     leftImage[activeImage].classList.add('active');
// });