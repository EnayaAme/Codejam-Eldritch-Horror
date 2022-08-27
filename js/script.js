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
                // переворачиваем колоду //
                openDeck();
                BACK.addEventListener('click', deactivateStage);

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

const AzathothStage1 = Array.from(document.querySelectorAll('.Azathoth-1'));
const AzathothStage2 = Array.from(document.querySelectorAll('.Azathoth-2'));
const AzathothStage3 = Array.from(document.querySelectorAll('.Azathoth-3'));
const CthulthuStage1 = Array.from(document.querySelectorAll('.Cthulthu-1'));
const CthulthuStage2 = Array.from(document.querySelectorAll('.Cthulthu-2'));
const CthulthuStage3 = Array.from(document.querySelectorAll('.Cthulthu-3'));
const IogSothothStage1 = Array.from(document.querySelectorAll('.IogSothoth-1'));
const IogSothothStage2 = Array.from(document.querySelectorAll('.IogSothoth-2'));
const IogSothothStage3 = Array.from(document.querySelectorAll('.IogSothoth-3'));
const ShubNiggurathStage1 = Array.from(document.querySelectorAll('.ShubNiggurath-1'));
const ShubNiggurathStage2 = Array.from(document.querySelectorAll('.ShubNiggurath-2'));
const ShubNiggurathStage3 = Array.from(document.querySelectorAll('.ShubNiggurath-3'));
console.log(AzathothStage1)

const AzathothGreen = document.querySelectorAll('.Azathoth-green');
const AzathothBrown = document.querySelectorAll('.Azathoth-brown');
const AzathothBlue = document.querySelectorAll('.Azathoth-blue');
const CthulthuGreen = document.querySelectorAll('.Cthulthu-green');
const CthulthuBrown = document.querySelectorAll('.Cthulthu-brown');
const CthulthuBlue = document.querySelectorAll('.Cthulthu-blue');
const IogSothothGreen = document.querySelectorAll('.IogSothoth-green');
const IogSothothBrown = document.querySelectorAll('.IogSothoth-brown');
const IogSothothBlue = document.querySelectorAll('.IogSothoth-blue');
const ShubNiggurathGreen = document.querySelectorAll('.ShubNiggurath-green');
const ShubNiggurathBrown = document.querySelectorAll('.ShubNiggurath-brown');
const ShubNiggurathBlue = document.querySelectorAll('.ShubNiggurath-blue');

const stage1 = document.querySelectorAll('.stage-1');
const stage2 = document.querySelectorAll('.stage-2');
const stage3 = document.querySelectorAll('.stage-3');


////////////////////////////////////  ПЕРЕМЕННЫЕ  ////////////////////////////////////

let deck;

////////////////////////////////////  ПЕРЕВОРАЧИВАЕМ КАРТОЧКИ ДРЕВНИХ  ////////////////////////////////////

function flipAzathoth() {
    AzathothLevels.addEventListener('click', (e) => {
        if (e.target.classList.contains('level')) {
            fillCounterAzathoth();
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
            fillCounterCthulthu();
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
            fillCounterIogSothoth();
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
            fillCounterShubNiggurath();
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
function ShubNiggurathDeckExtraHard() {
    let greenTotal = 6;
    let brownTotal = 8;
    let blueTotal = 2;

    let normalGreen = greenCards.filter( card => card.difficulty === "normal"); 
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
    // console.log(deck)
    console.log(greenArray)
    console.log(brownArray)

}


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
        resetDeckStyle();
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
        resetDeckStyle();
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
        resetDeckStyle();
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
        console.log(deck)
        resetDeckStyle();
        // return deck;
    })
    //console.log(deck)
}
// console.log(deck)


////////////////////////////////////  РАСКРЫВАЕМ КОЛОДЫ КАРТ ПРИ КЛИКЕ НА РУБАШКУ ////////////////////////////////////

function resetDeckStyle() {
    FRONT.innerHTML = "";
    if (BACK.classList.contains('empty')) {
         BACK.classList.remove('empty');
    }
    CARDS.forEach( card => {card.style.opacity = "1"; card.style.visibility = "visible"})
    
}


function openDeck() {
        BACK.addEventListener('click', () => {
        //console.log('deck1111',deck)
        if (deck.length > 0) {
            showNewCard();
        }
        if (deck.length === 0) {
            BACK.classList.add('empty');
            CARDS.forEach( card => {card.style.opacity = "0"; card.style.visibility = "hidden"})
        }
        })
}

function showNewCard() {
    let currentCard = deck.pop();
    const img = new Image();
    FRONT.append(img);
    img.classList.add('deck-card');
    //console.log('currentCard',currentCard);
    img.src = currentCard.cardFace;
    // запускаем счетчик // 
    createCounter(`${currentCard.color}`);
}






////////////////////////////////////  СОЗДАЕМ СЧЕТЧИК  ////////////////////////////////////


// задаем первоначальные значения при перевороте карты //
function fillCounterAzathoth() {
    // обнуляем значения на всякий случай //
    AzathothStage1.forEach( item => item.innerHTML = "");
    AzathothStage2.forEach( item => item.innerHTML = "");
    AzathothStage3.forEach( item => item.innerHTML = "");
    // задаем новые значения //
    AzathothStage1[0].innerHTML = "1"; AzathothStage1[1].innerHTML = "2"; AzathothStage1[2].innerHTML = "1";
    AzathothStage2[0].innerHTML = "2"; AzathothStage2[1].innerHTML = "3"; AzathothStage2[2].innerHTML = "1";
    AzathothStage3[0].innerHTML = "2"; AzathothStage3[1].innerHTML = "4"; AzathothStage3[2].innerHTML = "0";
}
function fillCounterCthulthu() {
    // обнуляем значения на всякий случай //
    CthulthuStage1.forEach( item => item.innerHTML = "");
    CthulthuStage2.forEach( item => item.innerHTML = "");
    CthulthuStage3.forEach( item => item.innerHTML = "");
    // задаем новые значения //
    CthulthuStage1[0].innerHTML = "0"; CthulthuStage1[1].innerHTML = "2"; CthulthuStage1[2].innerHTML = "2";
    CthulthuStage2[0].innerHTML = "1"; CthulthuStage2[1].innerHTML = "3"; CthulthuStage2[2].innerHTML = "0";
    CthulthuStage3[0].innerHTML = "3"; CthulthuStage3[1].innerHTML = "4"; CthulthuStage3[2].innerHTML = "0";
}
function fillCounterIogSothoth() {
    // обнуляем значения на всякий случай //
    IogSothothStage1.forEach( item => item.innerHTML = "");
    IogSothothStage2.forEach( item => item.innerHTML = "");
    IogSothothStage3.forEach( item => item.innerHTML = "");
    // задаем новые значения //
    IogSothothStage1[0].innerHTML = "0"; IogSothothStage1[1].innerHTML = "2"; IogSothothStage1[2].innerHTML = "1";
    IogSothothStage2[0].innerHTML = "2"; IogSothothStage2[1].innerHTML = "3"; IogSothothStage2[2].innerHTML = "1";
    IogSothothStage3[0].innerHTML = "3"; IogSothothStage3[1].innerHTML = "4"; IogSothothStage3[2].innerHTML = "0";
}
function fillCounterShubNiggurath() {
    // обнуляем значения на всякий случай //
    ShubNiggurathStage1.forEach( item => item.innerHTML = "");
    ShubNiggurathStage2.forEach( item => item.innerHTML = "");
    ShubNiggurathStage3.forEach( item => item.innerHTML = "");
    // задаем новые значения //
    ShubNiggurathStage1[0].innerHTML = "1"; ShubNiggurathStage1[1].innerHTML = "2"; ShubNiggurathStage1[2].innerHTML = "1";
    ShubNiggurathStage2[0].innerHTML = "3"; ShubNiggurathStage2[1].innerHTML = "2"; ShubNiggurathStage2[2].innerHTML = "1";
    ShubNiggurathStage3[0].innerHTML = "2"; ShubNiggurathStage3[1].innerHTML = "4"; ShubNiggurathStage3[2].innerHTML = "0";
}




function createCounter(currentcolor) {
    // console.log(currentcolor);
    
    if (currentcolor === "green") {

        if (Azathoth.classList.contains('flip-ancient')) {
            if (AzathothGreen[0].innerHTML !== '0') {AzathothGreen[0].innerHTML = AzathothGreen[0].innerHTML - 1}
            else {
            if  (AzathothGreen[1].innerHTML !== '0') {AzathothGreen[1].innerHTML = AzathothGreen[1].innerHTML - 1}
            else {
                if (AzathothGreen[2].innerHTML !== '0') {AzathothGreen[2].innerHTML = AzathothGreen[2].innerHTML - 1}
            }
        }
        }

        if (Cthulthu.classList.contains('flip-ancient')) {
            if (CthulthuGreen[0].innerHTML !== '0') {CthulthuGreen[0].innerHTML = CthulthuGreen[0].innerHTML - 1}
            else {
            if  (CthulthuGreen[1].innerHTML !== '0') {CthulthuGreen[1].innerHTML = CthulthuGreen[1].innerHTML - 1}
            else {
                if (CthulthuGreen[2].innerHTML !== '0') {CthulthuGreen[2].innerHTML = CthulthuGreen[2].innerHTML - 1}
            }
        }
        }

        if (IogSothoth.classList.contains('flip-ancient')) {
            if (IogSothothGreen[0].innerHTML !== '0') {IogSothothGreen[0].innerHTML = IogSothothGreen[0].innerHTML - 1}
            else {
            if  (IogSothothGreen[1].innerHTML !== '0') {IogSothothGreen[1].innerHTML = IogSothothGreen[1].innerHTML - 1}
            else {
                if (IogSothothGreen[2].innerHTML !== '0') {IogSothothGreen[2].innerHTML = IogSothothGreen[2].innerHTML - 1}
            }
        }
        }

        if (ShubNiggurath.classList.contains('flip-ancient')) {
            if (ShubNiggurathGreen[0].innerHTML !== '0') {ShubNiggurathGreen[0].innerHTML = ShubNiggurathGreen[0].innerHTML - 1}
            else {
            if  (ShubNiggurathGreen[1].innerHTML !== '0') {ShubNiggurathGreen[1].innerHTML = ShubNiggurathGreen[1].innerHTML - 1}
            else {
                if (ShubNiggurathGreen[2].innerHTML !== '0') {ShubNiggurathGreen[2].innerHTML = ShubNiggurathGreen[2].innerHTML - 1}
            }
        }
        }
    }


    if (currentcolor === "brown") {

        if (Azathoth.classList.contains('flip-ancient')) {
            if (AzathothBrown[0].innerHTML !== '0') {AzathothBrown[0].innerHTML = AzathothBrown[0].innerHTML - 1}
            else {
            if  (AzathothBrown[1].innerHTML !== '0') {AzathothBrown[1].innerHTML = AzathothBrown[1].innerHTML - 1}
            else {
                if (AzathothBrown[2].innerHTML !== '0') {AzathothBrown[2].innerHTML = AzathothBrown[2].innerHTML - 1}
            }
        }
        }

        if (Cthulthu.classList.contains('flip-ancient')) {
            if (CthulthuBrown[0].innerHTML !== '0') {CthulthuBrown[0].innerHTML = CthulthuBrown[0].innerHTML - 1}
            else {
            if  (CthulthuBrown[1].innerHTML !== '0') {CthulthuBrown[1].innerHTML = CthulthuBrown[1].innerHTML - 1}
            else {
                if (CthulthuBrown[2].innerHTML !== '0') {CthulthuBrown[2].innerHTML = CthulthuBrown[2].innerHTML - 1}
            }
        }
        }

        if (IogSothoth.classList.contains('flip-ancient')) {
            if (IogSothothBrown[0].innerHTML !== '0') {IogSothothBrown[0].innerHTML = IogSothothBrown[0].innerHTML - 1}
            else {
            if  (IogSothothBrown[1].innerHTML !== '0') {IogSothothBrown[1].innerHTML = IogSothothBrown[1].innerHTML - 1}
            else {
                if (IogSothothBrown[2].innerHTML !== '0') {IogSothothBrown[2].innerHTML = IogSothothBrown[2].innerHTML - 1}
            }
        }
        }

        if (ShubNiggurath.classList.contains('flip-ancient')) {
            if (ShubNiggurathBrown[0].innerHTML !== '0') {ShubNiggurathBrown[0].innerHTML = ShubNiggurathBrown[0].innerHTML - 1}
            else {
            if  (ShubNiggurathBrown[1].innerHTML !== '0') {ShubNiggurathBrown[1].innerHTML = ShubNiggurathBrown[1].innerHTML - 1}
            else {
                if (ShubNiggurathBrown[2].innerHTML !== '0') {ShubNiggurathBrown[2].innerHTML = ShubNiggurathBrown[2].innerHTML - 1}
            }
        }
        }
    }


    if (currentcolor === "blue") {

        if (Azathoth.classList.contains('flip-ancient')) {
            if (AzathothBlue[0].innerHTML !== '0') {AzathothBlue[0].innerHTML = AzathothBlue[0].innerHTML - 1}
            else {
            if  (AzathothBlue[1].innerHTML !== '0') {AzathothBlue[1].innerHTML = AzathothBlue[1].innerHTML - 1}
            else {
                if (AzathothBlue[2].innerHTML !== '0') {AzathothBlue[2].innerHTML = AzathothBlue[2].innerHTML - 1}
            }
        }
        }

        if (Cthulthu.classList.contains('flip-ancient')) {
            if (CthulthuBlue[0].innerHTML !== '0') {CthulthuBlue[0].innerHTML = CthulthuBlue[0].innerHTML - 1}
            else {
            if  (CthulthuBlue[1].innerHTML !== '0') {CthulthuBlue[1].innerHTML = CthulthuBlue[1].innerHTML - 1}
            else {
                if (CthulthuBlue[2].innerHTML !== '0') {CthulthuBlue[2].innerHTML = CthulthuBlue[2].innerHTML - 1}
            }
        }
        }

        if (IogSothoth.classList.contains('flip-ancient')) {
            if (IogSothothBlue[0].innerHTML !== '0') {IogSothothBlue[0].innerHTML = IogSothothBlue[0].innerHTML - 1}
            else {
            if  (IogSothothBlue[1].innerHTML !== '0') {IogSothothBlue[1].innerHTML = IogSothothBlue[1].innerHTML - 1}
            else {
                if (IogSothothBlue[2].innerHTML !== '0') {IogSothothBlue[2].innerHTML = IogSothothBlue[2].innerHTML - 1}
            }
        }
        }

        if (ShubNiggurath.classList.contains('flip-ancient')) {
            if (ShubNiggurathBlue[0].innerHTML !== '0') {ShubNiggurathBlue[0].innerHTML = ShubNiggurathBlue[0].innerHTML - 1}
            else {
            if  (ShubNiggurathBlue[1].innerHTML !== '0') {ShubNiggurathBlue[1].innerHTML = ShubNiggurathBlue[1].innerHTML - 1}
            else {
                if (ShubNiggurathBlue[2].innerHTML !== '0') {ShubNiggurathBlue[2].innerHTML = ShubNiggurathBlue[2].innerHTML - 1}
            }
        }
        }
    }
}

function deactivateStage() {
   console.log(AzathothStage1.every(circle => {circle.innerHTML == '0'}))
   console.log(AzathothStage1[0].innerHTML)
   console.log(AzathothStage1[1].innerHTML)
   console.log(AzathothStage1[2].innerHTML)
   //console.log(state)
//    if (state === true) { 
//     console.log('yes!!!!')
//     //stage1[0].classList.add('passed') 
//}
}

// const hueta = document.getElementById('hueta2');
// hueta.src = ancientsData[0].cardFace;
// console.log(hueta);

