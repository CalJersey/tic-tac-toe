// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  console.log('jQuery ready function fired.');
  //var to track which turn it is
  turn = 1;
  //array of all possible win scenarios
  arWin = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
  //array of all plays for each player in current game
  arXPlays = [];
  arOPlays = [];
  move = 0;
  curPlayer = "X";
  win = 0;

  //onCLick function for reset button
  $("#reset").on("click",function(){window.location.reload(false);});

  //onClick for board passes event containing id of element clicked
  $("#board").on("click", function(event){

    //If a canvas was clicked (as opposed to one of the border lines)
    if (event.target.id.search("canvas") === 3) {
      //get canvas ID num (which square was clicked)
      move = event.target.id.slice(-1);

      //if square clicked has not been clicked previously (found in array of plays for X or O)
      if (!arXPlays[move] && !arOPlays[move]){
        //if it is X's move
        if (turn%2) {
          //set player
          curPlayer = "X";
          //log play
          arXPlays[move] = 1;
          //draw appropriate X
          drawX(event.target.id,40,30,250,130);
          drawX(event.target.id,250,30,40,130);
        }
        //O's move
        else {
          //set player
          curPlayer = "O";
          //log play
          arOPlays[move] = 1;
          //draw O
          drawO(event.target.id);
        }
        //if turn 5 or more (can't win in less turns)
        if (turn>=5) {
          //check is someone won
          let win = checkGameOver();

          //if winner
          if (win){
            endGame(1);
          } else {
            if (turn === 9){
              endGame(0);
            }
          }
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
ctx.arc(140,80,60,0,2*Math.PI,false);
ctx.lineWidth = 12;
ctx.strokeStyle = "#ff0000";
ctx.stroke();
}

//function to check if game has been won
function checkGameOver(){
  let arCheck = [];
  let win = 1;
  if (curPlayer === "X") {
    //X's turn
    arCheck = arXPlays;
  } else {
    //Y's turn
    arCheck = arOPlays;
  }
  console.log(arCheck);
  //Loop over possible wins
  for (i=0;i<arWin.length;i++){
    //Loop over plays necessary for current win scenario
    for (j=0;j<arWin[i].length;j++){
      //reset win to 1;
      win = 1;
      //if current square being checked does not exist in players array
      if (!arCheck[arWin[i][j]]) {
        //set win to 0
        win = 0;
        //break out of loop
        break;
      }
    }
    //if win is 1
    if (win === 1) {
      //set winner
      return win;
      //if no win, keep testing
    }
  }
//no winner
return win;
}

function endGame(win){
  $("#board").off("click");

  if (win){
    winText = `${curPlayer} wins!`;
  } else {
    winText = "It's A Draw!";
  }
  $("div.winText").html(winText);
  $("div.winText").css("visibility","visible");

    $("div.winText").fadeToggle("slow").fadeToggle("slow").fadeToggle("slow").fadeToggle("slow");

}

//function to reset board
function resetBoard(){
  window.location.reload(true);
}
