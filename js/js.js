

const calculatedButton = document.getElementById('calculate-button');
calculatedButton.addEventListener('click', function () {
    // food 
    const foodInputA = document.getElementById('food-input');
    const foodInputText = foodInputA.value;
    const foodInput = parseInt(foodInputText);
    foodInputA.value = '';
    //rent area
    const rentInputA = document.getElementById('rent-input');
    const rentInputText = rentInputA.value;
    const rentInput = parseInt(rentInputText);
    rentInputA.value = '';

    //clothes area
    const clothesInputA = document.getElementById('clothes-input');
    const clothesInputText = clothesInputA.value;
    const clothesInput = parseInt(clothesInputText);
    clothesInputA.value = '';
    //tutal balance
    const tutalBalanceA = document.getElementById('tutal-balance');
    const tutalBalanceText = tutalBalanceA.value;
    tutalBalance = parseInt(tutalBalanceText);
    tutalBalanceA.value = '';
    //Expenses sum
    const tutalCost = foodInput + rentInput + clothesInput;
    console.log(tutalBalance);

    // expensive add
    const expensiveTutal = document.getElementById('expenses-balance');
    const expensesTutalText = expensiveTutal.innerText;
    const expensesTutalTextA = parseInt(expensesTutalText);
    expensiveTutal.innerText = tutalCost;

    //main b
    //extra balance
    const extraBlanacne = document.getElementById('extra-balance');
    const extraBlanacneText = extraBlanacne.innerText;
    const extraBlanacneTextA = parseInt(extraBlanacneText);
    extraBlanacne.innerText = tutalBalance - tutalCost;
})