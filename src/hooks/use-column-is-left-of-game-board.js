import useBlockFirstColumnKey from './use-block-first-column-key';

const useColumnIsLeftOfGameBoard = () => {
  const blockFirstColumnKey = useBlockFirstColumnKey();

  const columnIsLeftOfGameBoard = block => blockFirstColumnKey(block) < 1;

  return columnIsLeftOfGameBoard;
};

export default useColumnIsLeftOfGameBoard;
