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

// // clears the numbers
// function clearNums(){
//     inputPair = [];
//     inputNum = 0;
//     tempNum = 0
// }

// // clears the screen
// function clearScreen(){
//     clearNums()
//     inputPair = [0,];
//     result = 0;
//     screenDisplay.textContent = tempNum
//     console.log('clear all');
// }


// function getResultsReady(){
//     clearNums(); // clear the last tempNum and the inputPair
//     inputPair.push(result); // put the result from the evaluation into the clean pair array
//     screenDisplay.textContent = result;
    
// };




// evaluates the numbers in inputPair with the operation called
function evaluate(){

    let x = inputPair[0];
    let y = inputPair[1];

    switch (op) {
        case 'plus':
            result = add(x, y);
            //getResultsReady();
            break;
        case 'minus':
            result = subtract(x, y);
            //getResultsReady();
            break;
        case 'times':
            result = multiply(x, y);
            //getResultsReady();
            break;
        case 'divi':
            result = divide(x, y);
            //getResultsReady();
            break;
        default:
            result = add(x, y);
            //getResultsReady();
            // screenDisplay.textContent = result;
            break;
    }

}

// function evaluateNums(){
//     inputPair.push(tempNum); // add the number entered before operator was pressed, into pair array
//     evaluate(); // evaluate the numbers in the pair array
// }


// // captures the number being entered by the user
// function captureNum(e) {
//     inputNum += (e.target.textContent); //get the contents of the number just pressed and add it to a var
//     tempNum = parseFloat(inputNum); // clean up the number
//     console.log(tempNum);
//     screenDisplay.textContent = tempNum;  // display the number on the calc screen
// }

// function operate(e){
//     console.log(inputPair)
//     evaluateNums();
//     op = e.target.id; // log which operator was just pressed
//     console.log(op);
//     getResultsReady()
// }

// function equals(e){
//     evaluateNums();
//     getResultsReady()
//     console.log(e.target.id)
//     console.log(result)
//     console.log(tempNum)
//     console.log(inputPair)

// }

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



function captureInputNum(e) {
    result = 0
    inputNum += e.target.textContent;
    tempNum = parseFloat(inputNum); // clean up the number
    console.log(tempNum);
    screenDisplay.textContent = tempNum;
}

function operate(e) {
    inputPair.push(tempNum);
    resetNums();
    evaluate();
    screenDisplay.textContent = result;
    console.log('equals');
    console.log(result + '.');
    console.log(result);
    inputPair = [];
    inputPair.push(result);
    op = e.target.id;
    console.log(op)
}

function equals(e) {
    console.log(e.target.id)
    inputPair.push(tempNum);
    resetNums();
    evaluate();
    inputPair = [0];
    tempNum = result;
    op = '';
    console.log(result);
    screenDisplay.textContent = result;
}

