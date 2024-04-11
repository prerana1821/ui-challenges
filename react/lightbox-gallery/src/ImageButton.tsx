const ImageButton = ({
  tile,
  image,
  index,
  selectedImageIndex,
  handleClick,
}: {
  tile: boolean;
  image: string;
  index: number;
  selectedImageIndex: number | null;
  handleClick: () => void;
}) => {
  return (
    <button
      onClick={handleClick}
      key={index}
      className='image'
      style={{
        height: tile ? "100px" : "250px",
        width: tile ? "68px" : "200px",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        borderRadius: "0.5rem",
        border: `${index === selectedImageIndex ? "blue solid 1px" : ""}`,
      }}
    ></button>
  );
};

export default ImageButton;
