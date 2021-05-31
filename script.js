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

let inputPair = [];

let inputNum = 0;

const screenDisplay = document.getElementById('screen');

const numBtns = document.querySelectorAll('.num');
numBtns.forEach(numBtn => numBtn.addEventListener('click', logEvent))

function logEvent(e) {
    inputNum += (e.target.textContent);
    num = parseFloat(inputNum)
    console.log(num) 
    screenDisplay.textContent = num
}

const operationBtns = document.querySelectorAll('.op');
operationBtns.forEach(opBtn => opBtn.addEventListener('click', logOperation));

function logOperation(e) {
    inputPair.push(num)
    inputNum = 0;
    console.log(inputPair)
    let btnId = e.target.id
    console.log(btnId)
}



