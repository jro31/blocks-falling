import { useSelector } from 'react-redux';

const useIsTouchingBottom = () => {
  const squares = useSelector(state => state.gameBoard.squares);

  const isTouchingBottom = () =>
    Object.keys(squares[20])
      .map(square => squares[20][square].status)
      .includes('live');

  return isTouchingBottom;
};

export default useIsTouchingBottom;
