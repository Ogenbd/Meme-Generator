'use strict';

var gPopWords = {};
var gCanvas = document.querySelector('.canvas');
var gCtx = gCanvas.getContext('2d');
var gImg;
var gTopTxt=  { align: 'center',
                size: 30,
                font: 'impact',
                color: 'white',
                shadow: '' }

var gBottomTxt=  {  align: 'center',
                    size: 30,
                    font: 'impact',
                    color: 'white',
                    shadow: '' }
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
    // popSearch();
}

// renders meme gallery
function renderImgPreviews() {
    var strHtml = '';
    var elGallery = document.querySelector('.innerGallery');
    gMemes.forEach(function (meme) {
        strHtml += '<div class="meme"><div class="hexagon meme' + meme.id
            + '" onclick="memePicked('+ meme.id +')"><div class="hexTop"></div><div class="hexBottom"></div></div></div>';
    });

    elGallery.innerHTML = strHtml;
    gMemes.forEach(function (meme) {
        var elMeme = document.querySelector('.meme' + meme.id);
        elMeme.style.backgroundImage = 'url(' + meme.url + ')';
    })
}

// filters meme gallery by search input
function filterImg() {
    var x = document.getElementById('search');
    var text = '';
    text += x.elements[0].value;

    var strHtml2 = '';
    var elGallery = document.querySelector('.innerGallery');
    var filterdImg = [];

    if (text === '') renderImgPreviews()
    else {
        gMemes.forEach(function (mem) {
            mem.keywords.forEach(function (element) {
                if (element === text) {
                    filterdImg.push(mem);
                }
            });

        });

        filterdImg.forEach(function (meme) {
            strHtml2 += '<div class="meme"><div class="hexagon meme' + meme.id
                + '" onclick="memePicked('+ meme.id +')"><div class="hexTop"></div><div class="hexBottom"></div></div></div>';
        });

        elGallery.innerHTML = strHtml2;
        filterdImg.forEach(function (meme) {
            var elMeme = document.querySelector('.meme' + meme.id);
            elMeme.style.backgroundImage = 'url(' + meme.url + ')';
        })
    }
}
// to do: seperate top and bottom text while still keeping code DRY
function alignText(input, alignment) {
    if(input === 'top') gTopTxt.align = alignment;
    else {gBottomTxt.align = alignment}
}

function fontSize(input, mark) {
    if(input === 'top') {
        if(mark === 'plus') gTopTxt.size += 4;
        else {gTopTxt.size -= 4}
    }
    else {
        if(mark === 'plus') gBottomTxt.size += 4;
        else {gBottomTxt.size -= 4}
    }
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
}

// takes clicked meme and sets it up on canvas
function memePicked(memeId) {
    var elGallery = document.querySelector('.gallery');
    var elEditor = document.querySelector('.meme-editor')
    var memeUrl;
    gMemes.forEach(function(meme){
        if(memeId === meme.id) memeUrl = meme.url;
    });
    elGallery.style.visibility = 'hidden';
    // elEditor.style.position = 'static';
    elEditor.style.visibility = 'visible';
    console.log(elEditor);
    elEditor.style.width = '100%';
    drawOnCanvas(memeUrl);
}

function drawOnCanvas(memeUrl) {
    gImg = new Image();
    gImg.src = memeUrl;

    gImg.onload = function () {
        gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height);
        document.querySelector('.top-text-input').addEventListener('input', function () {
            gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height);
            gCtx.save();
            var stringTitle = document.querySelector('.top-text-input').value.toUpperCase();
            gCtx.font = gTopTxt.size + 'px ' + gTopTxt.font;
            gCtx.textAlign = gTopTxt.align;
            gCtx.fillStyle = gTopTxt.color;
            gCtx.fillText(stringTitle, gCanvas.width / 2 , 30);
            gCtx.restore();
        });
        document.querySelector('.bottom-text-input').addEventListener('input', function () {
            gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height);
            gCtx.save();
            var stringTitle = document.querySelector('.bottom-text-input').value.toUpperCase();
            gCtx.font = gBottomTxt.size + 'px ' + gBottomTxt.font;
            gCtx.textAlign = gBottomTxt.align;
            gCtx.fillStyle = gBottomTxt.color;
            gCtx.fillText(stringTitle, gCanvas.width / 2 , gCanvas.height - 20);
            gCtx.restore();
        });
    };
}

function sendLocalStorage(){

var y = document.getElementById('contact');
    var cnt = [
    ];
    cnt.name = y.elements[0].value ;
    cnt.email = y.elements[1].value ;
    cnt.subject = y.elements[2].value ;
    cnt.text = y.elements[3].value ;


console.log(cnt);
localStorage.setItem(cnt.name , JSON.stringify(cnt.name)+ JSON.stringify(cnt.email)
+ JSON.stringify(cnt.subject)+ JSON.stringify(cnt.text));
     y.elements[0].value= '' ;
     y.elements[1].value= '' ;
     y.elements[2].value= '' ;
     y.elements[3].value= '' ;

}

// function popSearch (){

//     var strHTML3 = '';
//     var elPop = document.querySelector('.popular');
//    for (var i = 0; i < gMemes.length; i++){
//          for (var j = 0; j < gMemes[i].keywords.length; j++){
//            if (gPopWords[gMemes[i].keywords[j]]) gPopWords[gMemes[i].keywords[j]]++;
//            else gPopWords[gMemes[i].keywords[j]] = 1;
           
//            strHTML3 += ' ' + gMemes[i].keywords[j] + ' ';
//          }
//        // }
//    }
//    console.log(gPopWords);
//    elPop.innerHTML = strHTML3;
// }

// function renderWords (){

//     var elPop = document.querySelector('.popular');
//     for (var i = 0; i < gPopWords.keywords.length; i++){
//         elPop.innerHTML = gPopWords[i] + ' ';
//     }
// }