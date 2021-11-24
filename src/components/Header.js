import ReverseField from './ReverseField';
import SpeedSelection from './SpeedSelection';
import DelayField from './DelayField';
import { AppBar, Box, Grid, Toolbar, Typography } from '@mui/material';

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
          <Typography variant="h2" component="h1" color="inherit">
            Soundboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ mt: 1, pl:2, pr: 2 }}>
        <Grid container spacing={1}>
          <Grid item xs="auto">
            <ReverseField reversePlayback={reversePlayback} onChange={onChangeReversePlayback} />
          </Grid>
          <Grid item xs="auto">
            <DelayField enableDelay={enableDelay} onChange={onChangeDelay} />
          </Grid>
        </Grid>
        <SpeedSelection playSpeed={playSpeed} onChange={onChangePlaySpeed} />
      </Box>
    </>
  );
};

export default Header;
