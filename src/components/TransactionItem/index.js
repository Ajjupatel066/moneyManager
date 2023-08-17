// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onClickDeleteTransaction = () => {
    deleteTransaction(id)
  }

  return (
    <li className="transaction-details-container">
      <p className="transaction-details">{title}</p>
      <p className="transaction-details">Rs {amount}</p>
      <p className="transaction-details">{type}</p>
      <button
        type="button"
        className="delete-btn"
        onClick={onClickDeleteTransaction}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default TransactionItem
