// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  console.log('jQuery ready function fired.');
  //var to track which turn it is
  let turn = 1;
  //array of all possible win scenarios
  let arWin = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
  //array of all plays for each player in current game
  let arXPlays = [];
  let arOPlays = [];
  let move = 0;

  //onClick for board passes event containing id of element clicked
  $("#board").on("click", function(event){
    console.log(event.target.id);
    //If a canvas was clicked (as opposed to one of the border lines)
    if (event.target.id.search("canvas") === 3) {
      //get canvas ID num (which square was clicked)
      move = event.target.id.slice(-1);

      if (!arXPlays[move] && !arOPlays[move]){
        //if it is X's move
        if (turn%2) {
          //log play
          arXPlays[move] = 1;
          //draw appropriate X
          drawX(event.target.id,40,30,250,130);
          drawX(event.target.id,250,30,40,130);
        }
        //O's move
        else {
          //log play
          arOPlays[move] = 1;
          //draw O
          drawO(event.target.id);
        }
        //if turn 5 or more (can't win in less turns)
        if (turn>=5) {
          //check is someone won
          checkGameOver();
        }
        //increment turn
        turn++;
      }
    }
  });

});

//function to draw X's
function drawX(canvas, moveTo1, moveTo2, lineTo1, lineTo2) {
  var canvas = document.getElementById(canvas);
  var ctx = canvas.getContext("2d");
  ctx.moveTo(moveTo1,moveTo2);
  ctx.lineTo(lineTo1,lineTo2);
  ctx.lineWidth = 12;
  ctx.strokeStyle = "#ff0000";
  ctx.stroke();
}

//function to draw O's
function drawO(canvas) {
var canvas = document.getElementById(canvas);
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(120,80,70,0,2*Math.PI);
ctx.lineWidth = 12;
ctx.strokeStyle = "#ff0000";
ctx.stroke();
}

//function to check if game has been won
function checkGameOver(){



}

//function to reset board
function resetBoard(){

}
