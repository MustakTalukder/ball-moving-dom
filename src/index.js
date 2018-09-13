let left = document.getElementById("left");
let right = document.getElementById("right");
let top = document.getElementById("top");
let down = document.getElementById("down");

let intervalId = null;

left.addEventListener("click", function(event) {
  clearInterval(intervalId);
  intervalId = setInterval(function(e) {
    changBall(left);
  }, 100);
});

right.addEventListener("click", function(event) {
  clearInterval(intervalId);
  intervalId = setInterval(function(e) {
    changBall(right);
  }, 100);
});

top.addEventListener("click", function(event) {
  clearInterval(intervalId);
  intervalId = setInterval(function(e) {
    changBall(top);
  }, 100);
});

down.addEventListener("click", function(event) {
  clearInterval(intervalId);
  intervalId = setInterval(function(e) {
    changBall(down);
  }, 100);
});

let x = 0;
let y = 0;

function changBall(ballvalue) {
  if (ballvalue === left) {
    if (x <= 0) {
      alert("Ha ha Game is over");
      clearInterval(intervalId);
    } else {
      x = x - 5;
      ball.style.left = x + "px";
    }
  }
  if (ballvalue === right) {
    if (x >= 263) {
      alert("Ha ha Game is over");
      clearInterval(intervalId);
    } else {
      x = x + 5;
      ball.style.left = x + "px";
    }
  }
  if (ballvalue === top) {
    if (y <= 0) {
      alert("Ha ha Game is over");
      clearInterval(intervalId);
    } else {
      y = y - 5;
      ball.style.top = y + "px";
    }
  }
  if (ballvalue === down) {
    if (y >= 263) {
      alert("Ha ha Game is over");
      clearInterval(intervalId);
    } else {
      y = y + 5;
      ball.style.top = y + "px";
    }
  }
}
