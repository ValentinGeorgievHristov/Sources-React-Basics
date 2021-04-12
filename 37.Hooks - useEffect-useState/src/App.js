import { useState, useEffect} from 'react';

const App = () => {
 
const [userId, setUserId] = useState(1);
const [user,setUser] = useState({name: 'Nobody'});

useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
       .then(response => response.json())
       .then(result => setUser(result))
    },[userId]);

const onUserIdIncrement = () => {
    setUserId(userId => userId + 1);
};

const onUserIdSelectChangeHandler = (e) => {
    const stepValueIdChange = Number(e.target.value);

     setUserId(stepValueIdChange);
}

return(
    <div>
       {
        userId <=10 ? 
        <h1>{user.name}'s Counter</h1> : `No user with id ${userId}`
        } 
        <button onClick={onUserIdIncrement}>Increment</button>
        <select name="step" id="step" onChange={onUserIdSelectChangeHandler}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            
       
        </select>

    </div>
)
}

export default App;
