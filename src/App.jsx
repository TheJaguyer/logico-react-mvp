import { useState } from 'react';
import Pane from './Pane.jsx';
import Workspace from './Workspace.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Workspace />
      <Pane />
    </div>
  );
}

export default App;
