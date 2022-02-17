


function updateInput(product, type) {
    const inputNumber = document.getElementById(product + '-input');
    const inputText = inputNumber.value;
    inputNumber.value = parseFloat(inputText);


    const inputTutal = document.getElementById(product + '-input');
    inputTutal.innerText = inputText;


    // console.log(foodInput);
    calculated();
    calculadedBalance();
    // return foodInput;
}


document.getElementById('calculate-button').addEventListener('click', function () {
    updateInput('food');
    updateInput('rent');
    updateInput('clothes');
    updateInput('tutal');

});


function getBalanceff(type) {

    const inputNumber = document.getElementById(type + '-input');
    const inputText = parseFloat(inputNumber.value);
    return inputText;
}
function calculated() {
    const foodInput = getBalanceff('food');
    const rentInput = getBalanceff('rent');
    const clothInput = getBalanceff('clothes');
    const tutalInput = getBalanceff('tutal');

    const expensesTutal = foodInput + rentInput + clothInput;
    const tutalBalance = tutalInput - expensesTutal;
    document.getElementById('expenses-balance').innerText = expensesTutal;
    document.getElementById('extra-balance').innerText = tutalBalance;
    // console.log(expensesTutal);
};

document.getElementById('saving-button').addEventListener('click', function () {
    updateInput('saving');
    updateInput('food');
    updateInput('rent');
    updateInput('clothes');
    updateInput('tutal');

});

function calculadedBalance(hello) {


    const foodInput = getBalanceff('food');
    const rentInput = getBalanceff('rent');
    const clothInput = getBalanceff('clothes');
    const tutalInput = getBalanceff('tutal');
    const savingInput = getBalanceff('saving');


    const expensesTutal = foodInput + rentInput + clothInput;
    const tutalBalance = tutalInput - expensesTutal;
    const savingAmount = tutalInput * savingInput / 100;
    const remainingBalance = tutalBalance - savingAmount;

    document.getElementById('saving-balance').innerText = savingAmount;
    document.getElementById('remaining-balance').innerText = remainingBalance;
};

function verifyPin() {
    const pin1 = document.getElementById('food-input').value;
    const pin2 = document.getElementById('rent-input').value;
    const pin3 = document.getElementById('clothes-input').value;
    const pin4 = document.getElementById('tutal-input').value;
    const pin5 = document.getElementById('saving-input').value;
    if (typeof pin, pin2, pin3, pin4, pin5 == '') {
        const failError = document.getElementById('notify-fail');
        failError.style.display = 'block';
    }
    else {
        const failError1 = document.getElementById('notify-success');
        failError1.style.display = 'block';
    }

    const addBalance = pin1 + pin2 + pin3;
    if (addBalance > pin4) {
        const failError2 = document.getElementById('less-money');
        failError2.style.display = 'block';
    }


}


