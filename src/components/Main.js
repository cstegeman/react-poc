import Header from './Header';
import Footer from './Footer';
import Board from './Board';
import { useState } from 'react';

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
      <main>
        <Board
          files={files}
          reversePlayback={reversePlayback}
          playSpeed={playSpeed}
          enableDelay={enableDelay}
        />
      </main>
      <Footer />
    </>
  );
};

export default Main;
