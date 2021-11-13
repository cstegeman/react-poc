import "./Board.css";

const context = new AudioContext();
// let speed = 1;
// let backwards = false;

const Board = ({ files }) => {
  return (
    <>
      {files.map((file, index) => {
        return (
          <section key={index}>
            <h2>{file.title}</h2>
            <hr />
            <div className="buttons">
              {file.sounds.map((sound, i) => {
                return (
                  <button
                    key={i}
                    onClick={() => play(file.category, sound.name)}
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

function play(category, name) {
  fetch(`/audio/${category}/${name}`)
    .then((response) => response.arrayBuffer())
    .then((response) => context.decodeAudioData(response, onDecoded));
}

function onDecoded(buffer) {
  const bufferSource = context.createBufferSource();
  // reverseChannels(buffer, backwards);
  bufferSource.buffer = buffer;
  bufferSource.connect(context.destination);
  // bufferSource.playbackRate.value = speed;
  bufferSource.start();
}

export default Board;
