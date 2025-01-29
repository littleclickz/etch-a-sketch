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

//everything above this line works! next: focus on figuring out how to remove original grid
//(something to do with .getElementsByClassName returning an array, so you have to loop through the array
//and delete each array item)

function userGrid() {
    const originalGrid = document.getElementsByClassName("box");
    originalGrid.remove();
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