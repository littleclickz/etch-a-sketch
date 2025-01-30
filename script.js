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
    Array.from(originalGrid).forEach((cell) => {
       Array.from(originalGrid).splice(0, 1);
    });
    const userInput = document.getElementById("choice");
    const gridSize = userInput.value;
    let i = 0;
    while (i < gridSize && gridSize <= 100) {
      const newDiv = document.createElement("div");
      divContainer.appendChild(newDiv);
      newDiv.className = "userBox";
      const stylesheet = document.styleSheets[0];
      stylesheet.insertRule("#userBox { min-width: calc(1024 / gridSize) }", 0);
      stylesheet.insertRule("#userBox { max-width: calc(1024 / gridSize) }", 0);
      stylesheet.insertRule("#userBox { min-height: calc(1024 / gridSize) }", 0);
      stylesheet.insertRule("#userBox { max-height: calc(1024 / gridSize) }", 0);
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