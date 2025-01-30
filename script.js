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

//everything above this line works! now: test code for removing original grid

function userGrid() {
    const originalGrid = document.getElementsByClassName("box");
    originalGrid.forEach((cell) => {
       originalGrid.splice(0, 1);
    });
    //const userInput = document.getElementById("choice").value;
    //let i = 0;
    //while (i < userInput && i <= 100) {
        //const newDiv = document.createElement("div");
        //divContainer.appendChild(newDiv);
        //newDiv.className = "box";
        //newDiv.addEventListener("mouseover", () => {
            //newDiv.style.backgroundColor = "lavender";
        //});
        //i ++;
    //}
}

//everything below this line works!

const formSubmit = document.querySelector("#subBtn");
formSubmit.addEventListener("click", () => {
    userGrid();
});