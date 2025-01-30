const divContainer = document.querySelector("#container"); // defines our grid container//

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
    Array.from(originalGrid).forEach(cell => {
        Array.from(originalGrid).splice(0, 1);
    });
    const userInput = document.getElementById("choice");
    const gridSize = userInput.value;
    let i = 0;
    while (i < gridSize && gridSize <= 100) {
      const newDiv = document.createElement("div"); //ripped from initialGrid() so we know it works
      divContainer.appendChild(newDiv); //ripped from initialGrid() so we know it works
      newDiv.className = "box"; //ripped from initialGrid() so we know it works
      newDiv.style.minWidth = "251px";
      newDiv.style.maxWidth = "251px"
      newDiv.style.minHeight = "251px";
      newDiv.style.maxHeight = "251px";
      newDiv.addEventListener("mouseover", () => { //ripped from initialGrid() so we know it works
        newDiv.style.backgroundColor = "lavender";
      });
      newDiv.addEventListener("click", () => { //ripped from initialGrid() so we know it works
          newDiv.style.backgroundColor = "white";
      });
      i ++;
    }
}

//everything below this line works!

const formSubmit = document.querySelector("#subBtn");
formSubmit.addEventListener("click", () => {
    userGrid();
});