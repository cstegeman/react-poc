import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import { useEffect, useState } from "react";

function App() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const response = await fetch("/sounds.json");
      const files = await response.json();

      setFiles(files);
    };

    fetchFiles();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main files={files} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
