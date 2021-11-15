import "./Board.css";
import { play } from "../utils/audio";

const Board = ({ files, reversePlayback, playSpeed, enableDelay }) => {
  return (
    <>
      {files.map((file, index) => {
        return (
          <section key={index}>
            <h2>{file.title}</h2>
            <hr />
            <div className="flex flex--wrap gap--3">
              {file.sounds.map((sound, i) => {
                return (
                  <button
                    key={i}
                    onClick={() =>
                      play(
                        file.category,
                        sound.name,
                        playSpeed,
                        reversePlayback,
                        enableDelay
                      )
                    }
                  >
                    {sound.title}
                  </button>
                );
              })}
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Board;
