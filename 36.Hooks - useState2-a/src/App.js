import { useState, useEffect} from 'react';

const App = () => {

const [count, setCount] = useState(1)    
const [step, setStep] = useState(1);
const [character,setCharacter] = useState({name: 'Nobody'});

useEffect(() => {
    fetch(`https://swapi.dev/api/people/${step}`)
        .then(res => res.json())
        .then(result => setCharacter(result))
},[step]);

const onCounterButtonClickHandler = () => {
    //setState(oldState => ({...oldState, count: oldState.count + oldState.step}));
    setCount(oldState => oldState + step);
};

const onStepSelectChangeHandler = (e) => {
    // const stepValue = Number(e.target.value);

    // setState(oldState => ({...oldState, step:stepValue }));
    setStep(step.value);
}

return(
    <div>
        <h1>{character.name}'s Counter</h1>
        <div>{count}</div>
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