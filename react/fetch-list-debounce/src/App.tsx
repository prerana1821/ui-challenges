import "./App.css";
import CountriesList from "./components/CountriesList";

function App() {
  return (
    <div className='container'>
      <h1>Countries List with Debounce</h1>
      <CountriesList />
    </div>
  );
}

export default App;
