let container = document.querySelector("div#container");
container.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "grey";
});

let start_btn = document.querySelector("#start");
start_btn.addEventListener("click", () => {
  let num_grid = prompt("Enter the width and height for the grid: ");

  if (container.firstChild) {
    clearGrid();
  }

  while (num_grid > 50) {
    alert("You have exceeded the grid size. Pick another number");
    num_grid = prompt("Enter the width and height for the grid: ");
  }

  container.style.maxWidth = num_grid * 15 + "px";

  for (let i = 0; i < num_grid; i++) {
    for (let j = 0; j < num_grid; j++) {
      let square = document.createElement("div");
      square.id = "square";
      container.appendChild(square);
    }
  }
});

function clearGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

let clearCanvas = document.querySelector("#clear");
clearCanvas.addEventListener("click", resetGrid);

function resetGrid() {
  let squares = container.querySelectorAll("#square");
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = "white";
  }
}
