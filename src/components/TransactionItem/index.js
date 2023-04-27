// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'

class MoneyDetails extends Component {
  render() {
    const {eachMoney, onDelete} = this.props
    const {id, title, amount, type} = eachMoney

    const onDltBtnClick = () => {
      onDelete(id)
    }

    return (
      <li className="list-item">
        <div className="item">
          <p>{title}</p>
          <p>{amount}</p>
          <p>{type}</p>

          <button type="button" onClick={onDltBtnClick} data-testid="delete">
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
              alt="delete"
            />
          </button>
        </div>
        <hr />
      </li>
    )
  }
}
export default MoneyDetails
