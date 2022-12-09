import { useState } from 'react';
import gates from './work-comps/Gates.js';
import Piece from './work-comps/Piece.jsx';

export default function Workspace() {
  const [pieces, setPieces] = useState([]);
  const [pieceIDs, setPieceIDs] = useState([]);
  const [serial, setSerial] = useState(0);

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
    let index = pieceIDs.indexOf(moved.id);
    moved.x = X;
    moved.y = Y;
    setPieces((prev) => [...prev.map((item) => (item.id === moved.id ? moved : item))]);
  }

  function addPiece(type, x, y) {
    setPieces((prev) => [...prev, new gates[type](serial, x, y)]);
    setPieceIDs((prev) => [...prev, serial]);
    setSerial((prev) => prev + 1);
  }

  return (
    <div className="workspace" onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e)}>
      Workspace
      {pieces.map((item, index) => (
        <Piece key={Date.now() + index} {...item} />
      ))}
    </div>
  );
}
