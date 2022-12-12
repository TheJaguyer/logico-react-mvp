import { useState, useEffect } from 'react';
import Node from './Node.jsx';

function AND(props) {
  let nodeA = 'A input ' + props.serial;
  let nodeB = 'B input ' + props.serial;
  let outNode = 'output ' + props.serial;

  const [hovered, setHovered] = useState(false);
  const [out, setOut] = useState(false);
  const [A, setA] = useState(props.nodes.current[nodeA] || false);
  const [B, setB] = useState(props.nodes.current[nodeB] || false);

  function handleDragStart(e) {
    e.target.style.opacity = '0.5';
    e.dataTransfer.setData('props', JSON.stringify(props));
  }

  function handleDragEnd(e) {
    e.target.style.opacity = '1';
  }

  function handleDelete() {
    props.removePiece(props.serial);
  }

  function logic() {
    return props.nodes.current[nodeA] && props.nodes.current[nodeB];
  }

  useEffect(() => {
    props.setNode(outNode, logic());
    setOut(logic());
  }, [A, B]);

  const Aprops = {
    on: A,
    set: setA,
    hovered: hovered,
    pos: [5, 18],
    serial: nodeA,
    nodes: props.nodes,
    toggleNode: props.toggleNode,
  };
  const Bprops = {
    on: B,
    set: setB,
    hovered: hovered,
    pos: [5, 30],
    serial: nodeB,
    nodes: props.nodes,
    toggleNode: props.toggleNode,
  };
  const Outprops = {
    on: out,
    hovered: hovered,
    pos: [52, 24],
    serial: outNode,
    nodes: props.nodes,
  };

  return (
    <div
      id={'AND gate ' + props.serial}
      style={{ top: props.y, left: props.x, backgroundImage: `url(./images/AND.png)` }}
      className="piece"
      draggable={hovered ? true : false}
      onDragStart={(e) => handleDragStart(e)}
      onDragEnd={(e) => handleDragEnd(e)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onContextMenu={handleDelete}
    >
      <Node.Input {...Aprops} endLine={props.endLine} />
      <Node.Input {...Bprops} endLine={props.endLine} />
      <Node.Output {...Outprops} startLine={props.startLine} />
    </div>
  );
}

function OR(props) {
  let nodeA = 'A input ' + props.serial;
  let nodeB = 'B input ' + props.serial;
  let outNode = 'output ' + props.serial;

  const [hovered, setHovered] = useState(false);
  const [out, setOut] = useState(false);
  const [A, setA] = useState(props.nodes.current[nodeA] || false);
  const [B, setB] = useState(props.nodes.current[nodeB] || false);

  function handleDragStart(e) {
    e.target.style.opacity = '0.5';
    e.dataTransfer.setData('props', JSON.stringify(props));
  }

  function handleDragEnd(e) {
    e.target.style.opacity = '1';
  }

  function handleDelete() {
    props.removePiece(props.serial);
  }

  function logic() {
    return props.nodes.current[nodeA] || props.nodes.current[nodeB];
  }

  useEffect(() => {
    props.setNode(outNode, logic());
    setOut(logic());
  }, [A, B]);

  const Aprops = {
    on: A,
    set: setA,
    hovered: hovered,
    pos: [5, 18],
    serial: nodeA,
    nodes: props.nodes,
    toggleNode: props.toggleNode,
  };
  const Bprops = {
    on: B,
    set: setB,
    hovered: hovered,
    pos: [5, 30],
    serial: nodeB,
    nodes: props.nodes,
    toggleNode: props.toggleNode,
  };
  const Outprops = {
    on: out,
    hovered: hovered,
    pos: [52, 24],
    serial: outNode,
    nodes: props.nodes,
  };

  return (
    <div
      id={'OR gate ' + props.serial}
      style={{ top: props.y, left: props.x, backgroundImage: `url(./images/OR.png)` }}
      className="piece"
      draggable={hovered ? true : false}
      onDragStart={(e) => handleDragStart(e)}
      onDragEnd={(e) => handleDragEnd(e)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onContextMenu={handleDelete}
    >
      <Node.Input {...Aprops} endLine={props.endLine} />
      <Node.Input {...Bprops} endLine={props.endLine} />
      <Node.Output {...Outprops} startLine={props.startLine} />
    </div>
  );
}

function BUFFER(props) {
  let nodeA = 'A input ' + props.serial;
  let outNode = 'output ' + props.serial;

  const [hovered, setHovered] = useState(false);
  const [out, setOut] = useState(false);
  const [A, setA] = useState(props.nodes.current[nodeA] || false);

  function handleDragStart(e) {
    e.target.style.opacity = '0.5';
    e.dataTransfer.setData('props', JSON.stringify(props));
  }

  function handleDragEnd(e) {
    e.target.style.opacity = '1';
  }

  function handleDelete() {
    props.removePiece(props.serial);
  }

  function logic() {
    return props.nodes.current[nodeA];
  }

  useEffect(() => {
    props.setNode(outNode, logic());
    setOut(logic());
  }, [A]);

  const Aprops = {
    on: A,
    set: setA,
    hovered: hovered,
    pos: [5, 24],
    serial: nodeA,
    nodes: props.nodes,
    toggleNode: props.toggleNode,
  };
  const Outprops = {
    on: out,
    hovered: hovered,
    pos: [52, 24],
    serial: outNode,
    nodes: props.nodes,
  };

  return (
    <div
      id={'BUFFER gate ' + props.serial}
      style={{ top: props.y, left: props.x, backgroundImage: `url(./images/BUFFER.png)` }}
      className="piece"
      draggable={hovered ? true : false}
      onDragStart={(e) => handleDragStart(e)}
      onDragEnd={(e) => handleDragEnd(e)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onContextMenu={handleDelete}
    >
      <Node.Input {...Aprops} endLine={props.endLine} />
      <Node.Output {...Outprops} startLine={props.startLine} />
    </div>
  );
}

function NAND(props) {
  let nodeA = 'A input ' + props.serial;
  let nodeB = 'B input ' + props.serial;
  let outNode = 'output ' + props.serial;

  const [hovered, setHovered] = useState(false);
  const [out, setOut] = useState(false);
  const [A, setA] = useState(props.nodes.current[nodeA] || false);
  const [B, setB] = useState(props.nodes.current[nodeB] || false);

  function handleDragStart(e) {
    e.target.style.opacity = '0.5';
    e.dataTransfer.setData('props', JSON.stringify(props));
  }

  function handleDragEnd(e) {
    e.target.style.opacity = '1';
  }

  function handleDelete() {
    props.removePiece(props.serial);
  }

  function logic() {
    return !(props.nodes.current[nodeA] && props.nodes.current[nodeB]);
  }

  useEffect(() => {
    props.setNode(outNode, logic());
    setOut(logic());
  }, [A, B]);

  const Aprops = {
    on: A,
    set: setA,
    hovered: hovered,
    pos: [5, 18],
    serial: nodeA,
    nodes: props.nodes,
    toggleNode: props.toggleNode,
  };
  const Bprops = {
    on: B,
    set: setB,
    hovered: hovered,
    pos: [5, 30],
    serial: nodeB,
    nodes: props.nodes,
    toggleNode: props.toggleNode,
  };
  const Outprops = {
    on: out,
    hovered: hovered,
    pos: [52, 24],
    serial: outNode,
    nodes: props.nodes,
  };

  return (
    <div
      id={'NAND gate ' + props.serial}
      style={{ top: props.y, left: props.x, backgroundImage: `url(./images/NAND.png)` }}
      className="piece"
      draggable={hovered ? true : false}
      onDragStart={(e) => handleDragStart(e)}
      onDragEnd={(e) => handleDragEnd(e)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onContextMenu={handleDelete}
    >
      <Node.Input {...Aprops} endLine={props.endLine} />
      <Node.Input {...Bprops} endLine={props.endLine} />
      <Node.Output {...Outprops} startLine={props.startLine} />
    </div>
  );
}

function NOR(props) {
  let nodeA = 'A input ' + props.serial;
  let nodeB = 'B input ' + props.serial;
  let outNode = 'output ' + props.serial;

  const [hovered, setHovered] = useState(false);
  const [out, setOut] = useState(false);
  const [A, setA] = useState(props.nodes.current[nodeA] || false);
  const [B, setB] = useState(props.nodes.current[nodeB] || false);

  function handleDragStart(e) {
    e.target.style.opacity = '0.5';
    e.dataTransfer.setData('props', JSON.stringify(props));
  }

  function handleDragEnd(e) {
    e.target.style.opacity = '1';
  }

  function handleDelete() {
    props.removePiece(props.serial);
  }

  function logic() {
    return !(props.nodes.current[nodeA] || props.nodes.current[nodeB]);
  }

  useEffect(() => {
    props.setNode(outNode, logic());
    setOut(logic());
  }, [A, B]);

  const Aprops = {
    on: A,
    set: setA,
    hovered: hovered,
    pos: [5, 18],
    serial: nodeA,
    nodes: props.nodes,
    toggleNode: props.toggleNode,
  };
  const Bprops = {
    on: B,
    set: setB,
    hovered: hovered,
    pos: [5, 30],
    serial: nodeB,
    nodes: props.nodes,
    toggleNode: props.toggleNode,
  };
  const Outprops = {
    on: out,
    hovered: hovered,
    pos: [52, 24],
    serial: outNode,
    nodes: props.nodes,
  };

  return (
    <div
      id={'NOR gate ' + props.serial}
      style={{ top: props.y, left: props.x, backgroundImage: `url(./images/NOR.png)` }}
      className="piece"
      draggable={hovered ? true : false}
      onDragStart={(e) => handleDragStart(e)}
      onDragEnd={(e) => handleDragEnd(e)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onContextMenu={handleDelete}
    >
      <Node.Input {...Aprops} endLine={props.endLine} />
      <Node.Input {...Bprops} endLine={props.endLine} />
      <Node.Output {...Outprops} startLine={props.startLine} />
    </div>
  );
}

function NOT(props) {
  let nodeA = 'A input ' + props.serial;
  let outNode = 'output ' + props.serial;

  const [hovered, setHovered] = useState(false);
  const [out, setOut] = useState(false);
  const [A, setA] = useState(props.nodes.current[nodeA] || false);

  function handleDragStart(e) {
    e.target.style.opacity = '0.5';
    e.dataTransfer.setData('props', JSON.stringify(props));
  }

  function handleDragEnd(e) {
    e.target.style.opacity = '1';
  }

  function handleDelete() {
    props.removePiece(props.serial);
  }

  function logic() {
    return !props.nodes.current[nodeA];
  }

  useEffect(() => {
    props.setNode(outNode, logic());
    setOut(logic());
  }, [A]);

  const Aprops = {
    on: A,
    set: setA,
    hovered: hovered,
    pos: [5, 24],
    serial: nodeA,
    nodes: props.nodes,
    toggleNode: props.toggleNode,
  };
  const Outprops = {
    on: out,
    hovered: hovered,
    pos: [52, 24],
    serial: outNode,
    nodes: props.nodes,
  };

  return (
    <div
      id={'NOT gate ' + props.serial}
      style={{ top: props.y, left: props.x, backgroundImage: `url(./images/NOT.png)` }}
      className="piece"
      draggable={hovered ? true : false}
      onDragStart={(e) => handleDragStart(e)}
      onDragEnd={(e) => handleDragEnd(e)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onContextMenu={handleDelete}
    >
      <Node.Input {...Aprops} endLine={props.endLine} />
      <Node.Output {...Outprops} startLine={props.startLine} />
    </div>
  );
}

function XNOR(props) {
  let nodeA = 'A input ' + props.serial;
  let nodeB = 'B input ' + props.serial;
  let outNode = 'output ' + props.serial;

  const [hovered, setHovered] = useState(false);
  const [out, setOut] = useState(false);
  const [A, setA] = useState(props.nodes.current[nodeA] || false);
  const [B, setB] = useState(props.nodes.current[nodeB] || false);

  function handleDragStart(e) {
    e.target.style.opacity = '0.5';
    e.dataTransfer.setData('props', JSON.stringify(props));
  }

  function handleDragEnd(e) {
    e.target.style.opacity = '1';
  }

  function handleDelete() {
    props.removePiece(props.serial);
  }

  function logic() {
    return props.nodes.current[nodeA] === props.nodes.current[nodeB];
  }

  useEffect(() => {
    props.setNode(outNode, logic());
    setOut(logic());
  }, [A, B]);

  const Aprops = {
    on: A,
    set: setA,
    hovered: hovered,
    pos: [5, 18],
    serial: nodeA,
    nodes: props.nodes,
    toggleNode: props.toggleNode,
  };
  const Bprops = {
    on: B,
    set: setB,
    hovered: hovered,
    pos: [5, 30],
    serial: nodeB,
    nodes: props.nodes,
    toggleNode: props.toggleNode,
  };
  const Outprops = {
    on: out,
    hovered: hovered,
    pos: [52, 24],
    serial: outNode,
    nodes: props.nodes,
  };

  return (
    <div
      id={'XNOR gate ' + props.serial}
      style={{ top: props.y, left: props.x, backgroundImage: `url(./images/XNOR.png)` }}
      className="piece"
      draggable={hovered ? true : false}
      onDragStart={(e) => handleDragStart(e)}
      onDragEnd={(e) => handleDragEnd(e)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onContextMenu={handleDelete}
    >
      <Node.Input {...Aprops} endLine={props.endLine} />
      <Node.Input {...Bprops} endLine={props.endLine} />
      <Node.Output {...Outprops} startLine={props.startLine} />
    </div>
  );
}

function XOR(props) {
  let nodeA = 'A input ' + props.serial;
  let nodeB = 'B input ' + props.serial;
  let outNode = 'output ' + props.serial;

  const [hovered, setHovered] = useState(false);
  const [out, setOut] = useState(false);
  const [A, setA] = useState(props.nodes.current[nodeA] || false);
  const [B, setB] = useState(props.nodes.current[nodeB] || false);

  function handleDragStart(e) {
    e.target.style.opacity = '0.5';
    e.dataTransfer.setData('props', JSON.stringify(props));
  }

  function handleDragEnd(e) {
    e.target.style.opacity = '1';
  }

  function handleDelete() {
    props.removePiece(props.serial);
  }

  function logic() {
    return props.nodes.current[nodeA] ? !props.nodes.current[nodeB] : props.nodes.current[nodeB];
  }

  useEffect(() => {
    props.setNode(outNode, logic());
    setOut(logic());
  }, [A, B]);

  const Aprops = {
    on: A,
    set: setA,
    hovered: hovered,
    pos: [5, 18],
    serial: nodeA,
    nodes: props.nodes,
    toggleNode: props.toggleNode,
  };
  const Bprops = {
    on: B,
    set: setB,
    hovered: hovered,
    pos: [5, 30],
    serial: nodeB,
    nodes: props.nodes,
    toggleNode: props.toggleNode,
  };
  const Outprops = {
    on: out,
    hovered: hovered,
    pos: [52, 24],
    serial: outNode,
    nodes: props.nodes,
  };

  return (
    <div
      id={'XOR gate ' + props.serial}
      style={{ top: props.y, left: props.x, backgroundImage: `url(./images/XOR.png)` }}
      className="piece"
      draggable={hovered ? true : false}
      onDragStart={(e) => handleDragStart(e)}
      onDragEnd={(e) => handleDragEnd(e)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onContextMenu={handleDelete}
    >
      <Node.Input {...Aprops} endLine={props.endLine} />
      <Node.Input {...Bprops} endLine={props.endLine} />
      <Node.Output {...Outprops} startLine={props.startLine} />
    </div>
  );
}

function INPUT(props) {
  let outNode = 'output ' + props.serial;

  const [hovered, setHovered] = useState(false);
  const [out, setOut] = useState(props.nodes.current[outNode] || false);

  function handleDragStart(e) {
    e.target.style.opacity = '0.5';
    e.dataTransfer.setData('props', JSON.stringify(props));
  }
  function handleDragEnd(e) {
    e.target.style.opacity = '1';
  }

  function handleDelete() {
    props.remove(props.serial);
  }

  useEffect(() => {
    props.setNode(outNode, out);
    setOut(out);
  }, [out]);

  const Outprops = {
    on: out,
    hovered: hovered,
    pos: [30, 14],
    serial: outNode,
    nodes: props.nodes,
  };

  function handleClick() {
    setOut((prev) => !prev);
    props.setNode(outNode, out);
  }

  return (
    <div
      id={'INPUT ' + props.serial}
      style={{ top: props.y, left: props.x, backgroundColor: out ? 'red' : 'black' }}
      className="input"
      draggable={hovered ? true : false}
      onDragStart={(e) => handleDragStart(e)}
      onDragEnd={(e) => handleDragEnd(e)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onContextMenu={handleDelete}
      onClick={handleClick}
    >
      <Node.Output {...Outprops} startLine={props.startLine} />
    </div>
  );
}

function OUTPUT(props) {
  let nodeA = 'A input ' + props.serial;

  const [hovered, setHovered] = useState(false);
  const [out, setOut] = useState(false);
  const [A, setA] = useState(props.nodes.current[nodeA] || false);

  useEffect(() => logic(), [A]);

  function logic() {
    setOut(A);
  }

  function handleDragStart(e) {
    e.target.style.opacity = '0.5';
    e.dataTransfer.setData('props', JSON.stringify(props));
  }
  function handleDragEnd(e) {
    e.target.style.opacity = '1';
  }

  function handleDelete() {
    props.remove(props.serial);
  }

  const Aprops = {
    on: A,
    set: setA,
    hovered: hovered,
    pos: [-3, 30],
    serial: nodeA,
    nodes: props.nodes,
    toggleNode: props.toggleNode,
  };

  return (
    <div
      id={'OUTPUT ' + props.serial}
      style={{ top: props.y, left: props.x, backgroundColor: out ? 'red' : 'black' }}
      className="output"
      draggable={hovered ? true : false}
      onDragStart={(e) => handleDragStart(e)}
      onDragEnd={(e) => handleDragEnd(e)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onContextMenu={handleDelete}
    >
      <Node.Input {...Aprops} endLine={props.endLine} />
    </div>
  );
}

const Gates = {
  AND: AND,
  OR: OR,
  BUFFER: BUFFER,
  NAND: NAND,
  NOR: NOR,
  NOT: NOT,
  XNOR: XNOR,
  XOR: XOR,
  INPUT: INPUT,
  OUTPUT: OUTPUT,
};

export default Gates;
