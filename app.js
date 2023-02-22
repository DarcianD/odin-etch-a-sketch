function populateContainer(num){
    let container = document.querySelector(".container");
    let sizes = container.querySelectorAll("div");
    sizes.forEach((div) => div.remove()) ;
    container.style.gridTemplateColumns = `repeat(${num},1fr)`;
    container.style.gridTemplateRows= `repeat(${num},1fr)`;

    let sum = num * num;
    for (let i = 0; i < sum; i++){  
        let grid = document.createElement("div")
        grid.addEventListener("mouseover", () => { 
            grid.style.backgroundColor = "black";
        })
        grid.style.backgroundColor = "white"; 
        grid.style.border = "1px solid gray"
        container.insertAdjacentElement("beforeend",grid);
}};

function changesSize(input){
    if (input >=10 || input <=100){
        populateContainer(input);
    } else{
        
    }
}

populateContainer(10);