import useRowKeyIntegers from './use-row-key-integers';

const useRowIsAboveGameBoard = () => {
  const rowKeyIntegers = useRowKeyIntegers();

  const rowIsAboveGameBoard = block => rowKeyIntegers(block).some(rowKey => rowKey < 1);

  return rowIsAboveGameBoard;
};

export default useRowIsAboveGameBoard;
