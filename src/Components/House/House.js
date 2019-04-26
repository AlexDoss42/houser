import React, { Component } from 'react'


export default class House extends Component {

  render() {
    return (
      <div>

        <div className='houseTile'>
          <img
            style={{ maxHeight: '300px' }}
            src={this.props.house.img}
            alt={this.props.house.name} />
          <h1>{this.props.house.name}</h1>
          <h3>Address: {this.props.house.address}</h3>
          <h3>City: {this.props.house.city}</h3>
          <h3>State: {this.props.house.state}</h3>
          <h3>Zipcode: {this.props.house.zip}</h3>
          <h3>List Price: ${this.props.house.mortgage}</h3>
          <h3>Rent: ${this.props.house.rent}</h3>
          <button>Delete</button>
        </div>

      </div>
    )
  }
}