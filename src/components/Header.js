import ReverseField from './ReverseField';
import SpeedSelection from './SpeedSelection';
import DelayField from './DelayField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';

const Header = ({
  reversePlayback,
  playSpeed,
  enableDelay,
  onChangeReversePlayback,
  onChangePlaySpeed,
  onChangeDelay
}) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h1" color="inherit">
            Soundboard
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="flex flex--wrap gap-x--4 gap-y--2">
        <div>
          <ReverseField reversePlayback={reversePlayback} onChange={onChangeReversePlayback} />
        </div>
        <div>
          <DelayField enableDelay={enableDelay} onChange={onChangeDelay} />
        </div>
        <div className="grow--1 flex gap--3">
          <SpeedSelection playSpeed={playSpeed} onChange={onChangePlaySpeed} />
        </div>
      </div>
    </>
  );
};

export default Header;
