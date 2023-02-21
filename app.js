let container = document.querySelector(".container");
container.style.gridTemplateColumns = "repeat(16,1fr)";
container.style.gridTemplateRows= "repeat(16,1fr)";

for (let i = 0; i < 256; i++){
    let grid = document.createElement("div")
    grid.style.backgroundColor = "Gray";
    container.insertAdjacentElement("beforeend",grid);
}