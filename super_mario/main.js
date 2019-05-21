var back = document.getElementById("back");
var stand = document.getElementById("stand");
var run = document.getElementById("run");
var bullet = document.getElementById("bullet");
var audio = document.getElementById("audio");

function marioSuper(event) {
  var char = event.keyCode;
  if (char === 39) {
    back.classList.add("mooving");
    stand.classList.add("hide");
    run.classList.remove("hide");
    bullet.classList.remove("hide");


  }
}

function stop() {
  var char = event.keyCode;
  if (char === 39) {
    back.classList.remove("mooving");
    // stand.classList.remove("hide");
    run.classList.add("hide");
    bullet.classList.add("hide");


  }
}



document.addEventListener("keydown", marioSuper);
document.addEventListener("keyup", stop);

