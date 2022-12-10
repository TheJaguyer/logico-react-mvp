import { useState } from 'react';

function Input(props) {
  return (
    <div
      id={props.id}
      className="node"
      onClick={() => props.set((prev) => !prev)}
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
      id={props.id}
      className="node"
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
