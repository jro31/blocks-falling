import useRowKeyIntegers from './use-row-key-integers';
import useRenameRowKey from './use-rename-row-key';

const useShiftBlockDown = () => {
  const rowKeyIntegers = useRowKeyIntegers();
  const renameRowKey = useRenameRowKey();

  const shiftBlockDown = block => {
    rowKeyIntegers(block)
      .reverse()
      .forEach(rowKey => renameRowKey(block, rowKey, rowKey + 1));
  };

  return shiftBlockDown;
};

export default useShiftBlockDown;
