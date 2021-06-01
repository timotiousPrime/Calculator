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
    if (y === 0) return 'The second value has to be greater than your IQ. It can\'t be zero' 
    else {
        return x / y;
    };
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
    else return 'You can\'t get the square root of your IQ. It can\'t be less than zero' 
};

function factoral(x) {
    let array = [];
    for (let i = 1; i <= x; i++ ) {
        array.push(i);
    };

    let result =array.reduce( (acc, num) => acc * num)
    return result;
};

//

let inputPair = []; // holds a pair of numbers

let inputNum = 0; // is the first number being entered at any one time

let num;

let op = '';

let result;

const screenDisplay = document.getElementById('screen'); // is the area where the screen is 

// listens for when a number is pressed
const numBtns = document.querySelectorAll('.num');
numBtns.forEach(numBtn => numBtn.addEventListener('click', captureNum))


// captures the number being entered by the user
function captureNum(e) {
    inputNum += (e.target.textContent);
    num = parseFloat(inputNum)
    console.log(num) 
    screenDisplay.textContent = num
}

// listen for when an operation is entered
const operationBtns = document.querySelectorAll('.op');
operationBtns.forEach(opBtn => opBtn.addEventListener('click', logOperation));


// captures the number previously entered and adds the last operation called to a variable 
function logOperation(e) {
    inputPair.push(num)
    inputNum = 0;
    console.log(inputPair)
    op = e.target.id
    console.log(op)
}

function clear(){
    num = 0;
    inputPair = [];
    inputNum = 0;
    op = '';
}

function clearScreen(){
    clear();
    screenDisplay.textContent = num;
}

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', clearScreen);

function displayResults(result){
    screenDisplay.textContent = result;
    console.log(result);
    clear();
    num = result;
}

function evaluate(){
    inputPair.push(num);
    console.log(inputPair);
    let x = inputPair[0];
    let y = inputPair[1];
    console.log(op);
    switch (op) {
        case 'plus':
            result = add(x, y);
            displayResults(result)
            break;
        case 'minus':
            result = subtract(x, y);
            displayResults(result)
            break;
        case 'times':
        result = multiply(x, y);
        displayResults(result)
            break;
        case 'divi':
        result = divide(x, y);
        displayResults(result)
            break;
        default:
            console.log(num);
            screenDisplay.textContent = num;
            console.log(op)
            break;
    }

}

const equalsBtn = document.querySelector('#equals')
equalsBtn.addEventListener('click', evaluate)