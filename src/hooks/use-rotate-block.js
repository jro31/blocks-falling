import { squaresRef } from '../components/GameBoard';
import { live } from '../store/game-board';

const useRotateBlock = () => {
  const initialShape = () => {
    let returnObject = {};

    Object.keys(squaresRef.current).forEach(outerKey =>
      Object.keys(squaresRef.current[outerKey]).forEach(innerKey => {
        if (squaresRef.current[outerKey][innerKey].status === live) {
          if (!returnObject[outerKey]) returnObject[outerKey] = {};
          if (!returnObject[outerKey][innerKey]) returnObject[outerKey][innerKey] = {};
          returnObject[outerKey][innerKey].status = live;
          returnObject[outerKey][innerKey].color = squaresRef.current[outerKey][innerKey].color;
        }
      })
    );

    return returnObject;
  };

  const newShape = () => {
    let returnObject = {};

    // TODO
    // If three or four consecutive horizontal squares, pivot on the middle of these (for L, J, I and T when horizontal)
    // If three or four consecutive vertical squares, pivot on the middle of these (for L, J, I and T when vertical)
    // Otherwise (Z and S) pivot on one of the two centre squares
  };

  const rotateBlock = (direction = null) => {
    console.log(initialShape());
    console.log(newShape());

    // Get the initial shape
    // From the initial shape, establish the new shape
    // Fit the new shape onto the grid, moving it down if at the very top, or moving it up if it doesn't fit with the surrounding settled blocks
  };

  return rotateBlock;
};

export default useRotateBlock;
