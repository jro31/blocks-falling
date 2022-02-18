import useRowKeyIntegers from './use-row-key-integers';
import useRenameRowKey from './use-rename-row-key';

const useShiftBlockDown = () => {
  const rowKeyIntegers = useRowKeyIntegers();
  const renameRowKey = useRenameRowKey();

  const shiftBlockDown = (block, amount = 1) => {
    rowKeyIntegers(block)
      .reverse()
      .forEach(rowKey => renameRowKey(block, rowKey, rowKey + amount));
  };

  return shiftBlockDown;
};

export default useShiftBlockDown;
