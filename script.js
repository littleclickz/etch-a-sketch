const divContainer = document.querySelector("#container");

function initialGrid() {
    let i = 0;
    while (i < 16) {
        const newDiv = document.createElement("div");
        divContainer.appendChild(newDiv);
        newDiv.className = "box";
        newDiv.style.minWidth = "251px";
        newDiv.style.maxWidth = "251px";
        newDiv.style.minHeight = "251px";
        newDiv.style.maxHeight = "251px";
        newDiv.addEventListener("mouseover", () => {
            newDiv.style.backgroundColor = "black";
        });
        newDiv.addEventListener("click", () => {
            newDiv.style.backgroundColor = "white";
        });
        i ++;
    }
}

function clearGrid() {
    const element = document.getElementById("container");
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
}

function userGrid() {
    const userInput = document.getElementById("choice");
    const gridSize = userInput.value;
    const cellSize = 1024 / gridSize;
    let cellNumber = gridSize * gridSize;
    let i = 0;
    while (i < cellNumber && cellNumber <= 100) {
      const newDiv = document.createElement("div");
      divContainer.appendChild(newDiv);
      newDiv.className = "box";
      newDiv.style.minWidth = `${cellSize}px`;
      newDiv.style.maxWidth = `${cellSize}px`;
      newDiv.style.minHeight = `${cellSize}px`;
      newDiv.style.maxHeight = `${cellSize}px`;
      newDiv.addEventListener("mouseover", () => {
        newDiv.style.backgroundColor = "black";
      });
      newDiv.addEventListener("click", () => {
          newDiv.style.backgroundColor = "white";
      });
      i ++;
    }
}

const formSubmit = document.querySelector("#subBtn");
formSubmit.addEventListener("click", () => {
    clearGrid();
    userGrid();
});

initialGrid();