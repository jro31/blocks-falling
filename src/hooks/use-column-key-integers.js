const useColumnKeyIntegers = () => {
  const columnKeyIntegers = block => {
    let columnsArray = [];

    Object.keys(block).forEach(rowKey => columnsArray.push(Object.keys(block[rowKey])));
    columnsArray.flat().map(column => parseInt(column));

    return [...new Set(columnsArray.flat().map(column => parseInt(column)))];
  };

  return columnKeyIntegers;
};

export default useColumnKeyIntegers;
