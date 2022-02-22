import useColumnKeyIntegers from './use-column-key-integers';

const useBlockLastColumnKey = () => {
  const columnKeyIntegers = useColumnKeyIntegers();

  const blockLastColumnKey = block => Math.max(...columnKeyIntegers(block));

  return blockLastColumnKey;
};

export default useBlockLastColumnKey;
