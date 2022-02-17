

//Input feild 
function updateInput(product, type) {
    const inputNumber = document.getElementById(product + '-input');
    const inputText = inputNumber.value;
    inputNumber.value = parseFloat(inputText);


    const inputTutal = document.getElementById(product + '-input');
    inputTutal.innerText = inputText;


    // console.log(foodInput);
    calculated();
    calculatedBalance();
    // return foodInput;
}

// Calculate Button
document.getElementById('calculate-button').addEventListener('click', function () {
    updateInput('food');
    updateInput('rent');
    updateInput('clothes');
    updateInput('tutal');

});

// Balance check
function getBalance(type) {

    const inputNumber = document.getElementById(type + '-input');
    const inputText = parseFloat(inputNumber.value);
    return inputText;
}

//Calculated
function calculated() {
    const foodInput = getBalance('food');
    const rentInput = getBalance('rent');
    const clothInput = getBalance('clothes');
    const tutalInput = getBalance('tutal');

    const expensesTutal = foodInput + rentInput + clothInput;
    const tutalBalance = tutalInput - expensesTutal;
    document.getElementById('expenses-balance').innerText = expensesTutal;
    document.getElementById('extra-balance').innerText = tutalBalance;
    // console.log(expensesTutal);
};


//Siving Button
document.getElementById('saving-button').addEventListener('click', function () {
    updateInput('saving');
    updateInput('food');
    updateInput('rent');
    updateInput('clothes');
    updateInput('tutal');

});

//saving area
function calculatedBalance() {


    const foodInput = getBalance('food');
    const rentInput = getBalance('rent');
    const clothInput = getBalance('clothes');
    const tutalInput = getBalance('tutal');
    const savingInput = getBalance('saving');

    //saving calculated
    const expensesTutal = foodInput + rentInput + clothInput;
    const tutalBalance = tutalInput - expensesTutal;
    const savingAmount = tutalInput * savingInput / 100;
    const remainingBalance = tutalBalance - savingAmount;

    document.getElementById('saving-balance').innerText = savingAmount;
    document.getElementById('remaining-balance').innerText = remainingBalance;
};

//error message
function verifyPin() {
    const pin1 = document.getElementById('food-input').value;
    const pin2 = document.getElementById('rent-input').value;
    const pin3 = document.getElementById('clothes-input').value;
    const pin4 = document.getElementById('tutal-input').value;
    const pin5 = document.getElementById('saving-input').value;
    const addBalance = parseFloat(pin1) + parseFloat(pin2) + parseFloat(pin3);
    if (typeof pin1, pin2, pin3, pin4, pin5 == '') {
        const failError = document.getElementById('notify-fail');
        failError.style.display = 'block';
    }
    else {
        const failError1 = document.getElementById('notify-success');
        failError1.style.display = 'block';
    }


    if (addBalance > pin4) {
        const failError2 = document.getElementById('less-money');
        failError2.style.display = 'block';
    }
    else {
        // const failError1 = document.getElementById('notify-success');
        // failError1.style.display = 'block';
    }


    if (pin1, pin2, pin3, pin4, pin5 < 0) {
        const mainasInput = document.getElementById('mainas-error');
        mainasInput.style.display = 'block';
    }
    else {
        // const failError1 = document.getElementById('notify-success');
        // failError1.style.display = 'block';
    }
    if (typeof pin1, pin2, pin3, pin4, pin5 == 'string') {
        const stringInput = document.getElementById('mainas-error');
        stringInput.style.display = 'block';
    }
    else {
        // const failError1 = document.getElementById('notify-success');
        // failError1.style.display = 'block';
    }
}


