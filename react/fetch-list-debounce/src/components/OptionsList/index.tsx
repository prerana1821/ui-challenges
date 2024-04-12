const OptionsList = ({
  options,
  addToList,
}: {
  options: string[];
  addToList: (listItem: string) => void;
}) => {
  return (
    <div className='options'>
      <div className='option-items'>
        {options.map((el, idx) => (
          <div
            className='option-item'
            key={`option-${el}-${idx}`}
            onClick={() => addToList(el)}
          >
            {el}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptionsList;
