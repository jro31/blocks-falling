import useBlockBottomRowKey from './use-block-bottom-row-key';

const useRowIsBeneathGameBoard = () => {
  const blockBottomRowKey = useBlockBottomRowKey();

  const rowIsBeneathGameBoard = block => blockBottomRowKey(block) > 20;

  return rowIsBeneathGameBoard;
};

export default useRowIsBeneathGameBoard;
