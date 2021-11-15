import Tuna from "tunajs";

const context = new AudioContext();
const tuna = new Tuna(context);
const delay = new tuna.Delay({
  delayTime: 300,
});

/**
 * @param {string} category
 * @param {string} name
 * @param {number} playSpeed
 * @param {boolean} reversePlayback
 * @param {boolean} enableDelay
 */
export function play(category, name, playSpeed, reversePlayback, enableDelay) {
  fetch(`/audio/${category}/${name}`)
    .then((response) => response.arrayBuffer())
    .then((response) =>
      context.decodeAudioData(response, (buffer) =>
        onDecoded(buffer, playSpeed, reversePlayback, enableDelay)
      )
    )
    .catch((error) => console.warn(error));
}

/**
 * @param buffer
 * @param {number} playSpeed
 * @param {boolean} reversePlayback
 * @param {boolean} enableDelay
 */
function onDecoded(buffer, playSpeed, reversePlayback, enableDelay) {
  const bufferSource = context.createBufferSource();
  reverseChannels(buffer, reversePlayback);
  bufferSource.buffer = buffer;
  bufferSource.connect(context.destination);
  if (enableDelay) {
    bufferSource.connect(delay);
    delay.connect(context.destination);
  }
  bufferSource.playbackRate.value = playSpeed;
  bufferSource.start();
}

/**
 * @param buffer
 * @param {boolean} reversePlayback
 * @returns {*}
 */
function reverseChannels(buffer, reversePlayback) {
  if (!reversePlayback) {
    return buffer;
  }
  for (let i = 0; i < buffer.numberOfChannels; i++) {
    buffer.getChannelData(i).reverse();
  }
  return buffer;
}
