import Header from './Header';
import Board from './Board';
import { useState } from 'react';
import { Box } from '@mui/material';

const Main = ({ files }) => {
  const [reversePlayback, setReversePlayback] = useState(false);
  const [enableDelay, setDelay] = useState(false);
  const [playSpeed, setPlaySpeed] = useState(1);

  return (
    <>
      <Header
        reversePlayback={reversePlayback}
        playSpeed={playSpeed}
        enableDelay={enableDelay}
        onChangeReversePlayback={event => setReversePlayback(event.target.checked)}
        onChangePlaySpeed={event => setPlaySpeed(Number(event.target.value))}
        onChangeDelay={event => setDelay(event.target.checked)}
      />
      <Box component="main" sx={{ pl: 2, pr: 2 }}>
        <Board
          files={files}
          reversePlayback={reversePlayback}
          playSpeed={playSpeed}
          enableDelay={enableDelay}
        />
      </Box>
      <Box component="footer" sx={{ mt: 3, pl: 2, pr: 2, pb: 2 }}>&copy; Copyright 2021</Box>
    </>
  );
};

export default Main;
