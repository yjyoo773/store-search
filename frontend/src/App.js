import { useEffect } from 'react';
import Main from './components/main.js';

function App({hideLoader}) {
  useEffect(hideLoader,[]);

  return (
    <div className="App">
      <h1 className = "header">Store Search</h1>
      <Main/>
    </div>
  );
}

export default App;
