const divContainer = document.querySelector("#container"); // defines our grid container//

function initialGrid() {
    let i = 0;
    while (i < 17) {
        const newDiv = document.createElement("div");
        divContainer.appendChild(newDiv);
        newDiv.id = "box";
        i ++;
    }
}

initialGrid();
