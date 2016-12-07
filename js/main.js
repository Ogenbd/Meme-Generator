'use strict';

var gMemes = [
            {id: 1, url: '../assets/img/1.jpg', keywords: ['sean', 'bean', 'lord of the rings']},
            {id: 2, url: '../assets/img/2.jpg', keywords: ['animal', 'awkward', 'seal']},
            {id: 3, url: '../assets/img/3.jpg', keywords: ['fry', 'cartoon', 'futurama']},
            {id: 4, url: '../assets/img/4.jpg', keywords: ['crazy', 'cartoon']},
            {id: 5, url: '../assets/img/5.jpg', keywords: ['buzz', 'cartoon', 'space']},
            {id: 6, url: '../assets/img/6.jpg', keywords: ['winter is coming', 'person','game of thrones']},
            {id: 7, url: '../assets/img/7.jpg', keywords: ['person', 'cartoon', 'first world problems']},
            {id: 8, url: '../assets/img/8.jpg', keywords: ['person', 'rich kid']},
            {id: 9, url: '../assets/img/9.jpg', keywords: ['kermit', 'cartoon']},
            {id: 10, url: '../assets/img/10.jpg', keywords: ['baby', 'success']},
            {id: 11, url: '../assets/img/11.jpg', keywords: ['kid', 'you tell me']},
            {id: 12, url: '../assets/img/12.jpg', keywords: ['star trek', 'pikard']}];

function appInit() {
    renderImgPreviews();
}

function renderImgPreviews() {
    var strHtml = '';
    var elGallery = document.querySelector('.innerGallery');
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


function filterImg (){
    var x = document.getElementById('search');
    var text = "";
        text += x.elements[0].value;
    console.log(text);


     var strHtml2 = '';
     var elGallery = document.querySelector('.innerGallery');
     var filterdImg = [];
    // for (var i = 0; i < gMemes.length ; i++){
    //      filterdImg = gMemes[i].filter(function (filtMeme) { 
    //    //  for(var j = 0; j< filtMeme.keywords.length; j++){
    //         return (filtMeme.keywords === text);
    //      //}
    //     });
    // }


    // for(var i = 0; i < gMemes.length; i++){

    //     var obj = gMemes[i];
        
    //     for( var key in obj){
    //         if(text === obj[keywords]){
    //         gMemes[i].push(filterdImg);
    //         }    
    //     }
    // }    
    if (text ==="") renderImgPreviews()
    else { 
        gMemes.forEach(function(mem){
            mem.keywords.forEach(function(element) {
                if (element === text){
                    filterdImg.push(mem);
                 }
            });
    
        });

        filterdImg.forEach(function (meme) {
            strHtml2 += '<div class="meme"><div class="hexagon meme'+ meme.id 
            +'"><div class="hexTop"></div><div class="hexBottom"></div></div></div>';
        });

    
        elGallery.innerHTML = strHtml2;
        filterdImg.forEach(function(meme){
            var elMeme = document.querySelector('.meme'+ meme.id);
            elMeme.style.backgroundImage = 'url('+meme.url+')';
            })
    }
}