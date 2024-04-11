import { Dispatch, SetStateAction } from "react";

export default function Modal({
  selectedImage,
  setSelectedImageIndex,
  setShowModal,
}: {
  selectedImage: string;
  setSelectedImageIndex: Dispatch<SetStateAction<number | null>>;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      className='full-screen-modal'
      onClick={() => {
        setShowModal(false);
        setSelectedImageIndex(null);
      }}
    >
      <div
        className='modal-container'
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <button
          onClick={() => {
            setShowModal(false);
            setSelectedImageIndex(null);
          }}
          className='image image-btn'
          style={{
            height: "250px",
            width: "200px",
            backgroundImage: `url(${selectedImage})`,
            backgroundSize: "cover",
            borderRadius: "0.5rem",
          }}
        ></button>
      </div>
    </div>
  );
}
