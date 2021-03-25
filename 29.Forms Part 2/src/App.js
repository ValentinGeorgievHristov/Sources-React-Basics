import {Component} from 'react'

//Formik - БИБЛИОТЕКА ЗА ФОРМИ

class App extends Component{
  constructor(){
    super()
    this.state = {
      firstName:"",
      lastName:"",
      isFriendly: false,
      gender:"",
      favColor:"",
    }
    this.handleChange=this.handleChange.bind(this)
  }

  handleChange(event){
    const {name,value, type, checked} = event.target
    type==="checkbox"? this.setState({[name]: checked}) : this.setState({[name]: value})
  }

  render(){
    return(
        //  <div>
            <form onSubmit={this.handleSubmit}>  
              <input
                 type="text"
                 value={this.state.firstName} 
                 name="firstName" 
                 placeholder="First Name" 
                 onChange={this.handleChange}
              />
              <br />
              <input
                 type="text"
                 value={this.state.lastName}
                 name="lastName" 
                 placeholder="Last Name"
                 onChange={this.handleChange}
              />          
              
            <textarea
             value={"Some default value"}
             onChange={this.handleChange}
             /> 

            <br />

               <label>
               <input 
                  type="checkbox"
                  name="isFriendly"
                  checked={this.state.isFriendly}   
                  onChange={this.handleChange}
                  />Is friendly?
               </label>
              
               <label>
               <input 
                  type="radio"
                  name="gender"
                  value="male"
                  checked={this.state.gender === "male"}   
                  onChange={this.handleChange}
                  />Male
               </label>

               <br />

               <label>
               <input 
                  type="radio"
                  name="gender"
                  value="female"
                  checked={this.state.gender === "female"}   
                  onChange={this.handleChange}
                  />Female
               </label>
               
               <label>Favourite Color:</label>
                <select value={this.state.favColor}
                  onChange={this.handleChange}
                  name="favColor"
                 >
                  <option value="blue">Blue</option>
                  <option value="green">Green</option>
                  <option value="red">Red</option>
                  <option value="orange">Orange</option>
                  <option value="yellow">Yellow</option>
                </select>
              

               <h1>{this.state.firstName} {this.state.lastName}</h1>
               <h2>You are a {this.state.gender}</h2>
               <h2>Your favourite color is {this.state.favColor}</h2>
               <button>Submit</button>
             </form>
    )
  }
}

export default App

//Formik - БИБЛИОТЕКА