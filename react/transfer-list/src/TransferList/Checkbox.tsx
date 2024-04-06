import { Dispatch, SetStateAction } from "react";
import { Data, DataContainer } from ".";

const Checkbox = ({
  item,
  direction,
  setDataContainer,
}: {
  item: Data;
  direction: "left" | "right";
  setDataContainer: Dispatch<SetStateAction<DataContainer>>;
}) => {
  const handleChange = (item: Data) => {
    setDataContainer((prev) => {
      const updatedContainer = {
        ...prev,
        [direction]: prev[direction].map((it) =>
          it.id === item.id ? { ...it, checked: !it.checked } : it
        ),
      };
      return updatedContainer;
    });
  };

  return (
    <div className='block'>
      <label>
        <span
          className={`cursor-pointer hover:bg-gray-800 select-none border p-2 rounded-lg w-full block text-center ${
            item.checked
              ? "bg-black text-white border-black hover:bg-gray-600"
              : ""
          }`}
        >
          {item.title}
        </span>
        <input
          checked={item.checked}
          onChange={() => handleChange(item)}
          type='checkbox'
          hidden
        />
      </label>
    </div>
  );
};

export default Checkbox;
