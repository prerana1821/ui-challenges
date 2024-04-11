import { Dispatch, SetStateAction } from "react";
import ImageButton from "./ImageButton";
import { images } from "./images";

const Tile = ({
  selectedImageIndex,
  setSelectedImageIndex,
  setShowModal,
}: {
  selectedImageIndex: number | null;
  setSelectedImageIndex: Dispatch<SetStateAction<number | null>>;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className='tile'>
      {images.map((image, index) => {
        return (
          <ImageButton
            key={index}
            tile
            image={image}
            index={index}
            selectedImageIndex={selectedImageIndex}
            handleClick={() => {
              setShowModal(true);
              setSelectedImageIndex(index);
            }}
          />
        );
      })}
    </div>
  );
};

export default Tile;
