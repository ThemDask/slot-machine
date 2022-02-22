// ---- declare global variables ---- //
var pts = document.getElementById('pts');
pts.innerHTML = 100;

const emojis = ["&#127775", "&#128178", "&#128293", "&#128171", "&#129381", "&#129505", "&#127820", "&#127756", "&#128591", "&#128526"];
var star = "🌟";
var dollar = "💲";
var wildcard = "😎";

var win = new Audio('assets/win.mp3');
var smallwin = new Audio('assets/smallwin.mp3');
var spin = new Audio('assets/spin.mp3');

let nIntervId;
let auto_on;

var i = 0;
var bet = 1;

var bet1 = document.getElementById('bet1');
var bet2 = document.getElementById('bet2');
var bet3 = document.getElementById('bet3');
var bet4 = document.getElementById('bet4');

var box_a1 = document.getElementById('first1');
var box_b1 = document.getElementById('second1');
var box_c1 = document.getElementById('third1');
var box_a2 = document.getElementById('first2');
var box_b2 = document.getElementById('second2');
var box_c2 = document.getElementById('third2');
var box_a3 = document.getElementById('first3');
var box_b3 = document.getElementById('second3');
var box_c3 = document.getElementById('third3');

var a1 = document.getElementById('textone1');
var b1 = document.getElementById('texttwo1');
var c1 = document.getElementById('textthree1');
var a2 = document.getElementById('textone2');
var b2 = document.getElementById('texttwo2');
var c2 = document.getElementById('textthree2');
var a3 = document.getElementById('textone3');
var b3 = document.getElementById('texttwo3');
var c3 = document.getElementById('textthree3');

var r1 = 0;
var r2 = 0;
var r3 = 0;
var r4 = 0;
var r5 = 0;
var r6 = 0;
var r7 = 0;
var r8 = 0;
var r9 = 0;

// winner = winning text | bwinner = winning box
var winner1;
var winner2;
var winner3;
var bwinner1;
var bwinner2;
var bwinner3;
var wincount = 0;

var winmsg = document.getElementById("winmsg");
var bigwinmsg = document.getElementById("bigwinmsg");

// --- declare infobox variables --- //
var modal = document.getElementById("infobox");
var btn = document.getElementById("info");
var span = document.getElementsByClassName("close")[0];

// starting bet
bet = 1;
bet1.classList.add("bet_on");

// main function
function randomize() {
if (pts.innerHTML > 0) {
  revertcolor();
  spinstart();
  setEnabled();
  changecolor();

  bigwinmsg.style.display = 'none';
  winmsg.style.display = 'none';

  wincount = 0;
  winner1 = 0;
  winner2 = 0;
  winner3 = 0;
  bwinner1 = 0;
  bwinner2 = 0;
  bwinner3 = 0;

  setTimeout(() => {revertcolor()}, 0200);
  setTimeout(() => {checkwin()}, 0800);
 } else {
   window.alert("No coins left! Please add more");
 }
}

//  -----    Supportive functions    ----- //

// check-for-win function
function checkwin() {
  if (a1.innerHTML === a2.innerHTML && a1.innerHTML === a3.innerHTML && a2.innerHTML === a3.innerHTML) {
        winfunc(box_a1,box_a2,box_a3,a1,a2,a3); 
      } 
  if (a1.innerHTML === b1.innerHTML && a1.innerHTML === c1.innerHTML && b1.innerHTML === c1.innerHTML) {
        winfunc(box_a1,box_b1,box_c1,a1,b1,c1); 
      }
  if (a1.innerHTML === b2.innerHTML && a1.innerHTML === c3.innerHTML && b2.innerHTML === c3.innerHTML) {
        winfunc(box_a1,box_b2,box_c3,a1,b2,c3)
      }

  if (b1.innerHTML === b2.innerHTML && b1.innerHTML === b3.innerHTML && b2.innerHTML === b3.innerHTML) {
    winfunc(box_b1,box_b2,box_b3,b1,b2,b3); 
  } 
  if (a2.innerHTML === b2.innerHTML && a2.innerHTML === c2.innerHTML && b2.innerHTML === c2.innerHTML) {
    winfunc(box_a2,box_b2,box_c2,a2,b2,c2); 
  }
  if (a3.innerHTML === b2.innerHTML && a3.innerHTML === c1.innerHTML && b2.innerHTML === c1.innerHTML) {
    winfunc(box_a3,box_b2,box_c1,a3,b2,c1)
  }

  if (c1.innerHTML === c2.innerHTML && c1.innerHTML === c3.innerHTML && c2.innerHTML === c3.innerHTML) {
    winfunc(box_c1,box_c2,box_c3,c1,c2,c3); 
  } 
  if (a3.innerHTML === b3.innerHTML && a3.innerHTML === c3.innerHTML && b3.innerHTML === c3.innerHTML) {
    winfunc(box_a3,box_b3,box_c3,a3,b3,c3); 
  }
  // if win then results
  if (wincount > 0){
    winresults();
  }
}

function winfunc(bpar1, bpar2, bpar3, par1, par2,par3) {
  bwinner1 = bpar1;
  bwinner2 = bpar2;
  bwinner3 = bpar3;
  winner1 = par1;
  winner2 = par2;
  winner3 = par3;
  wincount ++;
  if (auto_on) {
      setTimeout(() => {alert('win! Press ok to continue..');}, 0100);
    }   
}

// check if small or big win
function winresults() {
  wincolor();
  if ((winner1.innerHTML  == star) || (winner1.innerHTML == dollar)){
    win.play();
    bigwinmsg.style.display = 'block';
    pts.innerHTML = Number(pts.innerHTML) + Number(100) * bet;
  } else {
    smallwin.play();
    winmsg.style.display = 'block';
    pts.innerHTML = Number(pts.innerHTML) + Number(50) * bet;
  }
}

// enable/disable spin button
  function setEnabled() {
    document.getElementById('spin').disabled = 'disabled';
    setTimeout(function() {
      document.getElementById('spin').disabled = false;
    }, 1300);
}

// randomize slots
function spinstart() {
  spin.play()
  pts.innerHTML = Number(pts.innerHTML) - Number(bet);

  r1 = Math.floor(Math.random() * emojis.length); 
  r2 = Math.floor(Math.random() * emojis.length);  
  r3 = Math.floor(Math.random() * emojis.length); 
  r4 = Math.floor(Math.random() * emojis.length); 
  r5 = Math.floor(Math.random() * emojis.length);  
  r6 = Math.floor(Math.random() * emojis.length); 
  r7 = Math.floor(Math.random() * emojis.length); 
  r8 = Math.floor(Math.random() * emojis.length);  
  r9 = Math.floor(Math.random() * emojis.length); 

  setTimeout(() => {a1.innerHTML= emojis[r1];}, 0100);
  setTimeout(() => {a2.innerHTML= emojis[r4];}, 0100);
  setTimeout(() => {a3.innerHTML= emojis[r7];}, 0100);

  setTimeout(() => {b1.innerHTML= emojis[r2];}, 0300);
  setTimeout(() => {b2.innerHTML= emojis[r5];}, 0300);
  setTimeout(() => {b3.innerHTML= emojis[r8];}, 0300);

  setTimeout(() => {c1.innerHTML= emojis[r3];}, 0600);
  setTimeout(() => {c2.innerHTML= emojis[r6];}, 0600);
  setTimeout(() => {c3.innerHTML= emojis[r9];}, 0600);
}

// slots change color on spin
function changecolor() { 
  setTimeout(() => {box_a1.style.backgroundColor = 'rgb(114, 20, 202)';}, 0100);
  setTimeout(() => {box_b1.style.backgroundColor = 'rgb(114, 20, 202)';}, 0300);
  setTimeout(() => {box_c1.style.backgroundColor = 'rgb(114, 20, 202)';}, 0600);
  setTimeout(() => {box_a2.style.backgroundColor = 'rgb(114, 20, 202)';}, 0100);
  setTimeout(() => {box_b2.style.backgroundColor = 'rgb(114, 20, 202)';}, 0300);
  setTimeout(() => {box_c2.style.backgroundColor = 'rgb(114, 20, 202)';}, 0600);
  setTimeout(() => {box_a3.style.backgroundColor = 'rgb(114, 20, 202)';}, 0100);
  setTimeout(() => {box_b3.style.backgroundColor = 'rgb(114, 20, 202)';}, 0300);
  setTimeout(() => {box_c3.style.backgroundColor = 'rgb(114, 20, 202)';}, 0600);
}

// slots revert to original color on spin end
function revertcolor() { 
  setTimeout(() => {box_a1.style.backgroundColor = 'rgb(27, 17, 27)';}, 0100);
  setTimeout(() => {box_b1.style.backgroundColor = 'rgb(27, 17, 27)';}, 0300);
  setTimeout(() => {box_c1.style.backgroundColor = 'rgb(27, 17, 27)';}, 0600);
  setTimeout(() => {box_a2.style.backgroundColor = 'rgb(27, 17, 27)';}, 0100);
  setTimeout(() => {box_b2.style.backgroundColor = 'rgb(27, 17, 27)';}, 0300);
  setTimeout(() => {box_c2.style.backgroundColor = 'rgb(27, 17, 27)';}, 0600);
  setTimeout(() => {box_a3.style.backgroundColor = 'rgb(27, 17, 27)';}, 0100);
  setTimeout(() => {box_b3.style.backgroundColor = 'rgb(27, 17, 27)';}, 0300);
  setTimeout(() => {box_c3.style.backgroundColor = 'rgb(27, 17, 27)';}, 0600);
}

function wincolor() {
  bwinner1.style.backgroundColor = 'rgb(53, 248, 72)'; 
  bwinner2.style.backgroundColor = 'rgb(53, 248, 72)';
  bwinner3.style.backgroundColor = 'rgb(53, 248, 72)';
}


// ---- INFOBOX ---- //
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// betting function 
function placebet(elem) {
  if (elem == 'bet1') {
    bet = 1;
    bet1.classList.add("bet_on");
    bet2.classList.remove("bet_on");
    bet3.classList.remove("bet_on");
    bet4.classList.remove("bet_on");
  } else if (elem == 'bet2'){
    bet = 2;
    bet2.classList.add("bet_on");
    bet1.classList.remove("bet_on");
    bet3.classList.remove("bet_on");
    bet4.classList.remove("bet_on");
  } else if (elem == 'bet3'){
    bet = 5;
    bet3.classList.add("bet_on");
    bet2.classList.remove("bet_on");
    bet1.classList.remove("bet_on");
    bet4.classList.remove("bet_on");
  } else {
    bet = 10;
    bet4.classList.add("bet_on");
    bet2.classList.remove("bet_on");
    bet3.classList.remove("bet_on");
    bet1.classList.remove("bet_on");
  }
}

// --- Autoplay functions --- //
function autoplay() {
  if (!nIntervId) {
    nIntervId = setInterval(randomize, 1500);
  }
  i++;
  checkauto();
}

function checkauto() {
  if (i % 2 == 1) {
    auto_on = true;
    //console.log(auto_on);
    nIntervId;
  } else if  (i % 2 == 0) {
    auto_on = false;
    clearInterval(nIntervId);
    nIntervId = 0;
    //console.log(auto_on);
  }
}