document.addEventListener('DOMContentLoaded', () => {
   const expenseForm = document.getElementById('expense-form');
   const expenseNameInput = document.getElementById('expense-name');
   const expenseAmountInput = document.getElementById('expense-amount');
   const expenseList = document.getElementById('expense-list');
   const totalAmountDisplay = document.getElementById('total-amount');

let expenses = JSON.parse(localStorage.getItem('expenses')) || []
let totalAmount = calculateTotal()

renderExpenses()

expenseForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = expenseNameInput.value.trim()
    // console.log(expenseNameInput.value.trim())
    const amount = parseFloat(expenseAmountInput.value.trim())

    // check the condition for user types string input then create new expense object and push it to expense array :
    if(name !== "" && !isNaN(amount) && amount > 0) {
        const newExpense = {
            id: Date.now(),
            name: name,
            amount: amount
        }
        expenses.push(newExpense)
        saveExpensesTolocalStorage()
        renderExpenses()
        updateTotal()

        // clear the input :
        expenseNameInput.value = "";
        expenseAmountInput.value = ""
    } 
})

function renderExpenses() {
  expenseList.innerHTML = ""
  expenses.forEach(expense => {
   const liTag = document.createElement('li')
   liTag.innerHTML = ` ${expense.name} - $${expense.amount}
   <button data-id="${expense.id}">Delete</button>`;
   expenseList.appendChild(liTag)
  })  
}


function calculateTotal() {
return expenses.reduce((sum, expense) => sum+expense.amount, 0)
}

function saveExpensesTolocalStorage() {
    localStorage.setItem('expenses', JSON.stringify(expenses))
}

function updateTotal() {
    totalAmount = calculateTotal()
    totalAmountDisplay.textContent = totalAmount.toFixed(2)
}

// delete button working :

expenseList.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON') {
        const expenseId = parseInt(e.target.getAttribute('data-id'))
    expenses = expenses.filter(expense => expense.id !== expenseId)

    saveExpensesTolocalStorage()
    renderExpenses()
    updateTotal()
    }
})

})