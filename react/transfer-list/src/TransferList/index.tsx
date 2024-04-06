import React, { useState } from "react";
import { data } from "../TransferList/data";
import Controls from "../TransferList/Controls";
import Checkbox from "../TransferList/Checkbox";

export interface Data {
  title: string;
  id: number;
  checked: boolean;
}

export interface DataContainer {
  left: Data[];
  right: Data[];
}

export const TransferList = () => {
  const [dataContainer, setDataContainer] = useState<DataContainer>({
    left: [...data],
    right: [],
  });

  console.log({ dataContainer });

  return (
    <div className='flex gap-4 my-8'>
      <div className='flex min-w-36 p-5	flex-col gap-2 border-dashed rounded-md	border-2 min-h-56'>
        {dataContainer.left.map((item) => {
          return (
            <Checkbox
              key={item.id}
              item={item}
              direction={"left"}
              setDataContainer={setDataContainer}
            />
          );
        })}
      </div>
      <Controls
        dataContainer={dataContainer}
        setDataContainer={setDataContainer}
      />
      <div className='flex min-w-36 p-5	flex-col gap-2 border-dashed rounded-md	border-2'>
        {dataContainer.right.map((item: Data) => {
          return (
            <Checkbox
              key={item.id}
              item={item}
              direction={"right"}
              setDataContainer={setDataContainer}
            />
          );
        })}
      </div>
    </div>
  );
};
