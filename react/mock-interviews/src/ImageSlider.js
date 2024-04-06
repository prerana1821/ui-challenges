import { useState, useEffect } from "react";

const images = [
  "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
  "https://img.freepik.com/premium-photo/colorful-abstract-illustration-purple-blue-black-background_145644-21925.jpg",
  "https://cdn.mos.cms.futurecdn.net/oK3Yst3XN7fwKtej2a87J-1200-80.jpg",
  "https://i.pinimg.com/originals/57/59/31/57593185681b7454f900536ce470cad9.jpg",
];

export const ImageSlider = () => {
  const [imgCount, setImgCount] = useState(0);

  useEffect(() => {
    let sliderInterval = setInterval(() => {
      setImgCount((prev) => {
        return (prev + 1) % images.length;
      });
    }, 2000);

    return () => {
      clearInterval(sliderInterval);
    };
  }, [imgCount]);

  return (
    <div>
      <div className='slider'>
        <button
          onClick={() => {
            if (imgCount > 0) {
              setImgCount(imgCount - 1);
            }
          }}
        >
          Previous
        </button>
        <div>
          {/* <img src={images[imgCount]} alt={"Slider"} className='slider-image' />{" "} */}
          {images.map((image, index) => {
            return (
              <img
                key={index}
                src={image}
                alt={"Slider"}
                className='slider-image'
                style={{ display: imgCount === index ? "block" : "none" }}
              />
            );
          })}
          <div className='slider-pointer-container'>
            {images.map((pointer, index) => {
              return (
                <div
                  key={index}
                  onClick={() => setImgCount(index)}
                  className='slider-pointer'
                  style={{
                    background: imgCount === index ? "yellow" : "black",
                  }}
                ></div>
              );
            })}
          </div>
        </div>
        <button
          onClick={() => {
            if (imgCount < images.length - 1) {
              setImgCount(imgCount + 1);
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};
