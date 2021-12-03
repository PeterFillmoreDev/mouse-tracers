const container = document.querySelector("#grid");
let gridSize = 16;

function gridArray(squareNum){
  container.style.setProperty('--grid-rows', squareNum);
  container.style.setProperty('--grid-cols', squareNum);
  for (c = 0; c < (squareNum ** 2); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "square";
  }
}

gridArray(32);

const allSquares = document.querySelectorAll(".square");

allSquares.forEach(square => {
  square.addEventListener('mouseenter', (e)=>{
    square.style.setProperty("background-color", "honeydew");
  });
});