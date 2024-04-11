import { useState } from "react";
import { images } from "./images";
import ImageButton from "./ImageButton";
import Modal from "./Modal";
import Tile from "./Tile";

export default function Lightbox() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  return (
    <div>
      <div className='lightbox'>
        {images.map((image, index) => {
          return (
            <ImageButton
              key={index}
              tile={false}
              image={image}
              index={index}
              selectedImageIndex={selectedImageIndex}
              handleClick={() => {
                setShowModal(!showModal);
                setSelectedImageIndex(index);
              }}
            />
          );
        })}
      </div>
      {showModal && selectedImageIndex !== null && (
        <Modal
          selectedImage={images[selectedImageIndex]}
          setSelectedImageIndex={setSelectedImageIndex}
          setShowModal={setShowModal}
        />
      )}
      <Tile
        selectedImageIndex={selectedImageIndex}
        setSelectedImageIndex={setSelectedImageIndex}
        setShowModal={setShowModal}
      />
    </div>
  );
}
