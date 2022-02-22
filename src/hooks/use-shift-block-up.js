import useRowKeyIntegers from './use-row-key-integers';
import useRenameRowKey from './use-rename-row-key';

const useShiftBlockUp = () => {
  const rowKeyIntegers = useRowKeyIntegers();
  const renameRowKey = useRenameRowKey();

  const shiftBlockUp = (block, amount = 1) => {
    rowKeyIntegers(block).forEach(rowKey => renameRowKey(block, rowKey, rowKey - amount));
  };

  return shiftBlockUp;
};

export default useShiftBlockUp;
