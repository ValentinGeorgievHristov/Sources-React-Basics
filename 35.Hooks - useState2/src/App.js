import { useState} from 'react';

const App = () => {

const [state, setState] = useState({
    count: 11,
    step:1,
});

const onCounterButtonClickHandler = () => {
    setState(oldState => ({...oldState, count: oldState.count + oldState.step}));
}

const onStepSelectChangeHandler = (e) => {
    const stepValue = Number(e.target.value);

    setState(oldState => ({...oldState, step:stepValue }));
}

return(
    <div>
        <h1>Counter</h1>
        <div>{state.count}</div>
        <button onClick={onCounterButtonClickHandler}>Increment</button>
        <label htmlFor="step">Step</label>
        <select name="step" id="step" onChange={onStepSelectChangeHandler}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
    </div>
)
}

export default App;

   //setState(oldState => ({...oldState, count: oldState.count + oldState.step}))

// useEffect(() => {
// fetch('https://swapi.dev/api/people/1')
//      .then( res => res.json())
//      .then(result => setCharactrer(result))
// },[])