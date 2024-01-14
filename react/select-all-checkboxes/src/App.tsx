import { useEffect, useState } from "react";
import Checkbox from "./components/Checkbox";
import { list } from "./data/list";
import "./App.css";

export default function App() {
  const listWithCheck = list.map((item) => {
    return { ...item, checked: false };
  });

  const [listWithState, setListWithState] = useState(listWithCheck);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    if (listWithState.every((item) => item.checked)) {
      setSelectAll(true);
    }

    if (listWithState.some((item) => !item.checked)) {
      setSelectAll(false);
    }
  }, [listWithState]);

  return (
    <div className='container'>
      <h2 className='font-bold text-white text-xl mb-4'>
        Select All Implementation
      </h2>

      <div className='checkbox-container'>
        <div className='header'>
          <input
            type='checkbox'
            id='select-all'
            checked={selectAll}
            onChange={() => {
              setSelectAll((prev) => {
                setListWithState((prevList) => {
                  return prevList.map((item) => {
                    return { ...item, checked: !prev };
                  });
                });
                return !prev;
              });
            }}
          />
          <label htmlFor='select-all' className='font-bold'>
            Select All
          </label>
        </div>

        <div className='children-checkboxes'>
          {listWithState.map((item) => {
            return (
              <Checkbox
                label={item.name}
                checked={item.checked}
                onChange={(e: { target: { id: string } }) => {
                  setListWithState((preList) => {
                    return preList.map((it) => {
                      return it.name === e.target.id
                        ? { ...it, checked: !it.checked }
                        : it;
                    });
                  });
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
