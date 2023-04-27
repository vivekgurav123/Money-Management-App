// Write your code here
import {Component} from 'react'
import './index.css'

class MoneyDetails extends Component {
  render() {
    const {getTotalBalance, getIncomeAmount, getExpencesAmount} = this.props
    return (
      <>
        <div className="items">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
          />
          <div>
            <p>Your Balance</p>
            <p className="balance" data-testid="balanceAmount">
              RS {getTotalBalance}
            </p>
          </div>
        </div>
        <div className="items">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
            alt="income"
          />
          <div>
            <p>Your Income</p>
            <p className="balance" data-testid="incomeAmount">
              RS {getIncomeAmount}
            </p>
          </div>
        </div>
        <div className="items">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
          />
          <div>
            <p>Your Expenses</p>
            <p className="balance" data-testid="expensesAmount">
              RS {getExpencesAmount}
            </p>
          </div>
        </div>
      </>
    )
  }
}
export default MoneyDetails
