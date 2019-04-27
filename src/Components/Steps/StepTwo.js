import React, { Component } from 'react'
import axios from 'axios'


export default class StepTwo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      img: ''
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
            type='text'
            placeholder='Image URL'
            name='img'
            onChange={e => this.handleChange(e)}
          />

        </div>
      </div>
    )
  }
}