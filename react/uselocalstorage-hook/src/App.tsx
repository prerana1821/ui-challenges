import * as React from "react";
import "./App.css";
import { useLocalStorage } from "./useLocalStorage";

export default function App() {
  const [selectedValue, setSelectedValue] = React.useState("");

  const [storedValue, setStoredValue] = useLocalStorage("mode", selectedValue);

  React.useEffect(() => {
    if (selectedValue.length !== 0) {
      setStoredValue(selectedValue);
    }
  }, [selectedValue]);

  return (
    <div className='container'>
      <h1>useLocalStorage</h1>

      <select
        className='minimal'
        name='mode'
        value={storedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
      >
        <option value='light'>light</option>
        <option value='dark'>dark</option>
      </select>

      <p>
        Value from local storage: <span className='value'>{storedValue}</span>
      </p>
    </div>
  );
}
