const MyList = ({
  list,
  handleDelete,
}: {
  list: string[];
  handleDelete: (listItemIndex: number) => void;
}) => {
  return (
    <div style={{ padding: "10px" }}>
      {list.length > 0 && (
        <div style={{ padding: "10px" }}>
          {list.map((el, idx) => (
            <div className='list-items' key={`element-${el}-${idx}`}>
              <p>{el}</p>
              <span onClick={() => handleDelete(idx)}>❎</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyList;
