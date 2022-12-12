import { useState } from 'react';
import Classic from './Classic.jsx';
import Custom from './Custom.jsx';

export default function Options() {
  const [classic, setClassic] = useState(true);
  return (
    <div className="options">
      <div className="row">
        <button onClick={() => setClassic(true)}>Classic</button>
        <button onClick={() => setClassic(false)}>Challenge</button>
      </div>

      {classic ? <Classic /> : <Custom />}
    </div>
  );
}
