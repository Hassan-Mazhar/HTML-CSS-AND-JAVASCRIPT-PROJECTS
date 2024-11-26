const API_URL = "https://api.exchangerate-api.com/v4/latest/";

document.getElementById("convert-btn").addEventListener("click", async () => {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("from-currency").value;
    const toCurrency = document.getElementById("to-currency").value;
    const resultEl = document.getElementById("result");

    if (isNaN(amount) || amount <= 0) {
        resultEl.textContent = "Please enter a valid amount.";
        return;
    }

    try {
        const response = await fetch(`${API_URL}${fromCurrency}`);
        const data = await response.json();
        const rate = data.rates[toCurrency];
        const convertedAmount = (amount * rate).toFixed(2);
        resultEl.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    } catch (error) {
        resultEl.textContent = "Error fetching exchange rates. Please try again.";
    }
});
