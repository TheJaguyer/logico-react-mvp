import { useState, useRef, useEffect } from 'react';
import Gates from './work-comps/Gates.jsx';
import Line from './work-comps/Line.jsx';
import TempLine from './work-comps/TempLine.jsx';

export default function Workspace() {
  const [pieces, setPieces] = useState([]);
  const [serial, setSerial] = useState(0);
  const [lines, setLines] = useState([]);
  const [newLine, setNewLine] = useState(false);
  const [nodeChange, setNodeChange] = useState(false);
  const nodes = useRef({});

  useEffect(() => {
    const interval = setInterval(() => {
      setNodeChange((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  /* ========== Functions for Drag and Drop features ========== */

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

  /* ========== Functions for Nodes ========== */

  function toggleNode(serial) {
    nodes.current = { ...nodes.current, [serial]: !nodes.current[serial] };
  }

  function addNode(serial) {
    if (!nodes.current[serial]) {
      nodes.current = { ...nodes.current, [serial]: false };
    }
  }

  function setNode(serial, bool) {
    nodes.current = { ...nodes.current, [serial]: bool };
  }

  function connectNodes() {
    for (let line of lines) {
      setNode(line.endNode, nodes.current[line.startNode]);
    }
  }

  connectNodes();

  /* ========== Functions for Pieces ========== */

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
    setPieces((prev) => [...prev, { name: type, x: x, y: y, serial: serial }]);
    setSerial((prev) => prev + 1);
  }

  /* ========== Functions for Lines ========== */

  function startLine(e) {
    if (e.target.id.includes('output')) {
      let X = e.pageX;
      let Y = e.pageY;
      setNewLine({ startNode: e.target.id, x: X, y: Y, serial: `line ${serial}` });
      setSerial((prev) => prev + 1);
    }
  }

  function follow(e) {
    if (newLine) {
      let X = e.pageX;
      let Y = e.pageY;
      let change = { ...newLine };
      change.x = X;
      change.y = Y;
      setNewLine(change);
    }
  }

  function endLine(e) {
    if (newLine && e.target.id.includes('input')) {
      let finalLine = {
        startNode: newLine.startNode,
        endNode: e.target.id,
        serial: newLine.serial,
      };
      setLines((prev) => [...prev, finalLine]);
      setNewLine(false);
    } else {
      setNewLine(false);
    }
  }

  /* ========== Rendering ========== */

  const gateProps = {
    nodes,
    toggleNode,
    addNode,
    setNode,
    removePiece,
    lines,
  };

  return (
    <div
      className="workspace"
      onDragOver={(e) => handleDragOver(e)}
      onDrop={(e) => handleDrop(e)}
      onMouseMove={(e) => follow(e)}
      onMouseDown={(e) => startLine(e)}
      onMouseUp={(e) => endLine(e)}
      onContextMenu={(e) => e.preventDefault()}
    >
      {pieces.map((item, index) => {
        switch (item.name) {
          case 'AND':
            addNode('A input ' + item.serial);
            addNode('B input ' + item.serial);
            addNode('output ' + item.serial);
            return <Gates.AND key={Date.now() + index} {...item} {...gateProps} />;
          case 'OR':
            addNode('A input ' + item.serial);
            addNode('B input ' + item.serial);
            addNode('output ' + item.serial);
            return <Gates.OR key={Date.now() + index} {...item} {...gateProps} />;
          case 'BUFFER':
            addNode('A input ' + item.serial);
            addNode('output ' + item.serial);
            return <Gates.BUFFER key={Date.now() + index} {...item} {...gateProps} />;
          case 'NAND':
            addNode('A input ' + item.serial);
            addNode('B input ' + item.serial);
            addNode('output ' + item.serial);
            return <Gates.NAND key={Date.now() + index} {...item} {...gateProps} />;
          case 'NOR':
            addNode('A input ' + item.serial);
            addNode('B input ' + item.serial);
            addNode('output ' + item.serial);
            return <Gates.NOR key={Date.now() + index} {...item} {...gateProps} />;
          case 'NOT':
            addNode('A input ' + item.serial);
            addNode('output ' + item.serial);
            return <Gates.NOT key={Date.now() + index} {...item} {...gateProps} />;
          case 'XNOR':
            addNode('A input ' + item.serial);
            addNode('B input ' + item.serial);
            addNode('output ' + item.serial);
            return <Gates.XNOR key={Date.now() + index} {...item} {...gateProps} />;
          case 'XOR':
            addNode('A input ' + item.serial);
            addNode('B input ' + item.serial);
            addNode('output ' + item.serial);
            return <Gates.XOR key={Date.now() + index} {...item} {...gateProps} />;
          case 'INPUT':
            addNode('output ' + item.serial);
            return <Gates.INPUT key={Date.now() + index} {...item} {...gateProps} />;
          case 'OUTPUT':
            addNode('A input ' + item.serial);
            return <Gates.OUTPUT key={Date.now() + index} {...item} {...gateProps} />;
        }
      })}
      <svg className="svg">
        {lines.map((item, index) => (
          <Line key={Date.now() + index + 'line'} {...item} remove={removeLine} pieces={pieces} nodes={nodes} />
        ))}
        {newLine ? <TempLine {...newLine} /> : null}
      </svg>
    </div>
  );
}
