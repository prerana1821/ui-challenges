import { useEffect, useState } from "react";
import { items as defaultItems } from "./items";

export default function MultipleFilters() {
  let filters = ["Bags", "Watches", "Sports", "Sunglasses"];

  const [items, setItems] = useState<{ name: string; category: string }[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  useEffect(() => {
    if (selectedFilters.length === 0) {
      setItems(defaultItems);
    } else {
      const filteredItems = defaultItems.filter((item) =>
        selectedFilters.includes(item.category)
      );
      setItems(filteredItems);
    }
  }, [selectedFilters]);

  const setClassBG = (element: string) => {
    return selectedFilters.indexOf(element) >= 0 ? `button active` : `button`;
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Mutliple Filters</h2>
      <div className='buttons-container'>
        {filters.map((element, idx) => (
          <button
            className={setClassBG(element)}
            key={`filters-${idx}`}
            onClick={() => {
              setSelectedFilters((prevFilters) => {
                return prevFilters.indexOf(element) >= 0
                  ? prevFilters.filter((item) => item !== element)
                  : [...prevFilters, element];
              });
            }}
          >
            {element}
          </button>
        ))}
      </div>
      <div className='items-container'>
        {items.map((item, idx) => (
          <div key={`items-${idx}`} className='item'>
            <p>{item.name}</p>
            <p className='category'>{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
