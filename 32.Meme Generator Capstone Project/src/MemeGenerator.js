import {Component} from 'react';
import './MemeGenerator.css';


class MemeGenerator extends Component{
    constructor(){
        super()
        this.state={
            topText:"",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then (response => response.json())
        .then (response => {
            const {memes} = response.data
            console.log(memes[0])
            this.setState({ allMemeImgs: memes })
        })
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange(event){
       const {name, value} = event.target
       this.setState({ [name]: value })
    }

    handleSubmit(event){
        event.preventDefault()
        const rundNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[rundNum].url
        this.setState({ randomImg: randMemeImg})
    }

    render(){
        return(
           <div>
               <form className="meme-form" onSubmit={this.handleSubmit}>
                   <input
                      type="text"
                      name="topText"
                      placeholder="Top Text"
                      value={this.state.topText}
                      onChange={this.handleChange}
                    />
                    <input
                      type="text"
                      name="bottomText"
                      placeholder="Top Text"
                      value={this.state.bottomText}
                      onChange={this.handleChange}
                    />

               <button>Gen</button>
               </form>
               <div className="divDiv">
                   <img src={this.state.randomImg} alt=""/>
                   <h2 className="top">{this.state.topText}</h2>
                   <h2 className="bottom">{this.state.bottomText}</h2>
               </div>
           </div>
        )
    }
}


export default MemeGenerator

