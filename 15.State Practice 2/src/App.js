import { Component } from 'react'

class App extends Component{
  constructor(){
    super()
    this.state = {
      isLoggedIn : true
    }
  }

  render(){
    return(
      <h1>You are currently logged {this.state.isLoggedIn? "in": "out"}</h1>
    )
  }
}

export default App