import classes from './Counter.module.css';
import {useSelector,useDispatch} from 'react-redux'
import { counteractions } from '../Store';



const Counter = () => {

const counter=useSelector(state=>state.counter);
const show=useSelector(state=>state.showCounter);
const dispatch=useDispatch();

const incrementhandler=()=>{
  dispatch(counteractions.increase(2));
}

const decrementhandler=()=>{
  dispatch(counteractions.decrease(2));
}

const incrementhandlerby5=()=>{
  dispatch(counteractions.increase(5));
}

const decrementhandlerby5=()=>{
  dispatch(counteractions.decrease(5));
}

  const toggleCounterHandler = () => {
    dispatch(counteractions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
    { show && <div>
        <button onClick={incrementhandler}>increment</button>
        <button onClick={decrementhandler}>decrement</button>
      </div>}
      { show && <div>
        <button onClick={incrementhandlerby5}>incrementby5</button>
        <button onClick={decrementhandlerby5}>decrementby5</button>
      </div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
