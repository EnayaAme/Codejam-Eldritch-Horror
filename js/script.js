"use strict"

import ancientsData from "./ancients.js";

// карты //
import greenCards from "./mythicCards/green/index.js";

import brownCards from "./mythicCards/brown/index.js";

import blueCards from "./mythicCards/blue/index.js";








window.onload = function () {
    // переворачиваем карточки древних //
    flipAncient();
    // создаем колоды //
    createDeck();


}

////////////////////////////////////  КОНСТАНТЫ  ////////////////////////////////////

const background = document.querySelector('.wrapper');

const Azathoth = document.querySelector('.Azathoth');
const AzathothLevels = document.querySelector('.Azathoth-difficulties');

const Cthulthu = document.querySelector('.Cthulthu');
const CthulthuLevels = document.querySelector('.Cthulthu-difficulties');

const IogSothoth = document.querySelector('.IogSothoth');
const IogSothothLevels = document.querySelector('.IogSothoth-difficulties');

const ShubNiggurath = document.querySelector('.ShubNiggurath');
const ShubNiggurathLevels = document.querySelector('.ShubNiggurath-difficulties');

const BACK = document.querySelector('.back');
const CARDS = document.querySelectorAll('.card-back');
const FRONT = document.querySelector('.front')




////////////////////////////////////  ПЕРЕМЕННЫЕ  ////////////////////////////////////
let deck;





////////////////////////////////////  ПЕРЕВОРАЧИВАЕМ КАРТОЧКИ ДРЕВНИХ  ////////////////////////////////////

function flipAzathoth() {
    AzathothLevels.addEventListener('click', (e) => {
        if (e.target.classList.contains('level')) {
            Azathoth.classList.add('flip-ancient');
            Cthulthu.classList.remove('flip-ancient');
            IogSothoth.classList.remove('flip-ancient');
            ShubNiggurath.classList.remove('flip-ancient');
            //меняем бэкграунд//
            background.classList.add('wrapper-Azathoth');
            background.classList.remove('wrapper-start');
            background.classList.remove('wrapper-Cthulthu');
            background.classList.remove('wrapper-IogSothoth');
            background.classList.remove('wrapper-ShubNiggurath');
            // показываем колоду //
            if (!BACK.classList.contains('back-visible')) {
                BACK.classList.add('back-visible');
            }
            // анимация перемешивания колоды //
            mixDeckAnimation();
        }
    })
}

function flipCthulthu() {
    CthulthuLevels.addEventListener('click', (e) => {
        if (e.target.classList.contains('level')) {
            Cthulthu.classList.add('flip-ancient');
            Azathoth.classList.remove('flip-ancient');
            IogSothoth.classList.remove('flip-ancient');
            ShubNiggurath.classList.remove('flip-ancient');
            //меняем бэкграунд//
            background.classList.add('wrapper-Cthulthu');
            background.classList.remove('wrapper-start');
            background.classList.remove('wrapper-Azathoth');
            background.classList.remove('wrapper-IogSothoth');
            background.classList.remove('wrapper-ShubNiggurath');
            // показываем колоду //
            if (!BACK.classList.contains('back-visible')) {
                BACK.classList.add('back-visible');
            }
            // анимация перемешивания колоды //
            mixDeckAnimation();
        }
    })
}

function flipIogSothoth() {
    IogSothothLevels.addEventListener('click', (e) => {
        if (e.target.classList.contains('level')) {
            IogSothoth.classList.add('flip-ancient');
            Cthulthu.classList.remove('flip-ancient');
            Azathoth.classList.remove('flip-ancient');
            ShubNiggurath.classList.remove('flip-ancient');
            //меняем бэкграунд//
            background.classList.add('wrapper-IogSothoth');
            background.classList.remove('wrapper-start');
            background.classList.remove('wrapper-Azathoth');
            background.classList.remove('wrapper-Cthulthu');
            background.classList.remove('wrapper-ShubNiggurath');
            // показываем колоду //
            if (!BACK.classList.contains('back-visible')) {
                BACK.classList.add('back-visible');
            }
            // анимация перемешивания колоды //
            mixDeckAnimation();
        }
    })
}

function flipShubNiggurath() {
    ShubNiggurathLevels.addEventListener('click', (e) => {
        if (e.target.classList.contains('level')) {
            ShubNiggurath.classList.add('flip-ancient');
            Cthulthu.classList.remove('flip-ancient');
            Azathoth.classList.remove('flip-ancient');
            IogSothoth.classList.remove('flip-ancient');
            //меняем бэкграунд//
            background.classList.add('wrapper-ShubNiggurath');
            background.classList.remove('wrapper-start');
            background.classList.remove('wrapper-Azathoth');
            background.classList.remove('wrapper-Cthulthu');
            background.classList.remove('wrapper-IogSothoth');
            // показываем колоду //
            if (!BACK.classList.contains('back-visible')) {
                BACK.classList.add('back-visible');
            }
            // анимация перемешивания колоды //
            mixDeckAnimation();
        }
    })
}

// анимация перемешивания колоды //
function mixDeckAnimation() {
    BACK.classList.add('mix');
    setTimeout ( () => { BACK.classList.remove('mix')}, 500);
}

// аккумулирующая функция по перевороту всех древних //
function flipAncient() {
    flipAzathoth();
    flipCthulthu();
    flipIogSothoth();
    flipShubNiggurath();
}



////////////////////////////////////  СОЗДАЕМ КОЛОДЫ КАРТ  ////////////////////////////////////


//достаем из нужных массивов нужное колличество карт нужного цвета//
function randomCards(color, num) {
    let result = [];
    let getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
    while (result.length != num) {
    let index = getRandomInt(color.length);    
    result.push(color[index]);    
    result = result.filter((v, i, arr) =>  arr.indexOf(v) == i);
    }
    return result;
}

// СРЕДНИЙ УРОВЕНЬ //

function AzathothDeckNormal() {
    let greenTotal = 5;
    let brownTotal = 9;
    let blueTotal = 2;

    let greenArray = randomCards(greenCards, greenTotal); //5
    let brownArray = randomCards(brownCards, brownTotal); //9
    let blueArray = randomCards(blueCards, blueTotal); //2

    //arr.sort(()=>Math.random()-0.5) - перемешать массив //
    let stage1 = greenArray.slice(0, 1).concat(brownArray.slice(0, 2), blueArray[0]).sort(()=>Math.random()-0.5);
    let stage2 = greenArray.slice(1, 3).concat(brownArray.slice(2, 5), blueArray[1]).sort(()=>Math.random()-0.5);
    let stage3 = greenArray.slice(3, 5).concat(brownArray.slice(5, 9)).sort(()=>Math.random()-0.5);

    deck = stage3.concat(stage2, stage1);
    // console.log(deck)
}
AzathothDeckNormal();

function CthulthuDeckNormal() {
    let greenTotal = 4;
    let brownTotal = 9;
    let blueTotal = 2;

    let greenArray = randomCards(greenCards, greenTotal); //4
    let brownArray = randomCards(brownCards, brownTotal); //9
    let blueArray = randomCards(blueCards, blueTotal); //2

    //arr.sort(()=>Math.random()-0.5) - перемешать массив //
    let stage1 = brownArray.slice(0, 2).concat(blueArray.slice(0, 2)).sort(()=>Math.random()-0.5);
    let stage2 = greenArray.slice(0, 1).concat(brownArray.slice(2, 5)).sort(()=>Math.random()-0.5);
    let stage3 = greenArray.slice(1, 4).concat(brownArray.slice(5, 9)).sort(()=>Math.random()-0.5);

    deck = stage3.concat(stage2, stage1);
    // console.log(deck)

}
CthulthuDeckNormal();

function IogSothothDeckNormal() {
    let greenTotal = 5;
    let brownTotal = 9;
    let blueTotal = 2;

    let greenArray = randomCards(greenCards, greenTotal); //5
    let brownArray = randomCards(brownCards, brownTotal); //9
    let blueArray = randomCards(blueCards, blueTotal); //2

    //arr.sort(()=>Math.random()-0.5) - перемешать массив //
    let stage1 = brownArray.slice(0, 2).concat(blueArray[0]).sort(()=>Math.random()-0.5);
    let stage2 = greenArray.slice(0, 2).concat(brownArray.slice(2, 5), blueArray[1]).sort(()=>Math.random()-0.5);
    let stage3 = greenArray.slice(2, 5).concat(brownArray.slice(5, 9)).sort(()=>Math.random()-0.5);

    deck = stage3.concat(stage2, stage1);
    // console.log(deck)

}
IogSothothDeckNormal();

function ShubNiggurathDeckNormal() {
    let greenTotal = 6;
    let brownTotal = 8;
    let blueTotal = 2;

    let greenArray = randomCards(greenCards, greenTotal); //6
    let brownArray = randomCards(brownCards, brownTotal); //8
    let blueArray = randomCards(blueCards, blueTotal); //2

    //arr.sort(()=>Math.random()-0.5) - перемешать массив //
    let stage1 = greenArray.slice(0, 1).concat(brownArray.slice(0, 2), blueArray[0]).sort(()=>Math.random()-0.5);
    let stage2 = greenArray.slice(1, 4).concat(brownArray.slice(2, 4), blueArray[1]).sort(()=>Math.random()-0.5);
    let stage3 = greenArray.slice(4, 6).concat(brownArray.slice(4, 8)).sort(()=>Math.random()-0.5);

    deck = stage3.concat(stage2, stage1);
    // console.log(deck)

}
ShubNiggurathDeckNormal();



// ЛЁГКИЙ УРОВЕНЬ //

function AzathothDeckEasy() {
    let greenTotal = 5;
    let brownTotal = 9;
    let blueTotal = 2;

    let sortedGreenCards = greenCards.filter( card => card.difficulty === "easy" || card.difficulty === "normal");
    let sortedBrownCards = brownCards.filter( card => card.difficulty === "easy" || card.difficulty === "normal");
    let sortedBlueCards = blueCards.filter( card => card.difficulty === "easy" || card.difficulty === "normal");

    let greenArray = randomCards(sortedGreenCards, greenTotal); //5
    let brownArray = randomCards(sortedBrownCards, brownTotal); //9
    let blueArray = randomCards(sortedBlueCards, blueTotal); //2

    //arr.sort(()=>Math.random()-0.5) - перемешать массив //
    let stage1 = greenArray.slice(0, 1).concat(brownArray.slice(0, 2), blueArray[0]).sort(()=>Math.random()-0.5);
    let stage2 = greenArray.slice(1, 3).concat(brownArray.slice(2, 5), blueArray[1]).sort(()=>Math.random()-0.5);
    let stage3 = greenArray.slice(3, 5).concat(brownArray.slice(5, 9)).sort(()=>Math.random()-0.5);

    deck = stage3.concat(stage2, stage1);
    // console.log(deck)

}
AzathothDeckEasy();

function CthulthuDeckEasy() {
    let greenTotal = 4;
    let brownTotal = 9;
    let blueTotal = 2;

    let sortedGreenCards = greenCards.filter( card => card.difficulty === "easy" || card.difficulty === "normal");
    let sortedBrownCards = brownCards.filter( card => card.difficulty === "easy" || card.difficulty === "normal");
    let sortedBlueCards = blueCards.filter( card => card.difficulty === "easy" || card.difficulty === "normal");

    let greenArray = randomCards(sortedGreenCards, greenTotal); //4
    let brownArray = randomCards(sortedBrownCards, brownTotal); //9
    let blueArray = randomCards(sortedBlueCards, blueTotal); //2

    //arr.sort(()=>Math.random()-0.5) - перемешать массив //
    let stage1 = brownArray.slice(0, 2).concat(blueArray.slice(0, 2)).sort(()=>Math.random()-0.5);
    let stage2 = greenArray.slice(0, 1).concat(brownArray.slice(2, 5)).sort(()=>Math.random()-0.5);
    let stage3 = greenArray.slice(1, 4).concat(brownArray.slice(5, 9)).sort(()=>Math.random()-0.5);

    deck = stage3.concat(stage2, stage1);
    //console.log(deck)

}
CthulthuDeckEasy();

function IogSothothDeckEasy() {
    let greenTotal = 5;
    let brownTotal = 9;
    let blueTotal = 2;

    let sortedGreenCards = greenCards.filter( card => card.difficulty === "easy" || card.difficulty === "normal");
    let sortedBrownCards = brownCards.filter( card => card.difficulty === "easy" || card.difficulty === "normal");
    let sortedBlueCards = blueCards.filter( card => card.difficulty === "easy" || card.difficulty === "normal");

    let greenArray = randomCards(sortedGreenCards, greenTotal); //5
    let brownArray = randomCards(sortedBrownCards, brownTotal); //9
    let blueArray = randomCards(sortedBlueCards, blueTotal); //2

    //arr.sort(()=>Math.random()-0.5) - перемешать массив //
    let stage1 = brownArray.slice(0, 2).concat(blueArray[0]).sort(()=>Math.random()-0.5);
    let stage2 = greenArray.slice(0, 2).concat(brownArray.slice(2, 5), blueArray[1]).sort(()=>Math.random()-0.5);
    let stage3 = greenArray.slice(2, 5).concat(brownArray.slice(5, 9)).sort(()=>Math.random()-0.5);

    deck = stage3.concat(stage2, stage1);
    // console.log(deck)

}
IogSothothDeckEasy();

function ShubNiggurathDeckEasy() {
    let greenTotal = 6;
    let brownTotal = 8;
    let blueTotal = 2;

    let sortedGreenCards = greenCards.filter( card => card.difficulty === "easy" || card.difficulty === "normal");
    let sortedBrownCards = brownCards.filter( card => card.difficulty === "easy" || card.difficulty === "normal");
    let sortedBlueCards = blueCards.filter( card => card.difficulty === "easy" || card.difficulty === "normal");

    let greenArray = randomCards(sortedGreenCards, greenTotal); //6
    let brownArray = randomCards(sortedBrownCards, brownTotal); //8
    let blueArray = randomCards(sortedBlueCards, blueTotal); //2

    //arr.sort(()=>Math.random()-0.5) - перемешать массив //
    let stage1 = greenArray.slice(0, 1).concat(brownArray.slice(0, 2), blueArray[0]).sort(()=>Math.random()-0.5);
    let stage2 = greenArray.slice(1, 4).concat(brownArray.slice(2, 4), blueArray[1]).sort(()=>Math.random()-0.5);
    let stage3 = greenArray.slice(4, 6).concat(brownArray.slice(4, 8)).sort(()=>Math.random()-0.5);

    deck = stage3.concat(stage2, stage1);
    // console.log(deck)

}
ShubNiggurathDeckEasy();



// СЛОЖНЫЙ УРОВЕНЬ //

function AzathothDeckHard() {
    let greenTotal = 5;
    let brownTotal = 9;
    let blueTotal = 2;

    let sortedGreenCards = greenCards.filter( card => card.difficulty === "hard" || card.difficulty === "normal");
    let sortedBrownCards = brownCards.filter( card => card.difficulty === "hard" || card.difficulty === "normal");
    let sortedBlueCards = blueCards.filter( card => card.difficulty === "hard" || card.difficulty === "normal");

    let greenArray = randomCards(sortedGreenCards, greenTotal); //5
    let brownArray = randomCards(sortedBrownCards, brownTotal); //9
    let blueArray = randomCards(sortedBlueCards, blueTotal); //2

    //arr.sort(()=>Math.random()-0.5) - перемешать массив //
    let stage1 = greenArray.slice(0, 1).concat(brownArray.slice(0, 2), blueArray[0]).sort(()=>Math.random()-0.5);
    let stage2 = greenArray.slice(1, 3).concat(brownArray.slice(2, 5), blueArray[1]).sort(()=>Math.random()-0.5);
    let stage3 = greenArray.slice(3, 5).concat(brownArray.slice(5, 9)).sort(()=>Math.random()-0.5);

    deck = stage3.concat(stage2, stage1);
    //console.log(deck)

}
AzathothDeckHard();

function CthulthuDeckHard() {
    let greenTotal = 4;
    let brownTotal = 9;
    let blueTotal = 2;

    let sortedGreenCards = greenCards.filter( card => card.difficulty === "hard" || card.difficulty === "normal");
    let sortedBrownCards = brownCards.filter( card => card.difficulty === "hard" || card.difficulty === "normal");
    let sortedBlueCards = blueCards.filter( card => card.difficulty === "hard" || card.difficulty === "normal");

    let greenArray = randomCards(sortedGreenCards, greenTotal); //4
    let brownArray = randomCards(sortedBrownCards, brownTotal); //9
    let blueArray = randomCards(sortedBlueCards, blueTotal); //2

    //arr.sort(()=>Math.random()-0.5) - перемешать массив //
    let stage1 = brownArray.slice(0, 2).concat(blueArray.slice(0, 2)).sort(()=>Math.random()-0.5);
    let stage2 = greenArray.slice(0, 1).concat(brownArray.slice(2, 5)).sort(()=>Math.random()-0.5);
    let stage3 = greenArray.slice(1, 4).concat(brownArray.slice(5, 9)).sort(()=>Math.random()-0.5);

    deck = stage3.concat(stage2, stage1);
    //console.log(deck)

}
CthulthuDeckHard();

function IogSothothDeckHard() {
    let greenTotal = 5;
    let brownTotal = 9;
    let blueTotal = 2;

    let sortedGreenCards = greenCards.filter( card => card.difficulty === "hard" || card.difficulty === "normal");
    let sortedBrownCards = brownCards.filter( card => card.difficulty === "hard" || card.difficulty === "normal");
    let sortedBlueCards = blueCards.filter( card => card.difficulty === "hard" || card.difficulty === "normal");

    let greenArray = randomCards(sortedGreenCards, greenTotal); //5
    let brownArray = randomCards(sortedBrownCards, brownTotal); //9
    let blueArray = randomCards(sortedBlueCards, blueTotal); //2

    //arr.sort(()=>Math.random()-0.5) - перемешать массив //
    let stage1 = brownArray.slice(0, 2).concat(blueArray[0]).sort(()=>Math.random()-0.5);
    let stage2 = greenArray.slice(0, 2).concat(brownArray.slice(2, 5), blueArray[1]).sort(()=>Math.random()-0.5);
    let stage3 = greenArray.slice(2, 5).concat(brownArray.slice(5, 9)).sort(()=>Math.random()-0.5);

    deck = stage3.concat(stage2, stage1);
    //console.log(deck)

}
IogSothothDeckHard();

function ShubNiggurathDeckHard() {
    let greenTotal = 6;
    let brownTotal = 8;
    let blueTotal = 2;

    let sortedGreenCards = greenCards.filter( card => card.difficulty === "hard" || card.difficulty === "normal");
    let sortedBrownCards = brownCards.filter( card => card.difficulty === "hard" || card.difficulty === "normal");
    let sortedBlueCards = blueCards.filter( card => card.difficulty === "hard" || card.difficulty === "normal");

    let greenArray = randomCards(sortedGreenCards, greenTotal); //6
    let brownArray = randomCards(sortedBrownCards, brownTotal); //8
    let blueArray = randomCards(sortedBlueCards, blueTotal); //2

    //arr.sort(()=>Math.random()-0.5) - перемешать массив //
    let stage1 = greenArray.slice(0, 1).concat(brownArray.slice(0, 2), blueArray[0]).sort(()=>Math.random()-0.5);
    let stage2 = greenArray.slice(1, 4).concat(brownArray.slice(2, 4), blueArray[1]).sort(()=>Math.random()-0.5);
    let stage3 = greenArray.slice(4, 6).concat(brownArray.slice(4, 8)).sort(()=>Math.random()-0.5);

    deck = stage3.concat(stage2, stage1);
    //console.log(deck)

}
ShubNiggurathDeckHard();


// ОЧЕНЬ ЛЁГКИЙ УРОВЕНЬ //


function AzathothDeckExtraEasy() {
    let greenTotal = 5;
    let brownTotal = 9;
    let blueTotal = 2;

    let normalBrown = brownCards.filter( card => card.difficulty === "normal");

    let sortedGreenCards = greenCards.filter( card => card.difficulty === "easy");
    let sortedBrownCards = brownCards.filter( card => card.difficulty === "easy").concat(randomCards(normalBrown, 4));
    let sortedBlueCards = blueCards.filter( card => card.difficulty === "easy");

    let greenArray = randomCards(sortedGreenCards, greenTotal); //5
    let brownArray = randomCards(sortedBrownCards, brownTotal); //9
    let blueArray = randomCards(sortedBlueCards, blueTotal); //2

    //arr.sort(()=>Math.random()-0.5) - перемешать массив //
    let stage1 = greenArray.slice(0, 1).concat(brownArray.slice(0, 2), blueArray[0]).sort(()=>Math.random()-0.5);
    let stage2 = greenArray.slice(1, 3).concat(brownArray.slice(2, 5), blueArray[1]).sort(()=>Math.random()-0.5);
    let stage3 = greenArray.slice(3, 5).concat(brownArray.slice(5, 9)).sort(()=>Math.random()-0.5);

    deck = stage3.concat(stage2, stage1);
    //console.log(deck)

}
AzathothDeckExtraEasy();

function CthulthuDeckExtraEasy() {
    let greenTotal = 4;
    let brownTotal = 9;
    let blueTotal = 2;

    let normalBrown = brownCards.filter( card => card.difficulty === "normal");

    let sortedGreenCards = greenCards.filter( card => card.difficulty === "easy");
    let sortedBrownCards = brownCards.filter( card => card.difficulty === "easy").concat(randomCards(normalBrown, 4));
    let sortedBlueCards = blueCards.filter( card => card.difficulty === "easy");

    let greenArray = randomCards(sortedGreenCards, greenTotal); //4
    let brownArray = randomCards(sortedBrownCards, brownTotal); //9
    let blueArray = randomCards(sortedBlueCards, blueTotal); //2

    //arr.sort(()=>Math.random()-0.5) - перемешать массив //
    let stage1 = brownArray.slice(0, 2).concat(blueArray.slice(0, 2)).sort(()=>Math.random()-0.5);
    let stage2 = greenArray.slice(0, 1).concat(brownArray.slice(2, 5)).sort(()=>Math.random()-0.5);
    let stage3 = greenArray.slice(1, 4).concat(brownArray.slice(5, 9)).sort(()=>Math.random()-0.5);

    deck = stage3.concat(stage2, stage1);
    //console.log(deck)

}
CthulthuDeckExtraEasy();

function IogSothothDeckExtraEasy() {
    let greenTotal = 5;
    let brownTotal = 9;
    let blueTotal = 2;

    let normalBrown = brownCards.filter( card => card.difficulty === "normal");

    let sortedGreenCards = greenCards.filter( card => card.difficulty === "easy");
    let sortedBrownCards = brownCards.filter( card => card.difficulty === "easy").concat(randomCards(normalBrown, 4));
    let sortedBlueCards = blueCards.filter( card => card.difficulty === "easy");

    let greenArray = randomCards(sortedGreenCards, greenTotal); //5
    let brownArray = randomCards(sortedBrownCards, brownTotal); //9
    let blueArray = randomCards(sortedBlueCards, blueTotal); //2

    //arr.sort(()=>Math.random()-0.5) - перемешать массив //
    let stage1 = brownArray.slice(0, 2).concat(blueArray[0]).sort(()=>Math.random()-0.5);
    let stage2 = greenArray.slice(0, 2).concat(brownArray.slice(2, 5), blueArray[1]).sort(()=>Math.random()-0.5);
    let stage3 = greenArray.slice(2, 5).concat(brownArray.slice(5, 9)).sort(()=>Math.random()-0.5);

    deck = stage3.concat(stage2, stage1);
    //console.log(deck)

}
IogSothothDeckExtraEasy();

function ShubNiggurathDeckExtraEasy() {
    let greenTotal = 6;
    let brownTotal = 8;
    let blueTotal = 2;

    let normalGreen = brownCards.filter( card => card.difficulty === "normal");
    let normalBrown = brownCards.filter( card => card.difficulty === "normal");

    let sortedGreenCards = greenCards.filter( card => card.difficulty === "easy").concat(randomCards(normalGreen, 1));
    let sortedBrownCards = brownCards.filter( card => card.difficulty === "easy").concat(randomCards(normalBrown, 3));
    let sortedBlueCards = blueCards.filter( card => card.difficulty === "easy");

    let greenArray = randomCards(sortedGreenCards, greenTotal); //6
    let brownArray = randomCards(sortedBrownCards, brownTotal); //8
    let blueArray = randomCards(sortedBlueCards, blueTotal); //2

    //arr.sort(()=>Math.random()-0.5) - перемешать массив //
    let stage1 = greenArray.slice(0, 1).concat(brownArray.slice(0, 2), blueArray[0]).sort(()=>Math.random()-0.5);
    let stage2 = greenArray.slice(1, 4).concat(brownArray.slice(2, 4), blueArray[1]).sort(()=>Math.random()-0.5);
    let stage3 = greenArray.slice(4, 6).concat(brownArray.slice(4, 8)).sort(()=>Math.random()-0.5);

    deck = stage3.concat(stage2, stage1);
    //console.log(deck)

}
ShubNiggurathDeckExtraEasy();


// ОЧЕНЬ СЛОЖНЫЙ УРОВЕНЬ //

function AzathothDeckExtraHard() {
    let greenTotal = 5;
    let brownTotal = 9;
    let blueTotal = 2;

    let normalBrown = brownCards.filter( card => card.difficulty === "normal");

    let sortedGreenCards = greenCards.filter( card => card.difficulty === "hard");
    let sortedBrownCards = brownCards.filter( card => card.difficulty === "hard").concat(randomCards(normalBrown, 4));
    let sortedBlueCards = blueCards.filter( card => card.difficulty === "hard");

    let greenArray = randomCards(sortedGreenCards, greenTotal); //5
    let brownArray = randomCards(sortedBrownCards, brownTotal); //9
    let blueArray = randomCards(sortedBlueCards, blueTotal); //2

    //arr.sort(()=>Math.random()-0.5) - перемешать массив //
    let stage1 = greenArray.slice(0, 1).concat(brownArray.slice(0, 2), blueArray[0]).sort(()=>Math.random()-0.5);
    let stage2 = greenArray.slice(1, 3).concat(brownArray.slice(2, 5), blueArray[1]).sort(()=>Math.random()-0.5);
    let stage3 = greenArray.slice(3, 5).concat(brownArray.slice(5, 9)).sort(()=>Math.random()-0.5);

    deck = stage3.concat(stage2, stage1);
    //console.log(deck)

}
AzathothDeckExtraHard();

function CthulthuDeckExtraHard() {
    let greenTotal = 4;
    let brownTotal = 9;
    let blueTotal = 2;

    let normalBrown = brownCards.filter( card => card.difficulty === "normal");

    let sortedGreenCards = greenCards.filter( card => card.difficulty === "hard");
    let sortedBrownCards = brownCards.filter( card => card.difficulty === "hard").concat(randomCards(normalBrown, 4));
    let sortedBlueCards = blueCards.filter( card => card.difficulty === "hard");

    let greenArray = randomCards(sortedGreenCards, greenTotal); //4
    let brownArray = randomCards(sortedBrownCards, brownTotal); //9
    let blueArray = randomCards(sortedBlueCards, blueTotal); //2

    //arr.sort(()=>Math.random()-0.5) - перемешать массив //
    let stage1 = brownArray.slice(0, 2).concat(blueArray.slice(0, 2)).sort(()=>Math.random()-0.5);
    let stage2 = greenArray.slice(0, 1).concat(brownArray.slice(2, 5)).sort(()=>Math.random()-0.5);
    let stage3 = greenArray.slice(1, 4).concat(brownArray.slice(5, 9)).sort(()=>Math.random()-0.5);

    deck = stage3.concat(stage2, stage1);
    //console.log(deck)

}
CthulthuDeckExtraHard();

function IogSothothDeckExtraHard() {
    let greenTotal = 5;
    let brownTotal = 9;
    let blueTotal = 2;

    let normalBrown = brownCards.filter( card => card.difficulty === "normal");

    let sortedGreenCards = greenCards.filter( card => card.difficulty === "hard");
    let sortedBrownCards = brownCards.filter( card => card.difficulty === "hard").concat(randomCards(normalBrown, 4));
    let sortedBlueCards = blueCards.filter( card => card.difficulty === "hard");

    let greenArray = randomCards(sortedGreenCards, greenTotal); //5
    let brownArray = randomCards(sortedBrownCards, brownTotal); //9
    let blueArray = randomCards(sortedBlueCards, blueTotal); //2

    //arr.sort(()=>Math.random()-0.5) - перемешать массив //
    let stage1 = brownArray.slice(0, 2).concat(blueArray[0]).sort(()=>Math.random()-0.5);
    let stage2 = greenArray.slice(0, 2).concat(brownArray.slice(2, 5), blueArray[1]).sort(()=>Math.random()-0.5);
    let stage3 = greenArray.slice(2, 5).concat(brownArray.slice(5, 9)).sort(()=>Math.random()-0.5);

    deck = stage3.concat(stage2, stage1);
    //console.log(deck)

}
IogSothothDeckExtraHard();

function ShubNiggurathDeckExtraHard() {
    let greenTotal = 6;
    let brownTotal = 8;
    let blueTotal = 2;

    let normalGreen = brownCards.filter( card => card.difficulty === "normal");
    let normalBrown = brownCards.filter( card => card.difficulty === "normal");

    let sortedGreenCards = greenCards.filter( card => card.difficulty === "hard").concat(randomCards(normalGreen, 1));
    let sortedBrownCards = brownCards.filter( card => card.difficulty === "hard").concat(randomCards(normalBrown, 3));
    let sortedBlueCards = blueCards.filter( card => card.difficulty === "hard");

    let greenArray = randomCards(sortedGreenCards, greenTotal); //6
    let brownArray = randomCards(sortedBrownCards, brownTotal); //8
    let blueArray = randomCards(sortedBlueCards, blueTotal); //2

    //arr.sort(()=>Math.random()-0.5) - перемешать массив //
    let stage1 = greenArray.slice(0, 1).concat(brownArray.slice(0, 2), blueArray[0]).sort(()=>Math.random()-0.5);
    let stage2 = greenArray.slice(1, 4).concat(brownArray.slice(2, 4), blueArray[1]).sort(()=>Math.random()-0.5);
    let stage3 = greenArray.slice(4, 6).concat(brownArray.slice(4, 8)).sort(()=>Math.random()-0.5);

    deck = stage3.concat(stage2, stage1);
    //console.log(deck)

}
ShubNiggurathDeckExtraHard();



//аккумулирующая функция формирования колод//

// в результате deck принимает значение нужного массива колоды//
function createDeck() {
    AzathothLevels.addEventListener('click', (e) => {
        deck = []
        if (e.target.classList.contains('level-1')) {
            AzathothDeckExtraEasy();
        }
        if (e.target.classList.contains('level-2')) {
            AzathothDeckEasy();
        }
        if (e.target.classList.contains('level-3')) {
            AzathothDeckNormal();
        }
        if (e.target.classList.contains('level-4')) {
            AzathothDeckHard();
        }
        if (e.target.classList.contains('level-5')) {
            AzathothDeckExtraHard();
        }
        // console.log(deck)
        openDeck();
        // return deck;
    })

    CthulthuLevels.addEventListener('click', (e) => {
        deck = []
        if (e.target.classList.contains('level-1')) {
            CthulthuDeckExtraEasy();
        }
        if (e.target.classList.contains('level-2')) {
            CthulthuDeckEasy();
        }
        if (e.target.classList.contains('level-3')) {
           CthulthuDeckNormal();
        }
        if (e.target.classList.contains('level-4')) {
            CthulthuDeckHard();
        }
        if (e.target.classList.contains('level-5')) {
            CthulthuDeckExtraHard();
        }
        // console.log(deck)
        openDeck()
        // return deck;
    })

    IogSothothLevels.addEventListener('click', (e) => {
        deck = []
        if (e.target.classList.contains('level-1')) {
            IogSothothDeckExtraEasy();
        }
        if (e.target.classList.contains('level-2')) {
            IogSothothDeckEasy();
        }
        if (e.target.classList.contains('level-3')) {
           IogSothothDeckNormal();
        }
        if (e.target.classList.contains('level-4')) {
            IogSothothDeckHard();
        }
        if (e.target.classList.contains('level-5')) {
           IogSothothDeckExtraHard();
        }
        console.log(deck)
        openDeck()
        // return deck;
    })

    ShubNiggurathLevels.addEventListener('click', (e) => {
        deck = []
        if (e.target.classList.contains('level-1')) {
            ShubNiggurathDeckExtraEasy();
        }
        if (e.target.classList.contains('level-2')) {
            ShubNiggurathDeckEasy();
        }
        if (e.target.classList.contains('level-3')) {
           ShubNiggurathDeckNormal();
        }
        if (e.target.classList.contains('level-4')) {
            ShubNiggurathDeckHard();
        }
        if (e.target.classList.contains('level-5')) {
           ShubNiggurathDeckExtraHard();
        }
        // console.log(deck)
        openDeck()
        // return deck;
    })
    //console.log(deck)
}
// console.log(deck)


////////////////////////////////////  РАСКРЫВАЕМ КОЛОДЫ КАРТ ПРИ КЛИКЕ НА РУБАШКУ ////////////////////////////////////

function openDeck() {
    FRONT.innerHTML = "";
    if (BACK.classList.contains('empty')) {
         BACK.classList.remove('empty');
    }
    CARDS.forEach( card => {card.style.opacity = "1"; card.style.visibility = "visible"})
    
}

    BACK.addEventListener('click', () => {
        console.log('deck1111',deck)
        if (deck.length > 0) {
            showNewCard();
        }
        if (deck.length === 0) {
            BACK.classList.add('empty');
            CARDS.forEach( card => {card.style.opacity = "0"; card.style.visibility = "hidden"})
        }
        })

function showNewCard() {
    let currentCard = deck.pop();
    const img = new Image();
    FRONT.append(img);
    img.classList.add('deck-card');
    //console.log('currentCard',currentCard);
    img.src = currentCard.cardFace;
}





////////////////////////////////////  СОЗДАЕМ СЧЕТЧИК  ////////////////////////////////////









// const hueta = document.getElementById('hueta2');
// hueta.src = ancientsData[0].cardFace;
// console.log(hueta);

