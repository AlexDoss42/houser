import React, {Component} from 'react'
import House from '../House/House'

export default class Dashboard extends Component {

  render() {
    return (
      <div>
        <h1>This is the Dashboard</h1>
        <House />
      </div>
    )
  }
}