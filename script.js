const board = document.querySelector(".board");
const blockheight = 30;
const blockwidth = 30;

const cols = Math.floor(board.clientWidth / blockwidth);
const rows = Math.floor(board.clientHeight / blockheight);

const blocks=[];
const snake=[{x:1,y:3},{x:1,y:4},{x:1,y:5}];
// for(let i=0;i<rows*cols;i++){
//     const block=document.createElement("div");
//     block.classList.add("block");
//     board.appendChild(block);
// }

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const block = document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);
    // block.innerText = `${row}-${col}`;
    blocks[`${row}-${col}`]=block;
  }
}
