import React from 'react'
import Joke from './Joke'

function App(){
    return(
        <div>
           <Joke
             punchLine="It`s hard to explain puns to kleptomaniacs because they always take things literally"
           />

           <Joke
             question="What`s is the best thing about Switzerland?"
             punchLine="I don`t know, but the flag is a big plus!"
           />

            <Joke
             question="Did you hear about the mathematican who`s afraid of negative numbers?"
             punchLine="He`ll stop at nothing to avoid them"
           />

           <Joke
           question="Hear about new restaurant called Karma?"
           punchLine="There`s no menu: You get what you deserve."
           />
           
           <Joke
           question="Did you hear about the actor who fell through the floorboards?"
           punchLine="He was just going throught a stage."
           />
           
           <Joke
           question="Did you hear about the cloustropfobic astronaut?"
           punchLine="He just needed a little space"
           />
        </div>
    )
}

export default App