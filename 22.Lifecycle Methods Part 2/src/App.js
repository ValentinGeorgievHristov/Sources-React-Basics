import {Component} from 'react'

class TodoList extends Component{
  constructor(){
    super()
    this.state = {

    }
  }

  static getDerivedStateFromProps(props, state){
     //return the new, updated stated based upon the props
     // https://reactjs.org/blog/2018/0607/you-probably-dont-need-derived-state.html
  }

  getSnapshotBeforeUpdate(){
    // create a backup pg yje current way things are
  }

//   componentWillMount(){
//     //GET the data i need to corectly display
// }

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

  componentWillUpdate(){
    
  }

  componentWillUnmount(){
      
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