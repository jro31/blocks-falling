import { useSelector } from 'react-redux';

const useIsBlockBelow = () => {
  const squares = useSelector(state => state.gameBoard.squares);

  const isBlockBelow = () => {
    let belowSquaresStatusArray = [];

    Object.keys(squares).forEach(outerKey =>
      Object.keys(squares[outerKey]).forEach(innerKey => {
        if (squares[outerKey][innerKey].status === 'live') {
          belowSquaresStatusArray.push(squares[parseInt(outerKey) + 1][innerKey].status);
        }
      })
    );

    return belowSquaresStatusArray.includes('settled');
  };

  return isBlockBelow;
};

export default useIsBlockBelow;
