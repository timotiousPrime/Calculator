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
    let btnId = e.target.id
    console.log(btnId)
}

