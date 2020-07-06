var numSquares = 5;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisply = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    for (var i = 0; i < modeButton.length; i++) {
        modeButton[i].addEventListener("click", function () {
            modeButton[0].classList.remove("selected");
            modeButton[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 2 : numSquares = 5;
            reset();
        });
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        //give initial color to the squares
        squares[i].style.backgroundColor = colors[i];

        //add event listner to squares
        squares[i].addEventListener("click", function () {
            //grab the clicked color
            var clickedColor = this.style.backgroundColor;
            // check the clicked color
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColor(pickedColor);
                h1.style.backgroundColor = pickedColor;
                resetButton.textContent = "Play Again?"
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset() {
    //generate all new colors
    colors = generateRandomColor(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisply.textContent = pickedColor;
    //change colors of the squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }

    }
    //change the backgroung of h1
    h1.style.backgroundColor = "#232323";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
}

resetButton.addEventListener("click", function () {
    reset();
});

function changeColor(color) {
    //loop through the squares
    for (var i = 0; i < squares.length; i++) {
        //change color of every square
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColor(num) {
    //make an array
    var arr = [];
    //repeat num times
    for (var i = 0; i <= num; i++) {
        //get a random color and push into the array
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
    // "rgb (r, g, b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";

}