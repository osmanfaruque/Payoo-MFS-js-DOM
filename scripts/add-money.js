document.getElementById('add-money-btn').addEventListener('click', function(event) {
    event.preventDefault();
    // catching existing balance
    const balance = document.getElementById("balance").innerText;
    const convertedBalance = parseInt(balance);
    // catching account number
    const accountNumber = document.getElementById("account-number").value;
    const convertedAccountNumber = parseInt(accountNumber);
    // catching amount
    const amount = document.getElementById("amount-to-add").value;
    const convertedAmount = parseInt(amount);
    // catching pin
    const pin = document.getElementById("pin").value;
    const convertedPin = parseInt(pin);
    // checking pin
    if(convertedPin!==1234){
        alert("Please enter a valid pin");
    }
    // adding money
    else{
        const sum = convertedBalance + convertedAmount;
        document.getElementById("balance").innerText = sum;
        alert("Money added successfully, convertedBalance: " + sum);
    }
});
