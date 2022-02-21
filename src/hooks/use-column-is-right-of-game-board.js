import useBlockLastColumnKey from './use-block-last-column-key';

const useColumnIsRightOfGameBoard = () => {
  const blockLastColumnKey = useBlockLastColumnKey();

  const columnIsRightOfGameBoard = block => blockLastColumnKey(block) > 10;

  return columnIsRightOfGameBoard;
};

export default useColumnIsRightOfGameBoard;
