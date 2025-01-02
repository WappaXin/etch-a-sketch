const body = document.querySelector("body");
const divContainer = document.querySelector("div.container");
const sizeButton = document.querySelector('#gridSize');
const clearButton = document.querySelector('#clear');

sizeButton.addEventListener('click' , setGridSize);
clearButton.addEventListener('click' , clearGrid);



// Creating a global variable to store the value from the user which can be used in different functions
let gridSizeGlobal;

function setGridSize() {
    let gridSize = prompt("Enter the grid size number upto 100" , "20");

    if(gridSize === null){ return; }
    else if(gridSize > 100){alert("Its over 100, enter something from 1 to 100"); return;}
    else if(gridSize < 0){alert("Its below 0, enter something from 1 to 100"); return;}
    else if(gridSize > 0 && gridSize < 101){ gridSizeGlobal = gridSize; createGrid(); coloring();}
    else{alert("It's not that hard, just enter a number!")}
};


// It first replaces all the children in the divContainer with empty children and then creates the grid
function createGrid(){
    divContainer.replaceChildren();

    // It first creates a row
    for (i = 0; i < gridSizeGlobal; i++){
        let childContainer = document.createElement('div');
        childContainer.classList.add('childContainer')
        divContainer.appendChild(childContainer);

        // and then the row is filled with the number of elements that is given by the user
        for(j = 0; j < gridSizeGlobal; j++){
            let children = document.createElement('div');
            children.classList.add('children')
            childContainer.appendChild(children);
        }
    }
};


function coloring(){
    const divs = document.querySelectorAll('.children');
    // a nodeList containing all the elements which have a class called children are converted into an Array
    let divsArray = Array.from(divs);

    divsArray.forEach(item => {item.addEventListener('mouseenter' , (event) => {
        
        event.target.style.backgroundColor = 'black';
        
        // parseFloat only takes a number from a string or converts a string into a number
        // the variable finds the value of the opacity and if not set- it will assigned 0
        let opa = parseFloat(event.target.style.opacity) || 0;
        if(opa === 0){opa = 0.1;}
        else if(opa >= 1){opa = 1;}
        else if(opa !== 0){opa += 0.1;}

        // the value of the opa is fixed to a single decimal point
        event.target.style.opacity = opa.toFixed(1);
        });
    });
};
 

function clearGrid(){
    createGrid();
    coloring();
};

