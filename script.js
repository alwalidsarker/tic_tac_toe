let boxes = document.querySelectorAll("#main #container #game .box");
let resetButton = document.querySelector(".reset_button");

let turnO = true;

let msg_winner = document.querySelector('#msg .winner p');
let msg_h3 = document.querySelector('#msg h3');
let msg_button = document.querySelector('#msg button');

let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach(function (box) {
  box.addEventListener("click", function () {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
function disableButtons(){
  for (const box of boxes) {
    box.disabled = true;
  };
};
function enabledButtons(){
  for (const box of boxes) {
    box.disabled = false;
    box.innerText = "";
  };
};
function newGame(){
  trunO = true;
  enabledButtons();
};
const checkWinner = () => {
  for (let patterns of winPatterns) {
      let pos1 = boxes[patterns[0]].innerText;
      let pos2 = boxes[patterns[1]].innerText;
      let pos3 = boxes[patterns[2]].innerText;
      if(pos1 != "" && pos2 != "" && pos3 != "" ){
        if( pos1 === pos2 && pos2 === pos3){
          function showWinner(winner){
            msg_h3.innerHTML = winner;
            disableButtons();
          };
          showWinner(pos1);
        };
      };
  };
};
resetButton.addEventListener('click', newGame);
msg_button.addEventListener('click', newGame);