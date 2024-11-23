let totalDeposit = 0;
let totalWithdraw = 0;
let balance = 0;

function deposit() {
    const depositAmount = parseFloat(document.getElementById("depositAmount").value);
    if (!isNaN(depositAmount) && depositAmount > 0) 
        {
        totalDeposit += depositAmount;
        balance += depositAmount;
        updateUI();
        alert("deposit has been made");
       }
}

function withdraw() {
    const withdrawAmount = parseFloat(document.getElementById("withdrawAmount").value);
    if (!isNaN(withdrawAmount) && withdrawAmount > 0 && withdrawAmount <= balance) 
        {
        totalWithdraw += withdrawAmount;
        balance -= withdrawAmount;
        updateUI();
        alert("withdraw has been done");
       }
}

function updateUI() {
    document.getElementById("totalDeposit").innerText = `$${totalDeposit.toFixed(2)}`;
    document.getElementById("totalWithdraw").innerText = `$${totalWithdraw.toFixed(2)}`;
    document.getElementById("balance").innerText = `$${balance.toFixed(2)}`;
}
