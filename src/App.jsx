import { useState } from 'react';

import Pane from './Pane.jsx';
import Workspace from './Workspace.jsx';

function App() {
  const [pieces, setPieces] = useState([]);
  const [serial, setSerial] = useState(0);
  const [lines, setLines] = useState([]);
  const [saveChange, setSaveChange] = useState(false);

  var all = {
    pieces,
    setPieces,
    serial,
    setSerial,
    lines,
    setLines,
  };

  return (
    <div className="App">
      <Workspace {...all} />
      <Pane {...all} />
    </div>
  );
}

export default App;
