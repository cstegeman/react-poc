import React from 'react';
import Header from './Header';
import Board from './Board';
import { Box } from '@mui/material';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reversePlayback: false, enableDelay: false, playSpeed: 1 };
  }

  handleReversePlayback(reversePlayback) {
    this.setState({ reversePlayback });
  }

  handlePlaySpeed(playSpeed) {
    this.setState({ playSpeed });
  }

  handleDelay(enableDelay) {
    this.setState({ enableDelay });
  }

  render() {
    return (
      <>
        <Header
          reversePlayback={this.state.reversePlayback}
          playSpeed={this.state.playSpeed}
          enableDelay={this.state.enableDelay}
          onChangeReversePlayback={event => this.handleReversePlayback(event.target.checked)}
          onChangePlaySpeed={event => this.handlePlaySpeed(Number(event.target.value))}
          onChangeDelay={event => this.handleDelay(event.target.checked)}
        />
        <Box component="main" sx={{ pl: 2, pr: 2 }}>
          <Board
            files={this.props.files}
            reversePlayback={this.state.reversePlayback}
            playSpeed={this.state.playSpeed}
            enableDelay={this.state.enableDelay}
          />
        </Box>
        <Box component="footer" sx={{ mt: 3, pl: 2, pr: 2, pb: 2 }}>
          &copy; Copyright 2021
        </Box>
      </>
    );
  }
}

export default Main;
