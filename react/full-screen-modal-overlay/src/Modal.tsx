import * as React from "react";

export default function Modal({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className='full-screen-modal' onClick={() => setShowModal(false)}>
      <div
        className='modal-container'
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <h1>Hello from Modal</h1>
        <button
          className='button'
          onClick={() => {
            setShowModal(false);
          }}
        >
          Close Modal
        </button>
      </div>
    </div>
  );
}
