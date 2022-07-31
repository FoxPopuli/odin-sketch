let mouseDown = false;
document.body.addEventListener('click', () => {

    mouseDown = !mouseDown;
    colorSquare();
})

function colorSquare() {
    console.log(mouseDown);
    if (mouseDown) {
        this.style.backgroundColor = currentColor;
    }
    
}

const grid = document.querySelector('#grid-container');
const gridHeight = 960;
function makeGrid(squares) {
    grid.textContent = '';
    for (let i = 0; i < squares**2; i++) {
        const newCell = document.createElement('div');
        newCell.classList.toggle('grid-square');
        newCell.style.height = gridHeight/squares + 'px';
        newCell.style.width = gridHeight/squares + 'px';

        newCell.addEventListener('mouseover', colorSquare);

        grid.appendChild(newCell);
        
    }

}

const genGridButton = document.querySelector('#gen-grid');
genGridButton.addEventListener('click', () => {
    const squaresPerSide = document.querySelector('#number-of-squares').value;
    if (squaresPerSide > 2 && squaresPerSide < 100) {
        makeGrid(squaresPerSide);
    } else {
        console.log("Invalid input");
    }

});

const resetButton = document.querySelector('#grid-reset');
resetButton.addEventListener('click', () => {
    document.querySelectorAll('.grid-square').forEach( (square) => {
        square.style.backgroundColor = 'white';
    })
})

const colorPicker = document.querySelector('#color-picker');
let currentColor = '#000';
colorPicker.addEventListener('change', () => {
    currentColor = colorPicker.value;
})



const randButton = document.querySelector('#random-color');
randButton.addEventListener('click', () => {
    currentColor = '#' + Math.floor(Math.random()*16777215).toString(16);
});

makeGrid(16);