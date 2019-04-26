import {createStore} from 'redux'

let initialState = {
  name: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  img: '',
  mortgage: '',
  rent: ''
}

function reducer(state = initialState, action) {
  switch (type) {


    default:
      return state;
  }
}

export default createStore(reducer)