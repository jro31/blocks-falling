import { useSelector } from 'react-redux';

const useBackgroundIsDark = () => {
  const backgroundOne = useSelector(state => state.gameBoard.backgroundOne);
  const backgroundTwo = useSelector(state => state.gameBoard.backgroundTwo);
  const liveBackground = useSelector(state => state.gameBoard.liveBackground);

  const darkBackgrounds = ['red-dead', 'wild-hunt'];

  const backgroundIsDark = () => {
    if (
      (liveBackground === 'one' && darkBackgrounds.includes(backgroundOne)) ||
      (liveBackground === 'two' && darkBackgrounds.includes(backgroundTwo))
    ) {
      return true;
    } else {
      return false;
    }
  };

  return backgroundIsDark;
};

export default useBackgroundIsDark;
