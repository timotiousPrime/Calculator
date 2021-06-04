// Functions

function add(x, y){
    return x + y;
};

function subtract(x, y) {
    return x - y;
};

function multiply(x, y) {
    return x * y;
};

function divide(x, y) {
    if (y === 0) return 'error'
    else {
        return x / y;
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

let inputPair = [0,]; // holds a pair of numbers

let inputNum = 0; // is the first number being entered at any one time

let op = ''; // is the operation entered by user

let result; // is the result from evaluation

const screenDisplay = document.getElementById('screen'); // is the area where the screen is 

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
        case 'divi':
            result = divide(x, y);
            break;
        default:
            result = add(x, y);
            break;
    }

}


function resetNums(){
    inputNum = 0;
    tempNum = 0;
}


function clearScreen() {
    inputNum = 0;
    tempNum = 0;
    inputPair = [0];
    result = 0;
    screenDisplay.textContent = tempNum;
}

// captures the number entered by user
function captureInputNum(e) {
    result = 0
    inputNum += e.target.textContent; // is the number inputted by the user
    tempNum = parseFloat(inputNum); // clean up the number
    //console.log(tempNum);
    screenDisplay.textContent = tempNum;
}


function updateNums(){
    inputPair.push(tempNum); 
    resetNums();
    evaluate();
}


// updates previous number entered and stores the operator
function operate(e) {
    updateNums();
    screenDisplay.textContent = result;
    //console.log('equals');
    //console.log(result + '.');
    //console.log(result);
    inputPair = [];
    inputPair.push(result);
    op = e.target.id;
    //console.log(op)
}


function equals(e) {
    //console.log(e.target.id)
    updateNums();
    inputPair = [0];
    tempNum = result;
    op = '';
    //console.log(result);
    screenDisplay.textContent = result;
}

