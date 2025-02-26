// step = 1 btn-ID ke dhorsi getElementById diyee
document.getElementById("login-btn").addEventListener("click",function(event) {
    event.preventDefault();
    const mobileNumber = document.getElementById("mobile-number").value;
    const pin = document.getElementById("pin").value;
    if (mobileNumber.startsWith('0') && mobileNumber.length === 11) {
        if(pin.length === 4){
            window.location.href = "main.html";
        }
        else{
            alert("Please enter a valid PIN");
        }
    } else {
        alert("Please enter a valid mobile number");
    }
})
