import useColumnKeyIntegers from './use-column-key-integers';

const useColumnIsLeftOfGameBoard = () => {
  const columnKeyIntegers = useColumnKeyIntegers();

  const columnIsLeftOfGameBoard = block =>
    columnKeyIntegers(block).some(columnKey => columnKey < 1);

  return columnIsLeftOfGameBoard;
};

export default useColumnIsLeftOfGameBoard;
