import './App.css';
import {useState, useRef} from 'react'

function App() {
const resultRef = useRef(null);
const inputRef = useRef(null);
const [result, resultSet] = useState(0);

const AddNumber = (e) => {
  e.preventDefault();
  resultSet((result) => result + Number(inputRef.current.value))
}

const SubtractNumber = (e) => {
  e.preventDefault();
  resultSet((result) => result - Number(inputRef.current.value));
}

const MutiplyNumber = (e) => {
  e.preventDefault();
  resultSet((result) => result * Number(inputRef.current.value));
}

const DivideNumber = (e) => {
  e.preventDefault();
  resultSet((result) => result / Number(inputRef.current.value));
}

const Reset = (e) => {
  e.preventDefault();
  inputRef.current.value = 0;
  resultSet(0)
}


  return (
    <div className="App">
      <h1>Calculator</h1>
      <form>
        <p ref={resultRef}>{result}</p>
        <input type="number" ref={inputRef} pattern="[0-9]" placeholder='Number'></input>
        <button onClick={AddNumber}>+</button>
        <button onClick={SubtractNumber}>-</button>
        <button onClick={MutiplyNumber}>*</button>
        <button onClick={DivideNumber}>/</button>
        <button onClick={Reset}>Reset</button>
      </form>
    </div>
  );
}

export default App;
