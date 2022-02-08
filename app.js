// ---- declare randomize variables ---- //
var pts = document.getElementById('pts');
pts.innerHTML = 100;

const emojis = ["&#127775", "&#128178", "&#128329", "&#128757"/*, "&#129381", "&#129505", "&#127820"*/];
var wincount = 0;
var star = "🌟";
var dollar = "💲";
var win = new Audio('win.mp3');
var spin = new Audio('spin.mp3');

var bet = 1;
var bet1 = document.getElementById('bet1');
var bet2 = document.getElementById('bet2');
var bet3 = document.getElementById('bet3');
var bet4 = document.getElementById('bet4');

var box_a = document.getElementById('first');
var box_b = document.getElementById('second');
var box_c = document.getElementById('third');

var a = document.getElementById('firsttext');
var b = document.getElementById('secondtext');
var c = document.getElementById('thirdtext');
var r1 = 0;
var r2 = 0;
var r3 = 0;
var msg = document.getElementById("msg");

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
  spinstart();
  setEnabled();
  changecolor();
  bigwinmsg.style.display = 'none';
  winmsg.style.display = 'none';
  wincount = 0;
  setTimeout(() => {revertcolor()}, 0200);
  setTimeout(() => {checkwin()}, 0800);
 } else {
   window.alert("No coins left! Please add more");
 }
}

//  -----    Supportive functions    ----- //

// check for win function
function checkwin() {
  if (a.innerHTML === b.innerHTML && a.innerHTML === c.innerHTML && b.innerHTML === c.innerHTML) {
    win.play();
    wincount = 1;
  } else {
    return; // do nothing
  } 
  if (wincount === 1) {
    if (a.innerHTML == star || a.innerHTML == dollar){      
      bigwinmsg.style.display = 'block';
      pts.innerHTML = Number(pts.innerHTML) + Number(100) * bet;
    } else {
      winmsg.style.display = 'block';
      pts.innerHTML = Number(pts.innerHTML) + Number(50) * bet;
    }
  } else {
    return;
  }
}

// ---- enable/disable button ---- //
  function setEnabled() {
    document.getElementById('spin').disabled = 'disabled';
    setTimeout(function() {
      document.getElementById('spin').disabled = false;
    }, 1300);
}

//randomize slots
function spinstart() {
  spin.play()
  pts.innerHTML = Number(pts.innerHTML) - Number(bet);

  r1 = Math.floor(Math.random() * emojis.length); 
  r2 = Math.floor(Math.random() * emojis.length);  
  r3 = Math.floor(Math.random() * emojis.length); 

  setTimeout(() => {a.innerHTML= emojis[r1];}, 0100);
  setTimeout(() => {b.innerHTML= emojis[r2];}, 0300);
  setTimeout(() => {c.innerHTML= emojis[r3];}, 0600);
}

// slots change color on spin
function changecolor() { 
  setTimeout(() => {box_a.style.backgroundColor = 'rgb(114, 20, 202)';}, 0100);
  setTimeout(() => {box_b.style.backgroundColor = 'rgb(114, 20, 202)';}, 0300);
  setTimeout(() => {box_c.style.backgroundColor = 'rgb(114, 20, 202)';}, 0600);
}

// slots revert to original color on spin end
function revertcolor() { 
  setTimeout(() => {box_a.style.backgroundColor = 'rgb(27, 17, 27)';}, 0100);
  setTimeout(() => {box_b.style.backgroundColor = 'rgb(27, 17, 27)';}, 0300);
  setTimeout(() => {box_c.style.backgroundColor = 'rgb(27, 17, 27)';}, 0600);
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