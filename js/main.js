'use strict';

var gMemes = [
            {id: 1, url: '../assets/img/1.jpg', keywords: ['sean', 'bean']},
            {id: 2, url: '../assets/img/2.jpg', keywords: ['animal', 'awkward']},
            {id: 3, url: '../assets/img/3.jpg', keywords: ['fry', 'cartoon']},
            {id: 4, url: '../assets/img/4.jpg', keywords: ['crazy', 'cartoon']},
            {id: 5, url: '../assets/img/5.jpg', keywords: ['person', 'cartoon']},
            {id: 6, url: '../assets/img/6.jpg', keywords: ['person', 'cartoon']},
            {id: 7, url: '../assets/img/7.jpg', keywords: ['person', 'cartoon']},
            {id: 8, url: '../assets/img/8.jpg', keywords: ['person', 'cartoon']},
            {id: 9, url: '../assets/img/9.jpg', keywords: ['person', 'cartoon']},
            {id: 10, url: '../assets/img/10.jpg', keywords: ['person', 'cartoon']},
            {id: 11, url: '../assets/img/11.jpg', keywords: ['person', 'cartoon']},
            {id: 12, url: '../assets/img/12.jpg', keywords: ['person', 'cartoon']}];

function renderImgPreviews() {
    var strHtml = '';
    var elGallery = document.querySelector('.gallery');
    gMemes.forEach(function (meme) {
        strHtml += '<div class="meme"><div class="hexagon meme'+ meme.id 
        +'"><div class="hexTop"></div><div class="hexBottom"></div></div></div>';
    });
    elGallery.innerHTML = strHtml;
    gMemes.forEach(function(meme){
        var elMeme = document.querySelector('.meme'+ meme.id);
        elMeme.style.backgroundImage = 'url('+meme.url+')';
    })
}


