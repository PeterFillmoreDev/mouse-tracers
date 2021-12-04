const container = document.querySelector("#grid");

function gridArray(squareNum){
  container.style.setProperty('--grid-rows', squareNum);
  container.style.setProperty('--grid-cols', squareNum);
  for (c = 0; c < (squareNum ** 2); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "square";
  };
  
};

let allSquares = document.querySelectorAll(".square");
function sqrChange(){
  allSquares = document.querySelectorAll(".square");
  allSquares.forEach(square => {
    square.addEventListener('mouseenter', (e)=>{
      square.style.setProperty("background-color", "honeydew");
    });
  });
};

gridArray(32);
sqrChange();

const gridRes = document.querySelector("#gridRes");
const resCountDisplay = document.querySelector("#resCountDisplay");
gridRes.addEventListener('mouseup', (e) => {
  resCountDisplay.textContent = `Resolution is ${gridRes.value} squares`;
  allSquares.forEach(square => {
    square.style.setProperty("background-color", "crimson");
    square.remove;
  });
  gridArray(gridRes.value);
  sqrChange();
});
