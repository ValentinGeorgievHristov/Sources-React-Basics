import {Component} from 'react'

class App extends Component{
  constructor(){
    super()
    this.state = {

    }
  }

  componentDidMount(){
      //GET the data i need to corectly display
  }

  componentWillReceivePro(nextProps){
         if (nextProps.whatever !==this.props.whatever){
           // do something important here
         }
  }

  shouldComponentUpdate(nextProps, nextState){
      //retutn true if want to update
      //return false if not
  }

  componentWillUnmount(){
      // remove event listener
      // reardown or cleanup your code before your component desappears(E.g. remove event listeners)
  }

  render(){
    return (
      <div>
        Code goes here
      </div>
    )
  }
}

export default App