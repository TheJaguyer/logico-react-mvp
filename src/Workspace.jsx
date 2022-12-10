import { useState } from 'react';
import Gates from './work-comps/Gates.jsx';

export default function Workspace() {
  const [pieces, setPieces] = useState([]);
  const [pieceIDs, setPieceIDs] = useState([]);
  const [serial, setSerial] = useState(0);
  const [lines, setLines] = useState([]);
  const [newLine, setNewLine] = useState(false);

  // prevent the red symbol that means no drop
  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDrop(e) {
    let X = e.pageX - 25;
    let Y = e.pageY - 25;
    let propsCheck = e.dataTransfer.getData('props');
    if (propsCheck) {
      movePiece(propsCheck, X, Y);
    } else {
      addPiece(e.dataTransfer.getData('Text'), X, Y);
    }
  }

  function movePiece(props, X, Y) {
    let moved = JSON.parse(props);
    moved.x = X;
    moved.y = Y;
    setPieces((prev) => [...prev.map((item) => (item.serial === moved.serial ? moved : item))]);
  }

  function removePiece(serial) {
    setPieces((prev) => [...prev.filter((item) => item.serial != serial)]);
  }

  function removeLine(serial) {
    setLines((prev) => [...prev.filter((item) => item.serial != serial)]);
  }

  function addPiece(type, x, y) {
    setPieces((prev) => [...prev, { name: type, x: x, y: y, serial: serial, remove: removePiece }]);
    setSerial((prev) => prev + 1);
  }

  function startLine(e) {
    if (e.target.id.includes('output')) {
      let X = e.pageX;
      let Y = e.pageY;
      setNewLine({ x1: X, x2: X, y1: Y, y2: Y, id: serial, on: false, remove: { removeLine } });
      setSerial((prev) => prev + 1);
    }
  }

  function follow(e) {
    if (newLine) {
      let X = e.pageX;
      let Y = e.pageY;
      let change = { ...newLine };
      change.x2 = X;
      change.y2 = Y;
      setNewLine(change);
    }
  }

  function endLine(e) {
    if (newLine && e.target.id.includes('input')) {
      let X = e.pageX;
      let Y = e.pageY;
      let change = { ...newLine };
      change.x2 = X;
      change.y2 = Y;
      setNewLine(change);
      setLines((prev) => [...prev, change]);
      setNewLine(false);
    } else {
      setNewLine(false);
    }
  }

  return (
    <div
      className="workspace"
      onDragOver={(e) => handleDragOver(e)}
      onDrop={(e) => handleDrop(e)}
      onMouseDown={(e) => startLine(e)}
      onMouseUp={(e) => endLine(e)}
      onMouseMove={(e) => follow(e)}
      onContextMenu={(e) => e.preventDefault()}
    >
      {pieces.map((item, index) => {
        switch (item.name) {
          case 'AND':
            return <Gates.AND key={Date.now() + index} {...item} />;
          case 'OR':
            return <Gates.OR key={Date.now() + index} {...item} />;
          case 'BUFFER':
            return <Gates.BUFFER key={Date.now() + index} {...item} />;
          case 'NAND':
            return <Gates.NAND key={Date.now() + index} {...item} />;
          case 'NOR':
            return <Gates.NOR key={Date.now() + index} {...item} />;
          case 'NOT':
            return <Gates.NOT key={Date.now() + index} {...item} />;
          case 'XNOR':
            return <Gates.XNOR key={Date.now() + index} {...item} />;
          case 'XOR':
            return <Gates.XOR key={Date.now() + index} {...item} />;
          case 'INPUT':
            return <Gates.INPUT key={Date.now() + index} {...item} />;
          case 'OUTPUT':
            return <Gates.OUTPUT key={Date.now() + index} {...item} />;
        }
      })}
      <svg height="100%" width="100%">
        {lines.map((item, index) => (
          <Line id={item.id} key={Date.now() + index + 'line'} {...item} />
        ))}
        {newLine ? <Line {...newLine} /> : null}
      </svg>
    </div>
  );
}

function Line(props) {
  const [hovered, setHovered] = useState(false);

  function handleDelete() {
    props.remove(props.serial);
  }
  return (
    <line
      id="line"
      className="line"
      {...props}
      style={{ stroke: props.on == 1 ? 'red' : 'gray', strokeWidth: hovered ? '5px' : '2px' }}
      onMouseLeave={() => setHovered(false)}
      onMouseEnter={() => setHovered(true)}
      onContextMenu={handleDelete}
    />
  );
}
