const context = new AudioContext();

/**
 * @param {string} category
 * @param {string} name
 * @param {number} playSpeed
 * @param {boolean} reversePlayback
 */
export function play(category, name, playSpeed, reversePlayback) {
  fetch(`/audio/${category}/${name}`)
    .then((response) => response.arrayBuffer())
    .then((response) => context.decodeAudioData(response, (buffer) => onDecoded(buffer, playSpeed, reversePlayback)))
    .catch((error) => console.warn(error));
}

/**
 * @param buffer
 * @param {number} playSpeed
 * @param {boolean} reversePlayback
 */
function onDecoded(buffer, playSpeed, reversePlayback) {
  const bufferSource = context.createBufferSource();
  reverseChannels(buffer, reversePlayback);
  bufferSource.buffer = buffer;
  bufferSource.connect(context.destination);
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
