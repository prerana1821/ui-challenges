import { Dispatch, SetStateAction } from "react";
import { DataContainer } from ".";

const Controls = ({
  dataContainer,
  setDataContainer,
}: {
  dataContainer: DataContainer;
  setDataContainer: Dispatch<SetStateAction<DataContainer>>;
}) => {
  const moveRight = () => {
    if (dataContainer.right.some((item) => item.checked)) {
      return;
    }
    setDataContainer((prev) => {
      const updatedContainer = {
        left: prev.left.filter((item) => !item.checked),
        right: [
          ...prev.right,
          ...prev.left
            .filter((item) => item.checked)
            .map((item) => ({ ...item, checked: false })),
        ],
      };

      return updatedContainer;
    });
  };

  const moveLeft = () => {
    if (dataContainer.left.some((item) => item.checked)) {
      return;
    }
    setDataContainer((prev) => {
      const updatedContainer = {
        left: [
          ...prev.left,
          ...prev.right
            .filter((item) => item.checked)
            .map((item) => ({ ...item, checked: false })),
        ],
        right: prev.right.filter((item) => !item.checked),
      };

      return updatedContainer;
    });
  };

  return (
    <div className='flex flex-col justify-center align-middle gap-2	'>
      <button
        type='button'
        onClick={() => moveRight()}
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      >
        <svg
          fill='#ffffff'
          className='w-4 h-4'
          version='1.1'
          id='Layer_1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 330 330'
          stroke='#ffffff'
          transform='rotate(180)'
        >
          <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
          <g
            id='SVGRepo_tracerCarrier'
            strokeLinecap='round'
            strokeLinejoin='round'
          ></g>
          <g id='SVGRepo_iconCarrier'>
            <path
              id='XMLID_92_'
              d='M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001 l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z'
            ></path>
          </g>
        </svg>
        <span className='sr-only'>Go to Right</span>
      </button>

      <button
        type='button'
        onClick={() => moveLeft()}
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      >
        <svg
          fill='#ffffff'
          className='w-4 h-4'
          version='1.1'
          id='Layer_1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 330 330'
          stroke='#ffffff'
        >
          <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
          <g
            id='SVGRepo_tracerCarrier'
            strokeLinecap='round'
            strokeLinejoin='round'
          ></g>
          <g id='SVGRepo_iconCarrier'>
            <path
              id='XMLID_92_'
              d='M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001 l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z'
            ></path>
          </g>
        </svg>
        <span className='sr-only'> Go to Left</span>
      </button>
    </div>
  );
};

export default Controls;
