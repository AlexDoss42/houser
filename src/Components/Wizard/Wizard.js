import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default class Wizard extends Component {
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

  handleClick() {
    // let newHouse = this.state
    console.log('Handle Click is working')
    // this.addListing(newHouse)
  }

  addListing = (newHouse) => {
    const { name, address, city, state, zip } = this.state

    axios.post('/wizard', newHouse)
      .then(res => {
        this.setState({
          name: name,
          address: address,
          city: city,
          state: state,
          zipcode: zip
        })
        console.log('you added a new listing')
      }).catch(err => console.log('You are having an issue with your AddListing function in Wizard.js', err))
  }


  render() {
    return (

      <div>
        <h1>YOU'RE A WIZARD HARRY</h1>
        <Link to='/dashboard'><button>Cancel</button></Link>
        <div className='wizardInputs'>

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

          <button 
          onClick={this.handleClick}>Complete</button>

        </div>
      </div>
    )
  }
}