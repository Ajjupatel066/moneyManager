import {Component} from 'react'
import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    transactionsList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  deleteTransaction = transactionId => {
    const {transactionsList} = this.state
    const filteredTransactionsList = transactionsList.filter(
      eachTransaction => eachTransaction.id !== transactionId,
    )

    this.setState({transactionsList: filteredTransactionsList})
  }

  addTransactionAmount = event => {
    event.preventDefault()

    const {titleInput, amountInput, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    const {displayText} = typeOption

    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeTypeValue = event => {
    this.setState({optionId: event.target.value})
  }

  getExpenses = () => {
    const {transactionsList} = this.state
    let expensesAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })
    return expensesAmount
  }

  getIncome = () => {
    const {transactionsList} = this.state
    let incomeAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })
    return incomeAmount
  }

  getBalance = () => {
    const {transactionsList} = this.state
    let incomeAmount = 0
    let balanceAmount = 0
    let expensesAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount

    return balanceAmount
  }

  render() {
    const {titleInput, amountInput, optionId, transactionsList} = this.state
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()

    return (
      <div className="bg-container">
        <div className="responsive-container">
          <div className="welcome-container">
            <h1 className="greeting-title">Hi, Richard</h1>
            <p className="greeting-description">
              Welcome back to your
              <span className="greeting-heading">Money Manager</span>
            </p>
          </div>
          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expensesAmount={expensesAmount}
          />
          <div className="transaction-heading-container">
            <form className="form" onSubmit={this.addTransactionAmount}>
              <h1 className="form-heading">Add Transaction</h1>
              <label htmlFor="title" className="label">
                TITLE
              </label>
              <input
                id="title"
                type="text"
                value={titleInput}
                className="form-input"
                placeholder="TITLE"
                onChange={this.onChangeTitleInput}
              />

              <label htmlFor="amount" className="label">
                AMOUNT
              </label>
              <input
                id="amount"
                value={amountInput}
                type="text"
                className="form-input"
                placeholder="AMOUNT"
                onChange={this.onChangeAmountInput}
              />

              <label htmlFor="select" className="label">
                TYPE
              </label>
              <select
                className="dropdown-list"
                id="select"
                value={optionId}
                onChange={this.onChangeTypeValue}
              >
                {transactionTypeOptions.map(eachType => (
                  <option value={eachType.optionId} key={eachType.optionId}>
                    {eachType.displayText}
                  </option>
                ))}
              </select>
              <button className="add-btn" type="submit">
                Add
              </button>
            </form>
            <div className="history">
              <h1 className="history-heading">History</h1>
              <ul className="transaction-list">
                <li className="headings-container">
                  <p className="columns-headings">Title</p>
                  <p className="columns-headings">Amount</p>
                  <p className="columns-headings">Type</p>
                </li>
                {transactionsList.map(eachTransaction => (
                  <TransactionItem
                    key={eachTransaction.id}
                    transactionDetails={eachTransaction}
                    deleteTransaction={this.deleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
