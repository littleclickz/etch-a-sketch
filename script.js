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
            newDiv.style.backgroundColor = "lavender";
        });
        newDiv.addEventListener("click", () => {
            newDiv.style.backgroundColor = "white";
        });
        i ++;
    }
}

initialGrid();

function userGrid() {
    const originalGrid = document.getElementsByClassName("box");
    Array.from(originalGrid).forEach(() => {
       Array.from(originalGrid).splice(0, 1);
    });
    const userInput = document.getElementById("choice");
    const gridSize = userInput.value;
    const cellNumber = gridSize * gridSize;
    const cellSize = 1024 / gridSize;
    let i = 0;
    while (i < cellNumber && cellNumber <= 100) {
      const newDiv = document.createElement("div");
      divContainer.appendChild(newDiv);
      newDiv.className = "userBox";
      newDiv.style.minWidth = `${cellSize}px`;
      newDiv.style.maxWidth = `${cellSize}px`;
      newDiv.style.minHeight = `${cellSize}px`;
      newDiv.style.maxHeight = `${cellSize}px`;
      newDiv.addEventListener("mouseover", () => {
        newDiv.style.backgroundColor = "lavender";
      });
      newDiv.addEventListener("click", () => {
          newDiv.style.backgroundColor = "white";
      });
      i ++;
    }
}

const formSubmit = document.querySelector("#subBtn");
formSubmit.addEventListener("click", () => {
    userGrid();
});