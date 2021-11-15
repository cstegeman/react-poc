import ReverseField from "./ReverseField";
import SpeedSelection from "./SpeedSelection";
import DelayField from "./DelayField";

const Header = ({
  reversePlayback,
  playSpeed,
  enableDelay,
  onChangeReversePlayback,
  onChangePlaySpeed,
  onChangeDelay,
}) => {
  return (
    <header>
      <h1>Soundboard</h1>
      <div className="flex flex--wrap gap-x--4 gap-y--2">
        <div>
          <ReverseField
            reversePlayback={reversePlayback}
            onChange={onChangeReversePlayback}
          />
        </div>
        <div>
          <DelayField enableDelay={enableDelay} onChange={onChangeDelay} />
        </div>
        <div className="grow--1 flex gap--3">
          <SpeedSelection playSpeed={playSpeed} onChange={onChangePlaySpeed} />
        </div>
      </div>
    </header>
  );
};

export default Header;
