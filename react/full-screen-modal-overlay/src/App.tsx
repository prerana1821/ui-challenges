import * as React from "react";
import "./App.css";
import Modal from "./Modal";

export default function App() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div>
      <div className='container'>
        <h1>Full Screen Modals </h1>

        <button className='button' onClick={() => setShowModal(!showModal)}>
          Show Modal
        </button>
      </div>
      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  );
}
