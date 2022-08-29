import Button from './Components/Button/Button.jsx';
import Circle from './Components/Circle/Circle';
import classes from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectCount } from './features/counter/CounterSlice';
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  decrementByAmount,
} from './features/counter/CounterSlice';

function App() {
  // same as CounterSlice export selectCount
  const count = useSelector(selectCount);
  // const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div className={classes.container}>
      <Circle number={count} />
      <div className={classes.buttons}>
        <Button
          text="Decrease 5"
          onClick={() => {
            dispatch(decrementByAmount(5));
          }}
        />
        <Button
          text="Decrease 1"
          onClick={() => {
            dispatch(decrement());
          }}
        />
        <Button
          text="Reset"
          onClick={() => {
            dispatch(reset());
          }}
        />
        <Button
          text="Increase 1"
          onClick={() => {
            dispatch(increment());
          }}
        />
        <Button
          text="Increase 5"
          onClick={() => {
            dispatch(incrementByAmount(5));
          }}
        />
      </div>
    </div>
  );
}

export default App;
