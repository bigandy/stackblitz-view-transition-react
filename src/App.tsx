import { FC, useState } from 'react';

import './style.css';

const Box = ({ position }) => {
  return (
    <div className={`box box-${BoxPositions[position]}`}>
      I am div with position: {BoxPositions[position]}
    </div>
  );
};

const BoxPositions = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];

export const App: FC<{ name: string }> = ({ name }) => {
  const [position, setPosition] = useState(0);

  const randomisedPosition = () => {
    setPosition((p) => {
      return p === BoxPositions.length - 1 ? 0 : p + 1;
    });
  };

  const changeBoxPosition = () => {
    if (!document.startViewTransition) {
      randomisedPosition();
    } else {
      document.startViewTransition(async () => {
        randomisedPosition();
      });
    }
  };
  return (
    <div>
      <button onClick={changeBoxPosition}>Change Position</button>
      <Box position={position} />
    </div>
  );
};
