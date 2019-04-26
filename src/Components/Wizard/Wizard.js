import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Wizard extends Component {
  constructor(props) {
    super(props)

    this.state ={
      name: '',
      address: '',
      city: '',
      zipcode: ''
    }
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }


  render() {
    return (

      <div>
        <h1>YOU'RE A WIZARD HARRY</h1>
        <Link to='/'><button>Cancel</button></Link>
        <div className='wizardInputs'>
          
          <input
          type='text'
          placeholder='Name of listing'
          name = 'name'
          onChange={e => this.handleChange(e)}
          />
           
           <input
          type='text'
          placeholder='Street Address'
          name = 'address'
          onChange={e => this.handleChange(e)}
          />
           
           <input
          type='text'
          placeholder='City'
          name = 'city'
          onChange={e => this.handleChange(e)}
          />
           
           <input
          type='text'
          placeholder='Zipcode'
          name = 'zipcode'
          onChange={e => this.handleChange(e)}
          />
          
        </div>
      </div>
    )
  }
}