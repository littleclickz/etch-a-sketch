const divContainer = document.querySelector("#container"); // defines our grid container//

function initialGrid() {
    let i = 0;
    while (i < 16) {
        const newDiv = document.createElement("div");
        divContainer.appendChild(newDiv);
        newDiv.id = "box";
        newDiv.style.minWidth = "246px";
        newDiv.style.maxWidth = "246px";
        newDiv.style.minHeight = "246px";
        newDiv.style.maxHeight = "246px";
        i ++;
    }
}

initialGrid();