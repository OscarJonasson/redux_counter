import Button from './Components/Button/Button.jsx';
import Circle from './Components/Circle/Circle';
import classes from './App.module.css';
import { useSelector } from 'react-redux';

function App() {
  const count = useSelector((state) => state.counter.value);
  return (
    <div className={classes.container}>
      <Circle number={count} />
      <div className={classes.buttons}>
        <Button text="Decrease 5" onClick="" />
        <Button text="Decrease 1" onClick="" />
        <Button text="Reset" onClick="" />
        <Button text="Increase 1" onClick="" />
        <Button text="Increase 5" onClick="" />
      </div>
    </div>
  );
}

export default App;
