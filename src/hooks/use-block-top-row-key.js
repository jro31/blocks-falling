const useBlockTopRowKey = () => {
  const blockTopRowKey = block => parseInt(Object.keys(block)[0]);

  return blockTopRowKey;
};

export default useBlockTopRowKey;
