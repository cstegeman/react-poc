import { play } from '../utils/audio';
import { Box, Button, Divider, Grid, Typography } from '@mui/material';

const Board = ({ files, reversePlayback, playSpeed, enableDelay }) => {
  return (
    <>
      {files.map((file, index) => {
        return (
          <Box key={index} sx={{ mt: 3 }}>
            <Typography variant="h4" component="h2">
              {file.title}
            </Typography>
            <Divider variant="middle" />
            <Grid container spacing={1} sx={{ mt: 1 }}>
              {file.sounds.map((sound, i) => {
                return (
                  <Grid item xs="auto" key={i}>
                    <Button
                      variant="contained"
                      onClick={() =>
                        play(file.category, sound.name, playSpeed, reversePlayback, enableDelay)
                      }
                    >
                      {sound.title}
                    </Button>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        );
      })}
    </>
  );
};

export default Board;
