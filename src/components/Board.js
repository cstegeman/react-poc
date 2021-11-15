import "./Board.css";

const context = new AudioContext();

const Board = ({ files, reversePlayback, playSpeed }) => {
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

  /**
   * @param {string} category
   * @param {string} name
   */
  function play(category, name) {
    fetch(`/audio/${category}/${name}`)
      .then((response) => response.arrayBuffer())
      .then((response) => context.decodeAudioData(response, onDecoded));
  }

  /**
   * @param buffer
   */
  function onDecoded(buffer) {
    const bufferSource = context.createBufferSource();
    reverseChannels(buffer);
    bufferSource.buffer = buffer;
    bufferSource.connect(context.destination);
    bufferSource.playbackRate.value = playSpeed;
    bufferSource.start();
  }

  /**
   * @param buffer
   * @returns {*}
   */
  function reverseChannels(buffer) {
    if (!reversePlayback) {
      return buffer;
    }
    for (let i = 0; i < buffer.numberOfChannels; i++) {
      buffer.getChannelData(i).reverse();
    }
    return buffer;
  }
};

export default Board;
