import { useEffect } from "react";
import Main from "./components/main.js";
import SettingContext from "./context/state.js";

function App({ hideLoader }) {
  useEffect(hideLoader, []);

  return (
    <SettingContext>
      <div className="App">
        <h1 className="header">Store Search</h1>
        <Main />
      </div>
    </SettingContext>
  );
}

export default App;
