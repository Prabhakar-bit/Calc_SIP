function calculate() {
    let principal = parseFloat(document.getElementById('principal').value);
    let sipAmount = parseFloat(document.getElementById('sipAmount').value);
    let interestRate = parseFloat(document.getElementById('interestRate').value);
    let timePeriod = parseFloat(document.getElementById('timePeriod').value);

    if (isNaN(principal) || isNaN(sipAmount) || isNaN(interestRate) || isNaN(timePeriod)) {
        alert('Please enter valid numbers for all fields.');
        return;
    }

    // Lumpsum calculation
    let lumpsumAmount = principal * Math.pow((1 + (interestRate / 100)), timePeriod);

    // SIP calculation
    let sipTotal = 0;
    let monthlyRate = (1 + (interestRate / 100)) ** (1 / 12) - 1;
    for (let i = 0; i < timePeriod * 12; i++) {
        sipTotal = (sipTotal + sipAmount) * (1 + monthlyRate);
    }

    document.getElementById('lumpsumResult').textContent = `Lumpsum amount: ₹ ${lumpsumAmount.toFixed(2)}`;
    document.getElementById('sipResult').textContent = `Total amount through SIP: ₹ ${sipTotal.toFixed(2)}`;
}
