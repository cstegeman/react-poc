import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseLine from '@mui/material/CssBaseline';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { files: [] };
  }

  componentDidMount() {
    const fetchFiles = async () => {
      const response = await fetch('/sounds.json');
      const files = await response.json();

      this.setState({ files });
    };

    fetchFiles();
  }

  render() {
    const theme = createTheme({
      palette: {
        mode: 'dark'
      }
    });

    return (
      <ThemeProvider theme={theme}>
        <CssBaseLine enableColorScheme={true} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main files={this.state.files} />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
