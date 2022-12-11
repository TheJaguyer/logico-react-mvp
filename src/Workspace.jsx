import { useState, useEffect } from 'react';
import Gates from './work-comps/Gates.jsx';
import Line from './work-comps/Line.jsx';
import TempLine from './work-comps/TempLine.jsx';

var nodes = {};
var linesList = {};

export default function Workspace() {
  const [pieces, setPieces] = useState([]);
  const [serial, setSerial] = useState(0);
  const [lines, setLines] = useState([]);
  const [newLine, setNewLine] = useState(false);
  const [onNode, setOnNode] = useState(false);

  function setNodes(newNodes) {
    nodes = newNodes;
  }

  function setLinesList(newLines) {
    linesList = newLines;
  }

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
    setPieces((prev) => [...prev, { name: type, x: x, y: y, serial: serial }]);
    setSerial((prev) => prev + 1);
  }

  function startLine(startNode, e) {
    let X = e.pageX;
    let Y = e.pageY;
    setNewLine({ startNode: startNode, x: X, y: Y, serial: `line ${serial}` });
    setSerial((prev) => prev + 1);
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

  function endLine(endNode) {
    if (newLine) {
      let finalLine = { startNode: newLine.startNode, endNode: endNode, serial: newLine.serial };
      setLines((prev) => [...prev, finalLine]);
      setNewLine(false);
    } else {
      setNewLine(false);
    }
  }

  function cancelLine(e) {
    if (newLine && !e.target.id.includes('input')) {
      setNewLine(false);
    }
  }

  return (
    <div
      className="workspace"
      onDragOver={(e) => handleDragOver(e)}
      onDrop={(e) => handleDrop(e)}
      onMouseMove={(e) => follow(e)}
      onMouseUp={(e) => cancelLine(e)}
      onContextMenu={(e) => e.preventDefault()}
    >
      {pieces.map((item, index) => {
        switch (item.name) {
          case 'AND':
            return (
              <Gates.AND
                key={Date.now() + index}
                {...item}
                remove={removePiece}
                startLine={startLine}
                endLine={endLine}
                setNodes={setNodes}
                nodes={nodes}
                linesList={linesList}
                onNode={onNode}
                newLine={newLine}
              />
            );
          case 'OR':
            return (
              <Gates.OR
                key={Date.now() + index}
                {...item}
                remove={removePiece}
                startLine={startLine}
                endLine={endLine}
                setNodes={setNodes}
                nodes={nodes}
                linesList={linesList}
              />
            );
          case 'BUFFER':
            return (
              <Gates.BUFFER
                key={Date.now() + index}
                {...item}
                remove={removePiece}
                startLine={startLine}
                endLine={endLine}
                setNodes={setNodes}
                nodes={nodes}
                linesList={linesList}
              />
            );
          case 'NAND':
            return (
              <Gates.NAND
                key={Date.now() + index}
                {...item}
                remove={removePiece}
                startLine={startLine}
                endLine={endLine}
                setNodes={setNodes}
                nodes={nodes}
                linesList={linesList}
              />
            );
          case 'NOR':
            return (
              <Gates.NOR
                key={Date.now() + index}
                {...item}
                remove={removePiece}
                startLine={startLine}
                endLine={endLine}
                setNodes={setNodes}
                nodes={nodes}
                linesList={linesList}
              />
            );
          case 'NOT':
            return (
              <Gates.NOT
                key={Date.now() + index}
                {...item}
                remove={removePiece}
                startLine={startLine}
                endLine={endLine}
                setNodes={setNodes}
                nodes={nodes}
                linesList={linesList}
              />
            );
          case 'XNOR':
            return (
              <Gates.XNOR
                key={Date.now() + index}
                {...item}
                remove={removePiece}
                startLine={startLine}
                endLine={endLine}
                setNodes={setNodes}
                nodes={nodes}
                linesList={linesList}
              />
            );
          case 'XOR':
            return (
              <Gates.XOR
                key={Date.now() + index}
                {...item}
                remove={removePiece}
                startLine={startLine}
                endLine={endLine}
                setNodes={setNodes}
                nodes={nodes}
                linesList={linesList}
              />
            );
          case 'INPUT':
            return (
              <Gates.INPUT
                key={Date.now() + index}
                {...item}
                remove={removePiece}
                startLine={startLine}
                endLine={endLine}
                setNodes={setNodes}
                nodes={nodes}
                linesList={linesList}
                setOnNode={setOnNode}
              />
            );
          case 'OUTPUT':
            return (
              <Gates.OUTPUT
                key={Date.now() + index}
                {...item}
                remove={removePiece}
                startLine={startLine}
                endLine={endLine}
                setNodes={setNodes}
                nodes={nodes}
                linesList={linesList}
              />
            );
        }
      })}
      <svg className="svg">
        {lines.map((item, index) => (
          <Line
            key={Date.now() + index + 'line'}
            {...item}
            remove={removeLine}
            pieces={pieces}
            nodes={nodes}
            setNodes={setNodes}
            onNode={onNode}
            setLinesList={setLinesList}
            linesList={linesList}
          />
        ))}
        {newLine ? <TempLine {...newLine} /> : null}
      </svg>
    </div>
  );
}
