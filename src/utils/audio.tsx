// @ts-ignore
import Tuna from 'tunajs';

const context = new AudioContext();
const tuna = new Tuna(context);
const delay = new tuna.Delay({
  delayTime: 300
});

export function play(
  category: string,
  name: string,
  playSpeed: number,
  reversePlayback: boolean,
  enableDelay: boolean
) {
  fetch(`/audio/${category}/${name}`)
    .then(response => response.arrayBuffer())
    .then(response =>
      context.decodeAudioData(response, buffer =>
        onDecoded(buffer, playSpeed, reversePlayback, enableDelay)
      )
    )
    .catch(error => console.warn(error));
}

function onDecoded(buffer: AudioBuffer, playSpeed: number, reversePlayback: boolean, enableDelay: boolean) {
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

function reverseChannels(buffer: AudioBuffer, reversePlayback: boolean) {
  if (!reversePlayback) {
    return buffer;
  }
  for (let i = 0; i < buffer.numberOfChannels; i++) {
    buffer.getChannelData(i).reverse();
  }
  return buffer;
}
