const useRenameRowKey = () => {
  const renameRowKey = (block, oldKey, newKey) => {
    delete Object.assign(block, { [newKey]: block[oldKey] })[oldKey];
  };

  return renameRowKey;
};

export default useRenameRowKey;
