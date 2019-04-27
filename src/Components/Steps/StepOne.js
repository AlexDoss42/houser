import React, { Component } from 'react'
import axios from 'axios'


export default class StepOne extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zipcode: ''
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
        <div className='stepOneInputs'>

          <input
            type='text'
            placeholder='Name of listing'
            name='name'
            onChange={e => this.handleChange(e)}
          />

          <input
            type='text'
            placeholder='Street Address'
            name='address'
            onChange={e => this.handleChange(e)}
          />

          <input
            type='text'
            placeholder='City'
            name='city'
            onChange={e => this.handleChange(e)}
          />

          <input
            type='text'
            placeholder='State'
            name='state'
            onChange={e => this.handleChange(e)}
          />

          <input
            type='text'
            placeholder='Zipcode'
            name='zipcode'
            onChange={e => this.handleChange(e)}
          />

        </div>
      </div>
    )
  }
}