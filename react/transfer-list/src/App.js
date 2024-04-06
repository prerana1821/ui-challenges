import "./App.css";
import { TransferList } from "./TransferList";

export default function App() {
  return (
    <div>
      <div className='main-container w-full'>
        <h1 className='text-xl font-bold'>Transfer List</h1>
        <TransferList />
      </div>
    </div>
  );
}
