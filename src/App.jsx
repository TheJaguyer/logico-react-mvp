import { useState } from 'react';

import Pane from './Pane.jsx';
import Workspace from './Workspace.jsx';

const startData = { pieces: [], serial: 0, lines: [] };

function App() {
  const [data, setData] = useState(startData);
  const [saveChange, setSaveChange] = useState(false);
  return (
    <div className="App">
      <Workspace data={data} setData={setData} />
      <Pane setData={setData} data={data} setSaveChange={setSaveChange} />
    </div>
  );
}

export default App;
