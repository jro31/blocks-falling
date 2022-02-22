import useRowKeyIntegers from './use-row-key-integers';
import useRenameColumnKey from './use-rename-column-key';

const useShiftBlockLeft = () => {
  const rowKeyIntegers = useRowKeyIntegers();
  const renameColumnKey = useRenameColumnKey();

  const shiftBlockLeft = (block, amount = 1) => {
    rowKeyIntegers(block).forEach(rowKey =>
      Object.keys(block[rowKey]).forEach(columnKey => {
        renameColumnKey(block, rowKey, parseInt(columnKey), parseInt(columnKey) - amount);
      })
    );
  };

  return shiftBlockLeft;
};

export default useShiftBlockLeft;
