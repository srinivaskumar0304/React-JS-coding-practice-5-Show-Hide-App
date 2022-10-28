// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    firstCard: false,
    lastCard: false,
  }

  firstName = () => {
    const {firstCard} = this.state
    this.setState(() => ({
      firstCard: !firstCard,
    }))
  }

  lastName = () => {
    const {lastCard} = this.state
    this.setState(() => ({
      lastCard: !lastCard,
    }))
  }

  render() {
    const {firstCard, lastCard} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="button-container">
            <button className="button" type="button" onClick={this.firstName}>
              Show/Hide Firstname
            </button>
            {firstCard ? <p className="name">Joe</p> : ''}
          </div>
          <div className="button-container">
            <button className="button" type="button" onClick={this.lastName}>
              Show/Hide Lastname
            </button>
            {lastCard ? <p className="name">Jonas</p> : ''}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
