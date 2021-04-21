const container = document.getElementById("container");
window.addEventListener("load", makeRows(16,16));

const newGridButton = document.querySelector("#new-grid-button");
newGridButton.addEventListener("click", newGrid);

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    /**cell.innerText = (c + 1);*/
    cell.addEventListener("mouseover", changeColor);
    container.appendChild(cell).className = "grid-item";
  };
};

function changeColor(e) {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  }

  function newGrid(e) {
    
    /**e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;*/
   var gridSize = window.prompt("Please enter SIZE for new grid: ",16);
   if (isNaN(gridSize)) {
    alert("Please enter number not string!");
   } else {
   if (gridSize < 1 || gridSize > 100 ) {
      alert("Please enter number from 1 to 100!");
   } else {
    const containerArray = Array.from(container.childNodes);
    containerArray.forEach((element) => {
     container.removeChild(element);
    });
    makeRows(gridSize, gridSize);

   }
  }
  }
