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
    originalGrid.forEach((cell) => {
       originalGrid.splice(0, 1);
    });
    const userInput = document.getElementById("choice");
    const gridSize = userInput.value;
    let i = 0;
    while (i < gridSize && gridSize <= 100) {
      const newDiv = document.createElement("div");
      divContainer.appendChild(newDiv);
      newDiv.className = "box";
      const calculatedSize = calc(1024 / gridSize);
      newDiv.style.minWidth = calculatedSize;
      newDiv.style.maxWidth = calculatedSize;
      newDiv.style.minHeight = calculatedSize;
      newDiv.style.maxHeight = calculatedSize;
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