// ---- declare variables ---- //
var pts = document.getElementById('pts');
pts.innerHTML = 100;

var win = new Audio('win.mp3');
var spin = new Audio('spin.mp3');

var a = document.getElementById('firsttext');
var b = document.getElementById('secondtext');
var c = document.getElementById('thirdtext');
var msg = document.getElementById("msg");
// ----- main button function ----- //
function randomize() {
    
    const emojis = ["&#127775", "&#128178", "&#128329", "&#128757", "&#129381", "&#129505", "&#127820"];
    const random_one = Math.floor(Math.random() * emojis.length);
    const random_two = Math.floor(Math.random() * emojis.length);
    const random_three = Math.floor(Math.random() * emojis.length);

    a.innerHTML= emojis[random_one];
    b.innerHTML= emojis[random_two];
    c.innerHTML= emojis[random_three];

    setEnabled();
    checkwin();
}
//  -----Supportive functions----- //
function checkwin() {
  if (a.innerHTML === b.innerHTML && b.innerHTML === c.innerHTML) {
    msg.style.display = 'block';
    pts.innerHTML = Number(pts.innerHTML) + Number(100);
    win.play()
  } else {
    msg.style.display = 'none';
    pts.innerHTML = Number(pts.innerHTML) - Number(1);
    spin.play()
    }
}

  function setEnabled() {
    document.getElementById('spin').disabled = 'disabled';
    setTimeout(function() {
      document.getElementById('spin').disabled = false;
    }, 1300);
}
