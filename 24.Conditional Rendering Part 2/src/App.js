import React, {Component} from 'react'
import Conditional from './Conditional'

class App extends Component{
  constructor(){
    super()
    this.state  = {
      unreadMessages: ['a', 'b']
    }
      // "Call your mom",
      // "New spam email available. All links are definitely safe to click."
    
  }
// &&
// true && false
render(){
  return(
    <div>  
      {
        this.state.unreadMessages.length > 0 &&
        <h2>You have {this.state.unreadMessages.length} unread messages</h2>
      } 
      <Conditional />
   </div>
  )
 }
}
export default App