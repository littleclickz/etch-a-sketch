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
        i ++;
    }
}

initialGrid();

function userGrid() {
    const originalGrid = document.getElementsByClassName("box");
    originalGrid.remove();
    const userInput = document.getElementById("choice").value;
    let i = userInput;
    if (i < userInput && i <= 100) {
        const newDiv = document.createElement("div");
        divContainer.appendChild(newDiv);
        newDiv.className = "box";
        newDiv.addEventListener("mouseover", () => {
            newDiv.style.backgroundColor = "lavender";
        });
        i ++;
    } else if (i > 100) {
        return null;
    }
}

const formSubmit = document.querySelector("#subBtn");
formSubmit.addEventListener("click", () => {
    userGrid();
});

const eraser = document.querySelector("#eraser");
eraser.addEventListener("click", () => {
    highlightedDiv.style.backgroundColor = "white";
})