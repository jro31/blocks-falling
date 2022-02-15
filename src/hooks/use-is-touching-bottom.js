import { squaresRef } from '../components/GameBoard';

const useIsTouchingBottom = () => {
  const isTouchingBottom = () => {
    return Object.keys(squaresRef.current[20])
      .map(square => squaresRef.current[20][square].status)
      .includes('live');
  };

  return isTouchingBottom;
};

export default useIsTouchingBottom;
