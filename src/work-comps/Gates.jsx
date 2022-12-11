import { useState, useEffect } from 'react';
import Node from './Node.jsx';

function AND(props) {
  const [A, setA] = useState(false);
  const [B, setB] = useState(false);
  const [out, setOut] = useState(false);
  const [hovered, setHovered] = useState(false);

  function logic() {
    setOut(A && B);
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

  const Aprops = { on: A, set: setA, hovered, pos: [5, 18], serial: 'A input ' + props.serial };
  const Bprops = { on: B, set: setB, hovered, pos: [5, 30], serial: 'B input ' + props.serial };
  const Outprops = { on: out, hovered, pos: [52, 24], serial: 'output ' + props.serial };

  useEffect(() => logic(), [A, B]);

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

/* ======================== Start Above ======================== */

function OR(props) {
  const [A, setA] = useState(props.nodes['A input ' + props.serial] || false);
  const [B, setB] = useState(props.nodes['B input ' + props.serial] || false);
  const [out, setOut] = useState(props.nodes['output ' + props.serial] || false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    props.setNodes({
      ...props.nodes,
      ['A input ' + props.serial]: A,
      ['B input ' + props.serial]: B,
      ['output ' + props.serial]: out,
    });
  }, [A, B, out]);

  useEffect(() => logic(), [A, B]);

  function logic() {
    setOut(A || B);
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

  const Aprops = { on: A, set: setA, hovered, pos: [5, 18], serial: 'A input ' + props.serial };
  const Bprops = { on: B, set: setB, hovered, pos: [5, 30], serial: 'B input ' + props.serial };
  const Outprops = { on: out, hovered, pos: [52, 24], serial: 'output ' + props.serial };

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
      <Node.Input {...Aprops} endLine={props.endLine} nodes={props.nodes} setNodes={props.setNodes} />
      <Node.Input {...Bprops} endLine={props.endLine} nodes={props.nodes} setNodes={props.setNodes} />
      <Node.Output {...Outprops} startLine={props.startLine} nodes={props.nodes} setNodes={props.setNodes} />
    </div>
  );
}

function BUFFER(props) {
  const [A, setA] = useState(props.nodes['A input ' + props.serial] || false);
  const [out, setOut] = useState(props.nodes['output ' + props.serial] || false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    props.setNodes({
      ...props.nodes,
      ['A input ' + props.serial]: A,
      ['output ' + props.serial]: out,
    });
  }, [A, out]);

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

  const Aprops = { on: A, set: setA, hovered, pos: [5, 24], serial: 'A input ' + props.serial };
  const Outprops = { on: out, hovered, pos: [52, 24], serial: 'output ' + props.serial };

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
      <Node.Input {...Aprops} endLine={props.endLine} nodes={props.nodes} setNodes={props.setNodes} />
      <Node.Output {...Outprops} startLine={props.startLine} nodes={props.nodes} setNodes={props.setNodes} />
    </div>
  );
}

function NAND(props) {
  const [A, setA] = useState(props.nodes['A input ' + props.serial] || false);
  const [B, setB] = useState(props.nodes['B input ' + props.serial] || false);
  const [out, setOut] = useState(props.nodes['output ' + props.serial] || false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    props.setNodes({
      ...props.nodes,
      ['A input ' + props.serial]: A,
      ['B input ' + props.serial]: B,
      ['output ' + props.serial]: out,
    });
  }, [A, B, out]);

  useEffect(() => logic(), [A, B]);

  function logic() {
    setOut(!(A && B));
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

  const Aprops = { on: A, set: setA, hovered, pos: [5, 18], serial: 'A input ' + props.serial };
  const Bprops = { on: B, set: setB, hovered, pos: [5, 30], serial: 'B input ' + props.serial };
  const Outprops = { on: out, hovered, pos: [52, 24], serial: 'output ' + props.serial };

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
      <Node.Input {...Aprops} endLine={props.endLine} nodes={props.nodes} setNodes={props.setNodes} />
      <Node.Input {...Bprops} endLine={props.endLine} nodes={props.nodes} setNodes={props.setNodes} />
      <Node.Output {...Outprops} startLine={props.startLine} nodes={props.nodes} setNodes={props.setNodes} />
    </div>
  );
}

function NOR(props) {
  const [A, setA] = useState(props.nodes['A input ' + props.serial] || false);
  const [B, setB] = useState(props.nodes['B input ' + props.serial] || false);
  const [out, setOut] = useState(props.nodes['output ' + props.serial] || false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    props.setNodes({
      ...props.nodes,
      ['A input ' + props.serial]: A,
      ['B input ' + props.serial]: B,
      ['output ' + props.serial]: out,
    });
  }, [A, B, out]);

  useEffect(() => logic(), [A, B]);

  function logic() {
    setOut(!(A || B));
  }

  function handleDelete() {
    props.remove(props.serial);
  }

  function handleDragStart(e) {
    e.target.style.opacity = '0.5';
    e.dataTransfer.setData('props', JSON.stringify(props));
  }
  function handleDragEnd(e) {
    e.target.style.opacity = '1';
  }

  const Aprops = { on: A, set: setA, hovered, pos: [5, 18], serial: 'A input ' + props.serial };
  const Bprops = { on: B, set: setB, hovered, pos: [5, 30], serial: 'B input ' + props.serial };
  const Outprops = { on: out, hovered, pos: [52, 24], serial: 'output ' + props.serial };

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
      <Node.Input {...Aprops} endLine={props.endLine} nodes={props.nodes} setNodes={props.setNodes} />
      <Node.Input {...Bprops} endLine={props.endLine} nodes={props.nodes} setNodes={props.setNodes} />
      <Node.Output {...Outprops} startLine={props.startLine} nodes={props.nodes} setNodes={props.setNodes} />
    </div>
  );
}

function NOT(props) {
  const [A, setA] = useState(props.nodes['A input ' + props.serial] || false);
  const [out, setOut] = useState(props.nodes['output ' + props.serial] || false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    props.setNodes({
      ...props.nodes,
      ['A input ' + props.serial]: A,
      ['output ' + props.serial]: out,
    });
  }, [A, out]);

  useEffect(() => logic(), [A]);

  function logic() {
    setOut(!A);
  }

  function handleDelete() {
    props.remove(props.serial);
  }

  function handleDragStart(e) {
    e.target.style.opacity = '0.5';
    e.dataTransfer.setData('props', JSON.stringify(props));
  }
  function handleDragEnd(e) {
    e.target.style.opacity = '1';
  }

  const Aprops = { on: A, set: setA, hovered, pos: [5, 24], serial: 'A input ' + props.serial };
  const Outprops = { on: out, hovered, pos: [52, 24], serial: 'output ' + props.serial };

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
      <Node.Input {...Aprops} endLine={props.endLine} nodes={props.nodes} setNodes={props.setNodes} />
      <Node.Output {...Outprops} startLine={props.startLine} nodes={props.nodes} setNodes={props.setNodes} />
    </div>
  );
}

function XNOR(props) {
  const [A, setA] = useState(props.nodes['A input ' + props.serial] || false);
  const [B, setB] = useState(props.nodes['B input ' + props.serial] || false);
  const [out, setOut] = useState(props.nodes['output ' + props.serial] || false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    props.setNodes({
      ...props.nodes,
      ['A input ' + props.serial]: A,
      ['B input ' + props.serial]: B,
      ['output ' + props.serial]: out,
    });
  }, [A, B, out]);

  useEffect(() => logic(), [A, B]);

  function logic() {
    setOut(A === B);
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

  const Aprops = { on: A, set: setA, hovered, pos: [5, 18], serial: 'A input ' + props.serial };
  const Bprops = { on: B, set: setB, hovered, pos: [5, 30], serial: 'B input ' + props.serial };
  const Outprops = { on: out, hovered, pos: [52, 24], serial: 'output ' + props.serial };

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
      <Node.Input {...Aprops} endLine={props.endLine} nodes={props.nodes} setNodes={props.setNodes} />
      <Node.Input {...Bprops} endLine={props.endLine} nodes={props.nodes} setNodes={props.setNodes} />
      <Node.Output {...Outprops} startLine={props.startLine} nodes={props.nodes} setNodes={props.setNodes} />
    </div>
  );
}

function XOR(props) {
  const [A, setA] = useState(props.nodes['A input ' + props.serial] || false);
  const [B, setB] = useState(props.nodes['B input ' + props.serial] || false);
  const [out, setOut] = useState(props.nodes['output ' + props.serial] || false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    props.setNodes({
      ...props.nodes,
      ['A input ' + props.serial]: A,
      ['B input ' + props.serial]: B,
      ['output ' + props.serial]: out,
    });
  }, [A, B, out]);

  useEffect(() => logic(), [A, B]);

  function logic() {
    setOut(A ? !B : B);
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

  const Aprops = { on: A, set: setA, hovered, pos: [5, 18], serial: 'A input ' + props.serial };
  const Bprops = { on: B, set: setB, hovered, pos: [5, 30], serial: 'B input ' + props.serial };
  const Outprops = { on: out, hovered, pos: [52, 24], serial: 'output ' + props.serial };

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
      <Node.Input {...Aprops} endLine={props.endLine} nodes={props.nodes} setNodes={props.setNodes} />
      <Node.Input {...Bprops} endLine={props.endLine} nodes={props.nodes} setNodes={props.setNodes} />
      <Node.Output {...Outprops} startLine={props.startLine} nodes={props.nodes} setNodes={props.setNodes} />
    </div>
  );
}

function INPUT(props) {
  const [out, setOut] = useState(props.nodes['output ' + props.serial] || false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    props.setNodes({
      ...props.nodes,
      ['output ' + props.serial]: out,
    });
  }, [out]);

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

  const Outprops = { on: out, hovered, pos: [30, 14], serial: 'output ' + props.serial };

  return (
    <div
      id={'input ' + props.serial}
      style={{ top: props.y, left: props.x, backgroundColor: out ? 'red' : 'black' }}
      className="input"
      draggable={hovered ? true : false}
      onDragStart={(e) => handleDragStart(e)}
      onDragEnd={(e) => handleDragEnd(e)}
      onMouseEnter={() => {
        setHovered(true);
        props.setOnNode(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
        props.setOnNode(false);
      }}
      onContextMenu={handleDelete}
      onClick={() => setOut((prev) => !prev)}
    >
      <Node.Output {...Outprops} startLine={props.startLine} nodes={props.nodes} setNodes={props.setNodes} />
    </div>
  );
}

function OUTPUT(props) {
  const [A, setA] = useState(props.nodes['A input ' + props.serial] || false);
  const [out, setOut] = useState(props.nodes['output ' + props.serial] || false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    props.setNodes({
      ...props.nodes,
      ['A input ' + props.serial]: A,
    });
  }, [A]);

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

  const Aprops = { on: A, set: setA, hovered, pos: [-3, 31], serial: 'A input ' + props.serial };

  return (
    <div
      id={'input ' + props.serial}
      style={{ top: props.y, left: props.x, backgroundColor: out ? 'red' : 'black' }}
      className="output"
      draggable={hovered ? true : false}
      onDragStart={(e) => handleDragStart(e)}
      onDragEnd={(e) => handleDragEnd(e)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onContextMenu={handleDelete}
    >
      <Node.Input {...Aprops} endLine={props.endLine} nodes={props.nodes} setNodes={props.setNodes} />
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
