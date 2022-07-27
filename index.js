function Square(length) {
    this.length = length;
    this.element = document.createElement('div');
    this.element.setAttribute('class', 'grid-square');
    this.element.length = this.length;
    this.element.height = this.length;
}

function Grid(numberOfSquares) {
    this.numberOfSquares = numberOfSquares;
    // Checks if numberOfSquares has an integer square root
    while (Math.floor(Math.sqrt(this.numberOfSquares)) !== Math.sqrt(this.numberOfSquares)) {
        this.numberOfSquares--;
        if (this.numberOfSquares < 0) {
            console.log('ERROR');
            break;
        }
    }
    this.length = 960;
    console.log(this.numberOfSquares)
    console.log(Math.sqrt(this.numberOfSquares));
    
    this.element = document.querySelector('#grid-container');
    this.element.classList.toggle('zeroed');

    const squareLength = this.length/Math.sqrt(this.numberOfSquares);
    for (let i = 0; i < numberOfSquares; i++) {
        for (let j = 0; j < numberOfSquares; j++) {
            const newSquare = new Square(squareLength);
            this.element.appendChild(newSquare.element);
        }
    }

}

let test = new Grid(99);