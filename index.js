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

    this.element.addEventListener('mouseover', (e) => {
        if (mouseDown) {
            this.element.style.backgroundColor = currentColor;
        };
    })
}


function Grid(squaresPerSide) {
    this.squares = squaresPerSide;
    this.length = 960;
    this.element = document.querySelector('#grid-container');
    this.element.style.height = this.length + 'px';
    this.element.style.width = this.lenght + 'px';

    this.reset = () => {
        this.element.textContent = '';
        for (let i = 0; i < this.squares**2; i++) {
            newSquare = new Square(this.length/this.squares);
            this.element.appendChild(newSquare.element);
        }
    }

}

let mouseDown = false;
document.addEventListener('mousedown', () => {
    mouseDown = true;
    console.log(mouseDown);
})

document.addEventListener('mouseup', () => {
    mouseDown = false;
    console.log(mouseDown);
})

document.querySelector('#grid-reset').addEventListener('click', () => {
    test.reset();
});


const colorPicker = document.querySelector('#color-picker');
let currentColor = '#000';
colorPicker.addEventListener('change', () => {
    currentColor = colorPicker.value;
})

let test = new Grid(10);
test.reset();