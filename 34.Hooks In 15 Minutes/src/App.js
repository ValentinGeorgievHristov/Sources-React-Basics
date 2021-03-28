// import React, { useState } from 'react';

// function countInitial(){
//     console.log('run function');
//     return 4
// }

// function App(){
//     const [count, setCount] = useState(countInitial())    // това ще бъде дефаутната стойност, която залагаме
    
//     function decrementCount(){
//         setCount(prevCount => prevCount - 1)
//     }

//     function IncrementCount(){
//         setCount(prevCount => prevCount + 1)
//     }

//     return(
//         <>
//         <button onClick={decrementCount}>-</button>
//             <span>{count}</span>
//         <button onClick={IncrementCount}>+</button>
//         </>
//     )
// }

// export default App;

// ------------------------------------------------------

// import React, { useState } from 'react';

// function App(){
//     const [state, setState] = useState({count:4, theme:'blue'})    // това ще бъде дефаутната стойност, която залагаме
//     const count = state.count
//     const theme = state.theme

//     function decrementCount(){
//         setState(prevState => {
//             return {...prevState, count: prevState.count - 1}
//         })
//     }

//     function IncrementCount(){
//         // setCount(prevCount => prevCount + 1)
//     }

//     return(
//         <>
//         <button onClick={decrementCount}>-</button>
//             <span>{count}</span>
//             <span>{theme}</span>
//         <button onClick={IncrementCount}>+</button>
//         </>
//     )
// }

// export default App;

// ------------------------------------------------------

import React, { useState } from 'react';

function App(){
    const [count, setCount] = useState(4)    // това ще бъде дефаутната стойност, която залагаме
    const [theme, setTheme] = useState('blue')

    function decrementCount(){
        setCount(prevCount => prevCount-1)
    }

    function IncrementCount(){
        setCount(prevCount => prevCount + 1)
        setTheme('red')
    }

    return(
        <>
        <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <span>{theme}</span>
        <button onClick={IncrementCount}>+</button>
        </>
    )
}

export default App;