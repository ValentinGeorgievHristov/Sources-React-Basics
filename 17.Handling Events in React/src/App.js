// function App(){
//   return(
//     <div>
//     <img src="https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png" alt="pic"/>
//     <br />
//     <br />
//     <button onClick={() => console.log('Use the force')}>Click me</button>
//   </div>
//   )
// }

// export default App

function handleClick(){
  console.log('Use the force')
}

function App(){
  return(
    <div>
    <img onMouseOver={() => {console.log('Hovered')}} src="https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png" alt="pic"/>
    <br />
    <br />
    <button onClick={handleClick}>Click me</button>
  </div>
  )
}

export default App