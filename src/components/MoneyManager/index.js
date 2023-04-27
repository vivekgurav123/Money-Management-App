import {Component} from 'react'
import {v4} from 'uuid'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'
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
    moneyDetailsList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  onFormSubmit = ev => {
    const {amountInput, titleInput, optionId} = this.state
    ev.preventDefault()
    const typeOption = transactionTypeOptions.find(
      eachOption => eachOption.optionId === optionId,
    )
    const {displayText} = typeOption
    const newMoneyObj = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(prevState => ({
      moneyDetailsList: [...prevState.moneyDetailsList, newMoneyObj],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onTitleUpdate = ev => {
    this.setState({
      titleInput: ev.target.value,
    })
  }

  onAmountUpdate = ev => {
    this.setState({
      amountInput: ev.target.value,
    })
  }

  onSelectUpdate = ev => {
    this.setState({
      optionId: ev.target.value,
    })
  }

  onDelete = id => {
    const {moneyDetailsList} = this.state
    const filteredList = moneyDetailsList.filter(each => each.id !== id)
    this.setState({
      moneyDetailsList: filteredList,
    })
  }

  getExpences = () => {
    const {moneyDetailsList} = this.state
    let expenseAmount = 0
    moneyDetailsList.forEach(eachMoney => {
      if (eachMoney.type === transactionTypeOptions[1].displayText) {
        expenseAmount += eachMoney.amount
      }
    })

    return expenseAmount
  }

  getIncome = () => {
    const {moneyDetailsList} = this.state
    let incomeAmount = 0
    moneyDetailsList.forEach(eachMoney => {
      if (eachMoney.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachMoney.amount
      }
    })

    return incomeAmount
  }

  getBalance = () => {
    const {moneyDetailsList} = this.state
    let incomeAmount = 0
    let expenseAmount = 0
    let totalBalace = 0

    moneyDetailsList.forEach(eachMoney => {
      if (eachMoney.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachMoney.amount
      } else {
        expenseAmount += eachMoney.amount
      }
    })

    totalBalace = incomeAmount - expenseAmount
    return totalBalace
  }

  render() {
    const {amountInput, titleInput, type, moneyDetailsList} = this.state
    const getTotalBalance = this.getBalance()
    const getIncomeAmount = this.getIncome()
    const getExpencesAmount = this.getExpences()

    return (
      <div className="bg-container">
        <div className="container">
          <div className="top">
            <h1>Hi, Richard</h1>
            <p>
              Welcome back to your <span>Money Manager</span>
            </p>
          </div>
          <div className="Money-details">
            <MoneyDetails
              type={type}
              getTotalBalance={getTotalBalance}
              getIncomeAmount={getIncomeAmount}
              getExpencesAmount={getExpencesAmount}
            />
          </div>
          <div className="sections">
            <div className="sec1 form-element">
              <h1>Add Transaction</h1>
              <form className="form" onSubmit={this.onFormSubmit}>
                <label htmlFor="title">TITLE:</label>
                <br />
                <input
                  value={titleInput}
                  type="text"
                  id="title"
                  onChange={this.onTitleUpdate}
                  placeholder="TITLE"
                />
                <br />
                <label htmlFor="amount">AMOUNT:</label>
                <br />
                <input
                  value={amountInput}
                  type="text"
                  id="amount"
                  onChange={this.onAmountUpdate}
                  placeholder="AMOUNT"
                />
                <br />
                <label htmlFor="type">TYPE:</label>
                <br />
                <select
                  value={type}
                  name="type"
                  id="type"
                  onChange={this.onSelectUpdate}
                >
                  {transactionTypeOptions.map(each => (
                    <option
                      className="opt"
                      value={each.optionId}
                      key={each.optionId}
                    >
                      {each.displayText}
                    </option>
                  ))}
                </select>
                <br />
                <button type="submit">Add</button>
              </form>
            </div>
            <div className="sec1 sec2">
              <h1>History</h1>
              <div className="table1">
                <div className="table">
                  <p>Title</p>
                  <p>Amount</p>
                  <p>Type</p>
                  <p>Delete</p>
                </div>
                <hr />
                <ul className="transaction">
                  {moneyDetailsList.map(eachMoney => (
                    <TransactionItem
                      onDelete={this.onDelete}
                      key={eachMoney.id}
                      eachMoney={eachMoney}
                      type={type}
                      amount={amountInput}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
