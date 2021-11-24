import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseLine from '@mui/material/CssBaseline';

function App() {
  const [files, setFiles] = useState([]);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: 'dark'
        }
      }),
    []
  );

  useEffect(() => {
    const fetchFiles = async () => {
      const response = await fetch('/sounds.json');
      const files = await response.json();

      setFiles(files);
    };

    fetchFiles();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseLine enableColorScheme={true} />
      <Router>
        <Switch>
          <Route exact path="/">
            <Main files={files} />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
