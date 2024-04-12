import Lightbox from "./Lightbox";
import "./App.css";

export default function App() {
  return (
    <div>
      <div className='container'>
        <h1 data-testid='cypress-title'>Lightbox Gallery</h1>
        <Lightbox />
      </div>
    </div>
  );
}
