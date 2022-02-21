const useBlockBottomRowKey = () => {
  const blockBottomRowKey = block => parseInt(Object.keys(block)[Object.keys(block).length - 1]);

  return blockBottomRowKey;
};

export default useBlockBottomRowKey;
