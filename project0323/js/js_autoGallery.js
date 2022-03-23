'use strict';
// .gallery>ul>li에 각각 a0.jpg~a4.jpg 배경이미지
// 배열, .push(), for문 이용해서 설정 하시오

const gallery = document.querySelector('.gallery')
const galleryUl = gallery.querySelector('.gallery>ul')
const galleryUlLi = galleryUl.querySelectorAll('li');

const liSize = galleryUlLi.length;


const arrBg = [];

for (let i = 0; i < liSize; i++) {
    arrBg.push(`url(img/sec1_${i}.jpg) no-repeat 50%/cover`);
    galleryUlLi[i].style.background = arrBg[i];
}


let i = -1



const autoGallery = () => {
    i++
    console.log(`i->${i}`)

    const gap = galleryUlLi[1].offsetLeft - galleryUlLi[0].offsetLeft;
    const goto = (-i * gap) + 'px';

    gallery.style.left = goto;
    gallery.style.transition = 'all 0.5s';

    if (i >= liSize - 1) i = -1;

}


let setIn = setInterval(autoGallery, 1000);

// 찾아서, 이벤트, 구현 (함수)
const arrow = document.querySelectorAll('span.arrow');
// span.arrow를 마우스 오버시 setInterval중지
// arrow[0].addEventListener('mouseover',fnOver);
// arrow[1].addEventListener('mouseover',fnOver);
// span.arrow를 마우스 아웃시 setInterval다시 시작
// arrow[0].addEventListener('mouseout',fnOut);
// arrow[1].addEventListener('mouseout',fnOut);
/*
// forEach사용
arrow.forEach(el=>el.addEventListener('mouseover',()=>{
    console.log(event.type, event.target);
    clearInterval(setIn)
}));
// forEach사용
arrow.forEach(el=>el.addEventListener('mouseout',()=>{
    console.log(event.type, event.target);
    setIn = setInterval(autoGallery, 1000);
}));
*/


arrow.forEach(el => {
    el.addEventListener('mouseover', () => clearInterval(setIn));
    el.addEventListener('mouseout', () => setIn = setInterval(autoGallery, 1000));
});
////////////////////////////////////////////////////////////////////

const itemsUlLi = document.querySelectorAll('.items>ul>li')
// 1
/*
    // .items>ul>li를 마우스 오버시 setInterval중지
    // itemsUlLi[0].addEventListener('mouseover',fnOver);
    // itemsUlLi[1].addEventListener('mouseover',fnOver);
    // itemsUlLi[2].addEventListener('mouseover',fnOver);
    // itemsUlLi[3].addEventListener('mouseover',fnOver);
    // itemsUlLi[4].addEventListener('mouseover',fnOver);
    // .items>ul>li를 마우스 아웃시 setInterval다시 시작
    // itemsUlLi[0].addEventListener('mouseout',fnOut);
    // itemsUlLi[1].addEventListener('mouseout',fnOut);
    // itemsUlLi[2].addEventListener('mouseout',fnOut);
    // itemsUlLi[3].addEventListener('mouseout',fnOut);
    // itemsUlLi[4].addEventListener('mouseout',fnOut);
*/

// 2
// for를 .items>ul>li를 마우스 오버시 setInterval중지
/*
    for(let i=0; i<itemsUlLi.length;i++){
        itemsUlLi[i].addEventListener('mouseover',fnOver);
    }
*/

// 3
// forEach를 .items>ul>li를 마우스 오버시 setInterval중지
// itemsUlLi.forEach(el=> el.addEventListener('mouseover',fnOver));
// forEach를 ..items>ul>li를 마우스 아웃시 setInterval다시 시작
// itemsUlLi.forEach(el=> el.addEventListener('mouseout',fnOut));


// mouseover
// function fnOver() {
//     console.log(event.type, event.target)
//     clearInterval(setIn);
// }
// // mouseout
// function fnOut() {
//     console.log(event.type, event.target);
//     setIn = setInterval(autoGallery, 1000);
// }

//4
// itemsUlLi.forEach(function(el){
//     el.addEventListener('mouseover',function(){
//         console.log(event.type,event.target);
//         clearInterval(setIn);
//     });
// });
/*
itemsUlLi.forEach(el => el.addEventListener('mouseover', () => {
    console.log(event.type, event.target);
    clearInterval(setIn)
}));
itemsUlLi.forEach(el => el.addEventListener('mouseout', () => {
    console.log(event.type, event.target);
    setIn = setInterval(autoGallery, 1000);
}));
*/
itemsUlLi.forEach(el => {
    el.addEventListener('mouseover', () => clearInterval(setIn));
    el.addEventListener('mouseout', () => setIn = setInterval(autoGallery, 1000));
});
///////////////////////////////////////////////////////////////////
(() => autoGallery())();