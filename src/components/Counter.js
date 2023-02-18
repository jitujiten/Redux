import classes from './Counter.module.css';
import {useSelector,useDispatch} from 'react-redux'

const Counter = () => {

const counter=useSelector(state=>state.counter);
const dispatch=useDispatch();

const incrementhandler=()=>{
  dispatch({type:"increment"});
}

const decrementhandler=()=>{
  dispatch({type:"decrement"});
}

const incrementhandlerby5=()=>{
  dispatch({type:"incrementby5"});
}

const decrementhandlerby5=()=>{
  dispatch({type:"decrementby5"});
}

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementhandler}>increment</button>
        <button onClick={decrementhandler}>decrement</button>
      </div>
      <div>
        <button onClick={incrementhandlerby5}>incrementby5</button>
        <button onClick={decrementhandlerby5}>decrementby5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
