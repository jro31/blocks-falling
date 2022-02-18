import useRowKeyIntegers from './use-row-key-integers';

const useRowIsBeneathGameBoard = () => {
  const rowKeyIntegers = useRowKeyIntegers();

  const rowIsBeneathGameBoard = block => rowKeyIntegers(block).some(rowKey => rowKey > 20);

  return rowIsBeneathGameBoard;
};

export default useRowIsBeneathGameBoard;
