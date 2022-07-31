let mouseDown = false;

function Square(length) {
    this.length = length + 'px';
    this.width = length + 'px';
    this.element = document.createElement('div');
    this.element.setAttribute('class', 'grid-square');
    this.element.style.width = this.width;
    this.element.style.height = this.height;

    this.element.addEventListener('mousedown', () => {
        this.element.style.backgroundColour = currentColor;
    })

    this.element.addEventListener('mouseover', () => {
        if (mouseDown) {
            this.element.style.backgroundColor = currentColor;
        };
    })
}


function Grid(squaresPerSide) {
    this.squaresPerSide = squaresPerSide;
    this.length = 960;
    this.element = document.querySelector('#grid-container');
    this.element.style.height = this.length + 'px';
    this.element.style.width = this.lenght + 'px';
    this.element.addEventListener('click', () => {
        console.log('clicked')
        mouseDown = !mouseDown;
    })

    this.gen = () => {
        this.element.textContent = '';
        for (let i = 0; i < this.squaresPerSide**2; i++) {
            newSquare = new Square(this.length/this.squaresPerSide);
            this.element.appendChild(newSquare.element);
        }
    }

    this.reset = () => {
        const allSquares = document.querySelectorAll('.grid-square');
        allSquares.forEach( (square) => {
            square.style.backgroundColor = 'white';
        })
    }

}

const randomColorButton = document.querySelector('#random-color');
randomColorButton.addEventListener('click', () => {
    currentColor = '#' + Math.floor(Math.random()*16777215).toString(16);
})

const genGridButton = document.querySelector('#gen-grid');
genGridButton.addEventListener('click', () => {
    const squaresPerSide = document.querySelector('#number-of-squares').value;
    const grid  = new Grid(squaresPerSide)
    grid.gen();
});

let currentColor = '#000';
const colorPicker = document.querySelector('#color-picker');
colorPicker.addEventListener('change', () => {
    currentColor = colorPicker.value;
});

const gridResetButton = document.querySelector('#reset')
gridResetButton.addEventListener('click', () => {
    grid.reset();
})

const grid = new Grid(16);
grid.gen();