
import './App.css';

function App() {
  return (
    <div className = "App">
      <div className = "Mental Health">
        <h1>Mental Health Tracker</h1>

      </div>
      <form>
        <label for = "feeling">How do you feel today (1-10)</label>
        <input type = "number" id ="feeling" min = "1" max="10"></input>
        <input type = "submit" id = "result"></input>
      </form>
    </div>
  );
}

export default App;
