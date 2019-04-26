import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import House from '../House/House'
import Axios from 'axios';

export default class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      houses: []
    }
  }

  componentDidMount(){
    Axios.get('/dashboard')
    .then(res => {
      this.setState({
        houses: res.data
      })
    })
    .catch(() => console.log(`Your axios.get for getAllHouses is not working`))
  }

  // getAllHouses () {
  //   Axios.get('/dashboard')
  //   .then(res => {
  //     this.setState({
  //       houses: res.data
  //     })
  //   })
  //   .catch(() => console.log(`Your axios.get for getAllHouses is not working`))
  // }

  render() {

    const { houses } = this.state
    // let displayHouses = houses.map((house, i) => {
    //   return (
    //       <House 
    //       key = {i}
    //       house = {house}/>
    //   )
    // })

    return (
      <div>
        <h1>Dashboard</h1>
        <Link to='/wizard'><button>Add New Property</button></Link>

        {houses.map((house, i) => {
          return (
            <House 
            key = {i}
            house = {house}/>
          )
        })}

      </div>
    )
  }
}