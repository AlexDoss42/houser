import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import House from '../House/House'
import axios from 'axios';

export default class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      houses: []
    }
  }

  componentDidMount(){
    axios.get('/dashboard')
    .then(res => {
      this.setState({
        houses: res.data
      })
    })
    .catch(() => console.log(`Your axios.get for getAllHouses is not working`))
  }

  //WHY THE **** do I have to do house.house.id???

  deleteListing = (house) => {
    axios.delete(`/dashboard/${house.house.id}`, house.house)
    .then(res => {
      this.setState({
        houses: res.data
      })
    })
    .catch(() => console.log(`You have an error at DeleteListing in Dashboard.js`))
  }

  render() {

    const { houses } = this.state

    return (
      <div>
        <h1>Dashboard</h1>
        <Link to='/wizard/step1'><button>Add New Property</button></Link>

        {houses.map((house, i) => {
          return (
            <House 
            key = {i}
            house = {house}
            deleteListing = {this.deleteListing}/>
          )
        })}

      </div>
    )
  }
}