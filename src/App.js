import Button from './Components/Button/Button.jsx';
import Circle from './Components/Circle/Circle';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.container}>
      <Circle number="0" />
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
