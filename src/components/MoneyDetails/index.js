// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <div className="money-details-list">
      <div className="your-balance-card balance">
        <img
          alt="balance"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="img"
        />
        <div>
          <p className="money-details-heading">Your Balance</p>
          <p className="value" data-testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>

      <div className="your-balance-card income">
        <img
          alt="income"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="img"
        />
        <div>
          <p className="money-details-heading">Your Income</p>
          <p className="value" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>

      <div className="your-balance-card expenses">
        <img
          alt="expenses"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="img"
        />
        <div>
          <p className="money-details-heading">Your Expenses</p>
          <p className="value" data-testid="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
