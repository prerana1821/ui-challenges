import { useCallback, useState } from "react";
import MyList from "./MyList";
import OptionsList from "./OptionsList";

function CountriesList() {
  const [searchText, setSearchText] = useState<string>("");
  const [list, setList] = useState<string[]>([]);
  const [options, setOptions] = useState<string[]>([]);

  const debounce = (cb: Function, delay: number) => {
    let timer: ReturnType<typeof setTimeout>;
    return function (...args: any[]) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  };

  const onChange = useCallback(
    debounce((value: string) => {
      if (value.length > 2) {
        fetchData(value);
      } else {
        setOptions([]);
      }
    }, 500),
    []
  );

  const fetchData = (value: string) => {
    fetch(`https://algochurn-server.onrender.com/practice/countries/${value}`)
      .then((res) => res.json())
      .then((data) => {
        const { countries } = data;
        console.log(countries);
        setOptions(countries);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleDelete = (listItemIndex: number) => {
    const newList = list.filter((_, idx) => idx !== listItemIndex);
    setList(newList);
  };

  const addToList = (listItem: string) => {
    setList([...list, listItem]);
  };

  return (
    <div style={{ padding: "10px" }}>
      <div>
        <input
          placeholder='Type to search'
          type='text'
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            onChange(e.target.value);
          }}
        />

        {options.length > 0 && (
          <OptionsList options={options} addToList={addToList} />
        )}
        <h1>My List</h1>
        <MyList list={list} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default CountriesList;
