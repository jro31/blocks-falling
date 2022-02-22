const useRowKeyIntegers = () => {
  const rowKeyIntegers = block => Object.keys(block).map(rowKey => parseInt(rowKey));

  return rowKeyIntegers;
};

export default useRowKeyIntegers;
