import Header from './Header';
import Board from './Board';
import { Box } from '@mui/material';

const Main = ({ files }) => {
  return (
    <>
      <Header />
      <Box component="main" sx={{ pl: 2, pr: 2 }}>
        <Board files={files} />
      </Box>
      <Box component="footer" sx={{ mt: 3, pl: 2, pr: 2, pb: 2 }}>
        &copy; Copyright 2021
      </Box>
    </>
  );
};

export default Main;
