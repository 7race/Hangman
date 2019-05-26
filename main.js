//функции для работы с кнопками клавиатуры
function cQ(event) {
  $('#bq')
    .fadeTo('fast', 0.33)
    .css({pointerEvents: 'none'});
}
function cW(event) {
  $('#bw')
    .fadeTo('fast', 0.33)
    .css({pointerEvents: 'none'});
}
function cE(event) {
  $('#be')
    .fadeTo('fast', 0.33)
    .css({pointerEvents: 'none'});
}
function cR(event) {
  $('#br')
    .fadeTo('fast', 0.33)
    .css({pointerEvents: 'none'});
}
function cT(event) {
  $('#bt')
    .fadeTo('fast', 0.33)
    .css({pointerEvents: 'none'});
}
function cY(event) {
  $('#by')
    .fadeTo('fast', 0.33)
    .css({pointerEvents: 'none'});
}
function cU(event) {
  $('#bu')
    .fadeTo('fast', 0.33)
    .css({pointerEvents: 'none'});
}
function cI(event) {
  $('#bi')
    .fadeTo('fast', 0.33)
    .css({pointerEvents: 'none'});
}
function cO(event) {
  $('#bo')
    .fadeTo('fast', 0.33)
    .css({pointerEvents: 'none'});
}
function cP(event) {
  $('#bp')
    .fadeTo('fast', 0.33)
    .css({pointerEvents: 'none'});
}
function cA(event) {
  $('#ba')
    .fadeTo('fast', 0.33)
    .css({pointerEvents: 'none'});
}
function cS(event) {
  $('#bs')
    .fadeTo('fast', 0.33)
    .css({pointerEvents: 'none'});
}
function cD(event) {
  $('#bd')
    .fadeTo('fast', 0.33)
    .css({pointerEvents: 'none'});
}
function cF(event) {
  $('#bf')
    .fadeTo('fast', 0.33)
    .css({pointerEvents: 'none'});
}
function cG(event) {
  $('#bg')
    .fadeTo('fast', 0.33)
    .css({pointerEvents: 'none'});
}
function cH(event) {
  $('#bh')
    .fadeTo('fast', 0.33)
    .css({pointerEvents: 'none'});
}
function cJ(event) {
  $('#bj')
    .fadeTo('fast', 0.33)
    .css({pointerEvents: 'none'});
}
function cK(event) {
  $('#bk')
    .fadeTo('fast', 0.33)
    .css({pointerEvents: 'none'});
}
function cL(event) {
  $('#bl')
    .fadeTo('fast', 0.33)
    .css({pointerEvents: 'none'});
}
function cZ(event) {
  $('#bz')
    .fadeTo('fast', 0.33)
    .css({pointerEvents: 'none'});
}
function cX(event) {
  $('#bx')
    .fadeTo('fast', 0.33)
    .css({pointerEvents: 'none'});
}
function cC(event) {
  $('#bc')
    .fadeTo('fast', 0.33)
    .css({pointerEvents: 'none'});
}
function cV(event) {
  $('#bv')
    .fadeTo('fast', 0.33)
    .css({pointerEvents: 'none'});
}
function cB(event) {
  $('#bb')
    .fadeTo('fast', 0.33)
    .css({pointerEvents: 'none'});
}
function cN(event) {
  $('#bn')
    .fadeTo('fast', 0.33)
    .css({pointerEvents: 'none'});
}
function cM(event) {
  $('#bm')
    .fadeTo('fast', 0.33)
    .css({pointerEvents: 'none'});
}

//показываем поздравление с победой и кнопку для рестарта игры
function winner(w) {
  if (w === 0) {
    $('.winnerMessage').fadeIn(2000);
    $('.keyboard').css({pointerEvents: 'none'});
    $('.winnerMessage').click(function(event) {
      location.reload();
    });
  }
}

//показываем сообщение о проигрыше, кнопку для показа загаданного слова и кнопку перезапуска игры
function lose(l) {
  if (l === 0) {
    $('.loseMessage').fadeIn(2000);
    $('.keyboard').css({pointerEvents: 'none'});
    $('.playAgain').click(function(event) {
      location.reload();
    });
    $('.showWord').click(function(event) {
      $(this)
        .append(word)
        .css({pointerEvents: 'none'});
    });
  }
}
//рисуем виселицу
let canvas2 = document.getElementById('canvas2');
let ctxP = canvas2.getContext('2d');
let p = 0; //переменная с помощью которой мы выбираем какую часть виселицы рисовать
function drawPerson() {
  switch (p) {
    case 0:
      ctxP.lineWidth = 5;
      ctxP.moveTo(100, 190);
      ctxP.lineTo(200, 190);
      ctxP.stroke();
      p++;
      break;
    case 1:
      ctxP.moveTo(150, 190);
      ctxP.lineTo(150, 20);
      ctxP.stroke();
      p++;
      break;
    case 2:
      ctxP.moveTo(110, 20);
      ctxP.lineTo(270, 20);
      ctxP.stroke();
      p++;
      break;
    case 3:
      ctxP.lineWidth = 1;
      ctxP.moveTo(269, 20);
      ctxP.lineTo(270, 36);
      ctxP.stroke();
      p++;
      break;
    case 4:
      ctxP.lineWidth = 2;
      ctxP.beginPath();
      ctxP.arc(270, 50, 15, 0, Math.PI * 2, false);
      ctxP.stroke();
      p++;
      break;
    case 5:
      ctxP.moveTo(270, 65);
      ctxP.lineTo(270, 115);
      ctxP.stroke();
      p++;
      break;
    case 6:
      ctxP.moveTo(270, 75);
      ctxP.lineTo(250, 110);
      ctxP.stroke();
      p++;
      break;
    case 7:
      ctxP.moveTo(270, 75);
      ctxP.lineTo(290, 110);
      ctxP.stroke();
      p++;
      break;
    case 8:
      ctxP.moveTo(270, 115);
      ctxP.lineTo(255, 160);
      ctxP.stroke();
      p++;
      break;
    case 9:
      ctxP.moveTo(270, 115);
      ctxP.lineTo(285, 160);
      ctxP.stroke();

      ctxP.strokeStyle = '#86000B';
      ctxP.stroke();
      p++;
      break;
  }
}

//отображаем количество оставшихся попыток
$('#num10').fadeIn();
function remAttempts(a) {
  switch (a) {
    case 9:
      $('#num10').fadeOut();
      $('#num9').fadeIn();
      break;
    case 8:
      $('#num9').fadeOut();
      $('#num8').fadeIn();
      break;
    case 7:
      $('#num8').fadeOut();
      $('#num7').fadeIn();
      break;
    case 6:
      $('#num7').fadeOut();
      $('#num6').fadeIn();
      break;
    case 5:
      $('#num6').fadeOut();
      $('#num5').fadeIn();
      break;
    case 4:
      $('#num5').fadeOut();
      $('#num4').fadeIn();
      break;
    case 3:
      $('#num4').fadeOut();
      $('#num3').fadeIn();
      break;
    case 2:
      $('#num3').fadeOut();
      $('#num2').fadeIn();
      break;
    case 1:
      $('#num2').fadeOut();
      $('#num1').fadeIn();
      break;
    case 0:
      $('#num1').fadeOut();
      $('#num0')
        .fadeIn()
        .css({color: '#86000B'});
      break;
  }
}

let words = ['coffee', 'program', 'orange', 'computer']; //буквы которые мы используем: c o f e p r g a m n u t
// Выбираем случайное слово
let word = words[Math.floor(Math.random() * words.length)];

// длина черточки для пропуска 50, расстояния между ними 30
const lenthDash = 50;
const spaceDash = 30;

//позиция первой черточки для пропуска
let xD = 10;
const yD = 90;

//рисуем пропуски в слове
let canvas1 = document.getElementById('canvas1');
let ctx = canvas1.getContext('2d');
for (let i = 0; i < word.length; i++) {
  ctx.moveTo(xD, yD);
  ctx.lineTo(xD + lenthDash, yD);
  ctx.stroke();
  xD += lenthDash + spaceDash;
}

//обрабатываем событие click для функций работы с клавиатурой
$('#bq').click(cQ);
$('#bw').click(cW);
$('#be').click(cE);
$('#br').click(cR);
$('#bt').click(cT);
$('#by').click(cY);
$('#bu').click(cU);
$('#bi').click(cI);
$('#bo').click(cO);
$('#bp').click(cP);
$('#ba').click(cA);
$('#bs').click(cS);
$('#bd').click(cD);
$('#bf').click(cF);
$('#bg').click(cG);
$('#bh').click(cH);
$('#bj').click(cJ);
$('#bk').click(cK);
$('#bl').click(cL);
$('#bz').click(cZ);
$('#bx').click(cX);
$('#bc').click(cC);
$('#bv').click(cV);
$('#bb').click(cB);
$('#bn').click(cN);
$('#bm').click(cM);

let attempts = 10; //количество попыток
let goodLetter; //правильно угаданная буква

//отгадываем слова
switch (word) {
  case 'coffee':
    goodLetter = 4;

    //правильно кликнули
    $('#bc').click(function(event) {
      $('#c').fadeIn(2000);
      goodLetter--;
      winner(goodLetter);
    });
    $('#bo').click(function(event) {
      $('#o2').fadeIn(2000);
      goodLetter--;
      winner(goodLetter);
    });
    $('#bf').click(function(event) {
      $('#f3, #f4').fadeIn(2000);
      goodLetter--;
      winner(goodLetter);
    });
    $('#be').click(function(event) {
      $('#e5, #e6').fadeIn(2000);
      goodLetter--;
      winner(goodLetter);
    });

    //неправильно кликнули
    $(
      '#bq, #bw, #br, #bt, #by, #bu, #bi, #bp, #ba, #bs, #bd, #bg, #bh, #bj, #bk, #bl, #bz, #bx, #bv, #bb, #bn, #bm',
    ).click(function(event) {
      attempts--;

      lose(attempts); //проверяем проиграли или нет, если да, то выводим соответствующие сообщение
      drawPerson(); //рисуем виселицу
      remAttempts(attempts); //отображаем количество попыток
    });
    break;

  //в остальных словах все аналогично
  case 'program':
    goodLetter = 6;
    $('#bp').click(function(event) {
      $('#p').fadeIn(2000);
      goodLetter--;
      winner(goodLetter);
    });
    $('#br').click(function(event) {
      $('#r2, #r5').fadeIn(2000);
      goodLetter--;
      winner(goodLetter);
    });
    $('#bo').click(function(event) {
      $('#o3').fadeIn(2000);
      goodLetter--;
      winner(goodLetter);
    });
    $('#bg').click(function(event) {
      $('#g4').fadeIn(2000);
      goodLetter--;
      winner(goodLetter);
    });
    $('#ba').click(function(event) {
      $('#a6').fadeIn(2000);
      goodLetter--;
      winner(goodLetter);
    });
    $('#bm').click(function(event) {
      $('#m7').fadeIn(2000);
      goodLetter--;
      winner(goodLetter);
    });
    $(
      '#bq, #bw, #be, #bt, #by, #bu, #bi, #bs, #bd, #bf, #bh, #bj, #bk, #bl, #bz, #bx, #bc, #bv, #bb, #bn',
    ).click(function(event) {
      attempts--;
      lose(attempts);
      drawPerson();
      remAttempts(attempts);
    });
    break;
  case 'orange':
    goodLetter = 6;
    $('#bo').click(function(event) {
      $('#o').fadeIn(2000);
      goodLetter--;
      winner(goodLetter);
    });
    $('#br').click(function(event) {
      $('#r2').fadeIn(2000);
      goodLetter--;
      winner(goodLetter);
    });
    $('#ba').click(function(event) {
      $('#a3').fadeIn(2000);
      goodLetter--;
      winner(goodLetter);
    });
    $('#bn').click(function(event) {
      $('#n4').fadeIn(2000);
      goodLetter--;
      winner(goodLetter);
    });
    $('#bg').click(function(event) {
      $('#g5').fadeIn(2000);
      goodLetter--;
      winner(goodLetter);
    });
    $('#be').click(function(event) {
      $('#e6').fadeIn(2000);
      goodLetter--;
      winner(goodLetter);
    });
    $(
      '#bq, #bw, #bt, #by, #bu, #bi, #bp, #bs, #bd, #bf, #bh, #bj, #bk, #bl, #bz, #bx, #bc, #bv, #bb, #bm',
    ).click(function(event) {
      attempts--;
      lose(attempts);
      drawPerson();
      remAttempts(attempts);
    });
    break;
  case 'computer':
    goodLetter = 8;
    $('#bc').click(function(event) {
      $('#c').fadeIn(2000);
      goodLetter--;
      winner(goodLetter);
    });
    $('#bo').click(function(event) {
      $('#o2').fadeIn(2000);
      goodLetter--;
      winner(goodLetter);
    });
    $('#bm').click(function(event) {
      $('#m3').fadeIn(2000);
      goodLetter--;
      winner(goodLetter);
    });
    $('#bp').click(function(event) {
      $('#p4').fadeIn(2000);
      goodLetter--;
      winner(goodLetter);
    });
    $('#bu').click(function(event) {
      $('#u5').fadeIn(2000);
      goodLetter--;
      winner(goodLetter);
    });
    $('#bt').click(function(event) {
      $('#t6').fadeIn(2000);
      goodLetter--;
      winner(goodLetter);
    });
    $('#be').click(function(event) {
      $('#e7').fadeIn(2000);
      goodLetter--;
      winner(goodLetter);
    });
    $('#br').click(function(event) {
      $('#r8').fadeIn(2000);
      goodLetter--;
      winner(goodLetter);
    });
    $(
      '#bq, #bw, #by, #bi, #ba, #bs, #bd, #bf, #bg, #bh, #bj, #bk, #bl, #bz, #bx, #bv, #bb, #bn',
    ).click(function(event) {
      attempts--;
      lose(attempts);
      drawPerson();
      remAttempts(attempts);
    });
    break;
}
