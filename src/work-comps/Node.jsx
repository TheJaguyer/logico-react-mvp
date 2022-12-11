import { useEffect, useState } from 'react';

function Input(props) {
  const [sister, setSister] = useState('');
  function flip() {
    props.set((prev) => !prev);
  }

  useEffect(() => {
    try {
      props.set(props.nodes[sister]);
    } catch {
      return;
    }
  }, [props.onNode]);

  function onLineEnd() {
    props.endLine(props.serial);
    setSister(props.newLine.startNode);
  }

  return (
    <div
      id={props.serial}
      className="node"
      onClick={flip}
      onMouseUp={onLineEnd}
      style={{
        left: props.pos[0] - 5,
        top: props.pos[1] - 5,
        position: 'absolute',
        backgroundColor: props.on ? 'red' : 'black',
        visibility: props.hovered ? 'visible' : 'hidden',
        cursor: 'pointer',
      }}
    ></div>
  );
}

function Output(props) {
  return (
    <div
      id={props.serial}
      className="node"
      onMouseDown={(e) => props.startLine(props.serial, e, props.on)}
      style={{
        left: props.pos[0] - 5,
        top: props.pos[1] - 5,
        position: 'absolute',
        backgroundColor: props.on ? 'red' : 'black',
        visibility: props.hovered ? 'visible' : 'hidden',
        cursor: 'pointer',
      }}
    ></div>
  );
}

const Node = {
  Input: Input,
  Output: Output,
};

export default Node;
