let balance = 0;

function updateBalance() {
    document.getElementById('balance').innerText = `Balance: $${balance}`;
}

function deposit() {
    const amount = prompt('Enter desired amount:');
    if (amount !== null && !isNaN(amount) && amount !== '') {
        balance += parseFloat(amount);
        updateBalance();
    }
}

function withdraw() {
    const amount = prompt('Enter desired amount to withdraw:');
    if (amount !== null && !isNaN(amount) && amount !== '') {
        if (parseFloat(amount) <= balance) {
            balance -= parseFloat(amount);
            updateBalance();
            alert(`You have withdrawn $${amount}`);
        } else {
            alert('Insufficient funds');
        }
    }
}

function disconnect() {
    balance = 0;
    updateBalance();
    alert('You have been disconnected. Your balance is discharged.');
}
updateBalance();
