import useColumnKeyIntegers from './use-column-key-integers';

const useBlockFirstColumnKey = () => {
  const columnKeyIntegers = useColumnKeyIntegers();

  const blockFirstColumnKey = block => Math.min(...columnKeyIntegers(block));

  return blockFirstColumnKey;
};

export default useBlockFirstColumnKey;
