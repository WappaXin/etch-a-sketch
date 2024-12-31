const body = document.querySelector("body");
const divContainer = document.querySelector("div.container");
const sizeButton = document.querySelector('#gridSize');
const clearButton = document.querySelector('#clear');

sizeButton.addEventListener('click' , createGrid);
clearButton.addEventListener('click' , clearGrid);

function createGrid() {
    let gridSize = prompt("Enter the grid size number upto 100" , "Example : 20");
    if(gridSize === null){ return; }

    divContainer.replaceChildren();

    for (i = 0; i < gridSize; i++){
        let childContainer = document.createElement('div');
        childContainer.classList.add('childContainer')
        divContainer.appendChild(childContainer);

        for(j = 0; j < gridSize; j++){
            let children = document.createElement('div');
            children.classList.add('children')
            childContainer.appendChild(children);
        }
    }

    coloring();
}

function coloring(){
    const divs = document.querySelectorAll('.children');
    let divsArray = Array.from(divs);
    divsArray.forEach(item => {item.addEventListener('mouseenter' , (event) => { event.target.style.backgroundColor = 'black';  
        event.target.style.opacity += '10%'});
    });
};

// Try to console log all the events when you re-enter the pixel 

function clearGrid(){
    const divs = document.querySelectorAll('.children');
    let divsArray = Array.from(divs);
    divsArray.forEach(item => {item.style.backgroundColor = 'white '; });
};