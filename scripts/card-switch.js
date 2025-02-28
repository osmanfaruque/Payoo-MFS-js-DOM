// add money section
document.getElementById("add-money-section-btn").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("add-money-section").style.display = "block";
    document.getElementById("cashout-section").style.display = "none";
    document.getElementById("transfer-money-section").style.display = "none";
    document.getElementById("get-bonus-section").style.display = "none";
    document.getElementById("pay-bill-section").style.display = "none";
    document.getElementById("transaction-history-section").style.display = "none";
});

// cashout section
document.getElementById("cashout-section-btn").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("add-money-section").style.display = "none";
    document.getElementById("cashout-section").style.display = "block"; 
    document.getElementById("transfer-money-section").style.display = "none";
    document.getElementById("get-bonus-section").style.display = "none";
    document.getElementById("pay-bill-section").style.display = "none";
    document.getElementById("transaction-history-section").style.display = "none";
}); 

// transfer money section
document.getElementById("transfer-money-section-btn").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("add-money-section").style.display = "none";
    document.getElementById("cashout-section").style.display = "none";
    document.getElementById("transfer-money-section").style.display = "block";
    document.getElementById("get-bonus-section").style.display = "none";
    document.getElementById("pay-bill-section").style.display = "none";
    document.getElementById("transaction-history-section").style.display = "none";
});

// get bonus section
document.getElementById("get-bonus-section-btn").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("add-money-section").style.display = "none";
    document.getElementById("cashout-section").style.display = "none";
    document.getElementById("transfer-money-section").style.display = "none";
    document.getElementById("get-bonus-section").style.display = "block";
    document.getElementById("pay-bill-section").style.display = "none";
    document.getElementById("transaction-history-section").style.display = "none";
});

// pay bill section
document.getElementById("pay-bill-section-btn").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("add-money-section").style.display = "none";
    document.getElementById("cashout-section").style.display = "none";
    document.getElementById("transfer-money-section").style.display = "none";
    document.getElementById("get-bonus-section").style.display = "none";
    document.getElementById("pay-bill-section").style.display = "block";
    document.getElementById("transaction-history-section").style.display = "none";
});

// transaction history section
document.getElementById("transaction-history-section-btn").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("add-money-section").style.display = "none";
    document.getElementById("cashout-section").style.display = "none";
    document.getElementById("transfer-money-section").style.display = "none";
    document.getElementById("get-bonus-section").style.display = "none";
    document.getElementById("pay-bill-section").style.display = "none";
    document.getElementById("transaction-history-section").style.display = "block";
});





