// Get elements from the DOM
const balanceElement = document.getElementById('balance');
const textInput = document.getElementById('text');
const amountInput = document.getElementById('amount');
const transactionList = document.getElementById('transaction-list');

// Initialize balance
let balance = 0;

// Function to display balance
function updateBalance() {
    balanceElement.textContent = balance.toFixed(2);
}

// Function to add a new transaction
function addTransaction() {
    const text = textInput.value;
    const amount = parseFloat(amountInput.value);

    // Check if the inputs are valid
    if (text.trim() === '' || isNaN(amount)) {
        alert('Please enter valid text and amount');
        return;
    }

    // Create a new list item
    const listItem = document.createElement('li');

    // Determine the class based on income or expense
    const transactionType = amount < 0 ? 'expense' : 'income';
    const bgColor = transactionType === 'expense' ? '#ff7f7a' : '#acf8b0';
    
    listItem.className = transactionType;
    listItem.style.backgroundColor = bgColor;

    // Add HTML content to the list item
    listItem.innerHTML = `
        ${text} <span>${amount.toFixed(2)}</span>
        <button class="del-btn" onclick="removeTransaction(this)"><i class="fa fa-trash-o"></i></button>
    `;

    // Add the new transaction to the list
    transactionList.appendChild(listItem);

    // Update the balance
    balance += amount;
    updateBalance();

    // Clear the input fields
    textInput.value = '';
    amountInput.value = '';

}

// Function to remove a transaction
function removeTransaction(button) {
    const listItem = button.parentNode;
    const amount = parseFloat(listItem.querySelector('span').textContent);
    
    // Remove the transaction from the list
    listItem.remove();

    // Update the balance
    balance -= amount;
    updateBalance();
}
