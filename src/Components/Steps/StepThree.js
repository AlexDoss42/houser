import React, { Component } from 'react'
import axios from 'axios'


export default class StepThree extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mortgage: '',
      rent: ''
    }
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  //HOW THE EFF DOES THIS WORK!!!

  handleClick = () => {
    let newHouse = this.state
    this.addListing(newHouse)
  }

  addListing = (newHouse) => {

    axios.post('/wizard', newHouse)
      .then(res => {
        this.setState({
          houses: res.data
        })
      }).catch(err => console.log('You are having an issue with your AddListing function in Wizard.js', err))
  }


  render() {
    return (

      <div>
        <div className='stepTwoInputs'>

          <input
            type='decimal'
            placeholder='Mortgage'
            name='mortgage'
            onChange={e => this.handleChange(e)}
          />

          <input
            type='decimal'
            placeholder='Desired Rent'
            name='rent'
            onChange={e => this.handleChange(e)}
          />

          <button 
          onClick={this.handleClick}>Complete</button>

        </div>
      </div>
    )
  }
}