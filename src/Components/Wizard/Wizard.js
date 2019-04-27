import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import StepOne from '../Steps/StepOne'
import StepTwo from '../Steps/StepTwo'
import StepThree from '../Steps/StepThree'

export default class Wizard extends Component {

  render() {
    return (

      <div>
        <h1>YOU'RE A WIZARD HARRY</h1>
        <Link to='/dashboard'><button>Cancel</button></Link>
        <Switch>

          <Route path ='/wizard/step1' component={StepOne}/>
          <Route path ='/wizard/step2' component={StepTwo}/>
          <Route path ='/wizard/step3' component={StepThree}/>
        
        </Switch>
       
      <div className='navBtns'>

        <button>Previous</button>
        <button>Next</button>
      
      </div>

      </div>
    )
  }
}