import * as React from "react";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";

const useOutsideClick = (ref, callback) => {
  React.useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  const handleOutsideClick = (event) => {
    // won't work for all the cases
    // if (ref.current.innerHTML !== event.target.innerHTML) {
    //   callback();
    // }

    // right solution
    if (!ref.current || !ref.current.contains(event.target)) {
      callback();
    }
  };
};

export default function App() {
  const centeredRef = React.useRef(null);

  useOutsideClick(centeredRef, () => {
    console.log("Clicked Outside");
    toast("Clicked Outside 🚀❤️‍🔥");
  });

  return (
    <div>
      <Toaster reverseOrder={true} />
      <div className='container'>
        <h1>useOutsideClick Custom Hook</h1>
        <div className='centered-box' ref={centeredRef}>
          <p>Click Outside To Show Toast</p>
        </div>
      </div>
    </div>
  );
}
