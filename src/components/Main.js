import Header from "./Header";
import Footer from "./Footer";
import Board from "./Board";
import { useState } from "react";

const Main = ({ files }) => {
  const [reversePlayback, setReversePlayback] = useState(false);
  const [playSpeed, setPlaySpeed] = useState(1);

  return (
    <>
      <Header
        reversePlayback={reversePlayback}
        playSpeed={playSpeed}
        onChangeReversePlayback={(event) =>
          setReversePlayback(event.target.checked)
        }
        onChangePlaySpeed={(event) => setPlaySpeed(Number(event.target.value))}
      />
      <main>
        <Board files={files} reversePlayback={reversePlayback} playSpeed={playSpeed} />
      </main>
      <Footer />
    </>
  );
};

export default Main;
