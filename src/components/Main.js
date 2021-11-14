import Header from "./Header";
import Footer from "./Footer";
import Board from "./Board";
import { useState } from "react";

const Main = ({ files }) => {
  const [reversePlayback, setReversePlayback] = useState(false);
    const [playSpeed, setPlaySpeed] = useState(false);

  return (
    <>
      <Header
        reversePlayback={reversePlayback}
        onChange={(event) => setReversePlayback(event.target.checked)}
      />
      <main>
        <Board files={files} reversePlayback={reversePlayback} />
      </main>
      <Footer />
    </>
  );
};

export default Main;
