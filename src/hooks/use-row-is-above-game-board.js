import useBlockTopRowKey from './use-block-top-row-key';

const useRowIsAboveGameBoard = () => {
  const blockTopRowKey = useBlockTopRowKey();

  const rowIsAboveGameBoard = block => blockTopRowKey(block) < 1;

  return rowIsAboveGameBoard;
};

export default useRowIsAboveGameBoard;
