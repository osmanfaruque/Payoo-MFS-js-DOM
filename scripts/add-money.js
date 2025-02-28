document.getElementById('add-money-btn').addEventListener('click', function(event) {
    event.preventDefault();
    // catching existing balance
    const balance = document.getElementById("balance").innerText;
    const convertedBalance = parseInt(balance);
//    alert("convertedBalance: " + convertedBalance);//remove this later
    // catching account number
    const accountNumber = document.getElementById("account-number").value;
    const convertedAccountNumber = parseInt(accountNumber);
//   alert("convertedAccountNumber: " + convertedAccountNumber);//remove this later
    // catching amount
    const amount = document.getElementById("amount").value;
    const convertedAmount = parseInt(amount);
//    alert("convertedAmount: " + convertedAmount);//remove this later
    // catching pin
    const pin = document.getElementById("pin").value;
    const convertedPin = parseInt(pin);
//    alert("convertedPin: " + convertedPin);//remove this later
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
