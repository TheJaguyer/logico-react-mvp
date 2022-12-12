import { useState } from 'react';

import Pane from './Pane.jsx';
import Workspace from './Workspace.jsx';

function App() {
  const [pieces, setPieces] = useState([]);
  const [serial, setSerial] = useState(0);
  const [lines, setLines] = useState([]);
  const [saveChange, setSaveChange] = useState(false);
  return (
    <div className="App">
      <Workspace
        pieces={pieces}
        setPieces={setPieces}
        lines={lines}
        setLines={setLines}
        serial={serial}
        setSerial={setSerial}
      />
      <Pane
        pieces={pieces}
        setPieces={setPieces}
        lines={lines}
        setLines={setLines}
        serial={serial}
        setSerial={setSerial}
      />
    </div>
  );
}

export default App;
