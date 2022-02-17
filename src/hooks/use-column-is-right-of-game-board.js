import useColumnKeyIntegers from './use-column-key-integers';

const useColumnIsRightOfGameBoard = () => {
  const columnKeyIntegers = useColumnKeyIntegers();

  const columnIsRightOfGameBoard = block =>
    columnKeyIntegers(block).some(columnKey => columnKey > 10);

  return columnIsRightOfGameBoard;
};

export default useColumnIsRightOfGameBoard;
