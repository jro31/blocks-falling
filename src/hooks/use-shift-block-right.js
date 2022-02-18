import useRowKeyIntegers from './use-row-key-integers';
import useRenameColumnKey from './use-rename-column-key';

const useShiftBlockRight = () => {
  const rowKeyIntegers = useRowKeyIntegers();
  const renameColumnKey = useRenameColumnKey();

  const shiftBlockRight = (block, amount = 1) => {
    rowKeyIntegers(block).forEach(rowKey =>
      Object.keys(block[rowKey])
        .reverse()
        .forEach(columnKey => {
          renameColumnKey(block, rowKey, parseInt(columnKey), parseInt(columnKey) + amount);
        })
    );
  };

  return shiftBlockRight;
};

export default useShiftBlockRight;
