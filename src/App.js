import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { ReduxContext } from './into/ReduxContext';
import { increment_counter,decrement_counter } from './into/action';
import Todo from './into/Todo';
import Counter from './into/Counter';

function App() {
  // const {getState,dispatch}=useContext(ReduxContext)
  // console.log(getState())
  // const {counter}=getState()

  
  return (
    <div className="App">
      <Counter/>
      <Todo/>
    </div>
  );
}

export default App;
