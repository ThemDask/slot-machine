// ---- randomize variables ---- //
var pts = document.getElementById('pts');
pts.innerHTML = 100;

var win = new Audio('win.mp3');
var spin = new Audio('spin.mp3');

var a = document.getElementById('firsttext');
var b = document.getElementById('secondtext');
var c = document.getElementById('thirdtext');
var msg = document.getElementById("msg");
// ---- ------------------- ---- //

// --- infobox variables --- //
var modal = document.getElementById("infobox");
var btn = document.getElementById("info");
var span = document.getElementsByClassName("close")[0];
// ---  ---------------- --- //

function randomize() {
// - create start-of function - //
spin.play()
pts.innerHTML = Number(pts.innerHTML) - Number(1);

const emojis = ["&#127775", "&#128178", "&#128329", "&#128757", "&#129381", "&#129505", "&#127820"];
const random_one = Math.floor(Math.random() * emojis.length);
const random_two = Math.floor(Math.random() * emojis.length);
const random_three = Math.floor(Math.random() * emojis.length);
// -                        - //
    setTimeout(() => {a.innerHTML= emojis[random_one];}, 0100);
    setTimeout(() => {b.innerHTML= emojis[random_two];}, 0300);
    setTimeout(() => {c.innerHTML= emojis[random_three];}, 0600);

    setEnabled();
    setTimeout(() => {checkwin()}, 0700);
}

//  -----Supportive functions----- //
function checkwin() {
  if (a.innerHTML === b.innerHTML && b.innerHTML === c.innerHTML) {
    msg.style.display = 'block';
    pts.innerHTML = Number(pts.innerHTML) + Number(100);
    win.play()
  } else {
    msg.style.display = 'none';
    }
}

  function setEnabled() {
    document.getElementById('spin').disabled = 'disabled';
    setTimeout(function() {
      document.getElementById('spin').disabled = false;
    }, 1300);
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
// ---- INFOBOX END ---- //