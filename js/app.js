// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  console.log('jQuery ready function fired.');
  let turn = 1;
  let arWin = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
  let arPlays = [];
  $("#board").on("click", function(event){
    console.log(typeof event.target.id);
    if (event.target.id.search("canvas") === 3) {
      if (turn%2) {
        drawX(event.target.id,30,30,250,130);
        drawX(event.target.id,250,30,30,130);
      }
      else {
        drawO(event.target.id);
      }
      turn++;
      checkGameOver();
    }
  });

});

function drawX(canvas, moveTo1, moveTo2, lineTo1, lineTo2) {
  var canvas = document.getElementById(canvas);
  var ctx = canvas.getContext("2d");
  ctx.moveTo(moveTo1,moveTo2);
  ctx.lineTo(lineTo1,lineTo2);
  ctx.lineWidth = 12;
  ctx.strokeStyle = "#ff0000";
  ctx.stroke();
}

function drawO(canvas) {
var canvas = document.getElementById(canvas);
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.lineWidth = 12;
ctx.strokestyle = "#ff0000";
ctx.stroke();
}

function checkGameOver(){


}
