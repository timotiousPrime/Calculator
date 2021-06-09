// Functions

function roundNum(num){
    rounded = num * 1000000
    rounded = Math.round(rounded)
    rounded = rounded/1000000
    return rounded
}


function add(x, y){
    let answer = x + y;
    return roundNum(answer);

};

function subtract(x, y) {
    let answer = x - y;
    return roundNum(answer);
};

function multiply(x, y) {
    let answer = x * y;
    return roundNum(answer);
};

function divide(x, y) {
    if (y === 0) return 'error'
    else {
        let answer = x / y;
    return roundNum(answer);
};
    // add a popup saying 'The second value has to be greater than your IQ. It can\'t be zero' 
};

function pi() {
    return 22/7;
};

function percentOf(x, y) {
    let percent = x * (y / 100);

    return percent;
};

function squared(x) {
    return x * x;
};

function squareRoot(x) {
    if (x >= 0) return Math.sqrt(x)
    else return 'error' 
    // add a popup saying 'You can\'t get the square root of your IQ. It can\'t be less than zero'
};

function factoral(x) {
    let array = [];
    for (let i = 1; i <= x; i++ ) {
        array.push(i);
    };

    let result =array.reduce( (acc, num) => acc * num)
    return result;
};

///////////////////////////////////////////////////
let neg = false;

let tempNum = 0;

let inputPair = [0,]; // holds a pair of numbers

let inputNum = 0; // is the first number being entered at any one time

let op = ''; // is the operation entered by user

let result; // is the result from evaluation

const topScreenDisplay = document.getElementById('topScreen'); // is the top part of the screen
const bottomScreenDisplay = document.getElementById('bottomScreen'); // is the bottom part of the screen


// listens for when a number is pressed
const numBtns = document.querySelectorAll('.num');
numBtns.forEach(numBtn => numBtn.addEventListener('click', captureInputNum))

// listen for when an operation is entered
const operationBtns = document.querySelectorAll('.op');
operationBtns.forEach(opBtn => opBtn.addEventListener('click', operate));




// Listens for when user clicks on the clear btn and calls clear function
const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', clearScreen);


// Listen for when equals is clicked
const equalsBtn = document.querySelector('#equals')
equalsBtn.addEventListener('click', equals);
///////////////////////////////////////////////////////////////////////



// evaluates the numbers in inputPair with the operation called
function evaluate(){

    let x = inputPair[0];
    let y = inputPair[1];

    switch (op) {
        case 'plus':
            result = add(x, y);
            break;
        case 'minus':
            result = subtract(x, y);
            break;
        case 'times':
            result = multiply(x, y);
            break;
        case 'divide':
            result = divide(x, y);
            break;
        default:
            result = add(x, y);
            break;
    }

}


// Reset inputNum and tempNum to 0
function resetNums(){
    inputNum = 0;
    tempNum = 0;
}


// Clear the screen and set to 0
function clearScreen() {
    inputNum = 0;
    tempNum = 0;
    inputPair = [0];
    result = 0;
    op = '';
    topScreenDisplay.textContent = op
    bottomScreenDisplay.textContent = tempNum;
}

// captures the number entered by user
function captureInputNum(e) {
    result = 0;
    inputNum += e.target.textContent; // is the number inputted by the user
    tempNum = parseFloat(inputNum); // clean up the number
        
    if (neg === true && tempNum > 0) {
        tempNum = tempNum * -1;
        bottomScreenDisplay.textContent = tempNum;
    } else {
        console.log(tempNum);
        bottomScreenDisplay.textContent = tempNum;
        console.log(e.target.textContent)
    }
}


function updateNums(){
    inputPair.push(tempNum); 
    resetNums();
    evaluate();
}


// updates previous number entered and stores the operator
function operate(e) {
    neg = false;
    updateNums();
    bottomScreenDisplay.textContent = result;
    //console.log('equals');
    //console.log(result + '.');
    //console.log(result);
    inputPair = [];
    inputPair.push(result);
    op = e.target.id;
    topScreenDisplay.textContent = op
    //console.log(op)
}


function equals() {
    neg = false;
    //console.log('equals')
    updateNums();
    inputPair = [0];
    tempNum = result;
    op = '';
    //console.log(result);
    topScreenDisplay.textContent = op
    bottomScreenDisplay.textContent = result;
}

////////////////////////////////////////////////////////////////
//Listen for when keys are presssed

function keyPressed(e){
    return e.key;
}


window.addEventListener('keydown', keyPressed);
const numKey = document.querySelector()

// Make tempNum negative
function negative() {
    neg = true;
    topScreenDisplay.textContent = '-';
}

// Listen for user wants a negative interger
const negativeBtn = document.querySelector('#negative');
negativeBtn.addEventListener('click', negative)