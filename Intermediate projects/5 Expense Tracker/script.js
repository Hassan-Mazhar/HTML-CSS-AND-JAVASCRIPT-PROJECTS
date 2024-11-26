const expenseList = document.getElementById("expense-list");
const totalEl = document.getElementById("total");
let total = 0;

document.getElementById("add-btn").addEventListener("click", () => {
    const name = document.getElementById("expense-name").value;
    const amount = parseFloat(document.getElementById("expense-amount").value);

    if (!name || isNaN(amount) || amount <= 0) {
        alert("Please enter valid details.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = `${name}: $${amount}`;
    expenseList.appendChild(li);

    total += amount;
    totalEl.textContent = total.toFixed(2);

    document.getElementById("expense-name").value = "";
    document.getElementById("expense-amount").value = "";
});
