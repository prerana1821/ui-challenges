import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import useKeyPress from "./useKeyPress";
import "./App.css";

export default function App() {
  const shiftKey = useKeyPress("Shift");
  const enterKey = useKeyPress("Enter");

  useEffect(() => {
    if (shiftKey && enterKey) {
      showToast();
    }
  }, [shiftKey, enterKey]);

  const showToast = () => {
    toast.success(`Hello world!`);
  };

  return (
    <div>
      <Toaster position='top-center' reverseOrder={false} />
      <div className='container'>
        <h1>useKeyPress Custom Hook</h1>
        <h1>Shift + Enter</h1>
        <p>Hit Shift + Enter to show a toast! 🎉</p>
      </div>
    </div>
  );
}
