const useRenameColumnKey = () => {
  const renameColumnKey = (block, rowKey, oldKey, newKey) => {
    delete Object.assign(block[rowKey], { [newKey]: block[rowKey][oldKey] })[oldKey];
  };

  return renameColumnKey;
};

export default useRenameColumnKey;
